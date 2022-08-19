const functions = require("firebase-functions");

const admin = require("firebase-admin");
const axios = require("axios");
admin.initializeApp();

const stripe = require("stripe")(functions.config().stripe.sdk);

const handleStripeCheckout = async (data, context) => {
  const stripeItems = data.products.map((product) => {
    return {
      price_data: {
        currency: "USD",
        product_data: {
          name: product.name,
          description: product.description,
          images: [product.image],
        },
        unit_amount: product.price * 100, // to cents
      },
      quantity: 1,
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    success_url: data.successPage,
    cancel_url: data.cancelPage,
    discounts: [{
      coupon: data.coupon_id,
    }],
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
    payment_method_types: ['card'],
    phone_number_collection: {
      enabled: true,
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'usd',
          },
          display_name: 'Pickup',
        }
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1000,
            currency: 'usd',
          },
          display_name: 'Standard shipping',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 7,
            },
            maximum: {
              unit: 'business_day',
              value: 10,
            },
          }
        }
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'usd',
          },
          display_name: 'Express',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          }
        }
      },
    ],
  })

  return {checkoutUrl: session.url, sessionId: session.id};
};

const getSession = async (data, context) => {
  const session = await stripe.checkout.sessions.retrieve(
      data.sessionId
  );

  return { session }
}

const uploadFile = async (data, context) => {
  const file = {
    lastModified: 1659587314000,
    // lastModifiedDate: Wed Aug 03 2022 21:28:34 GMT-0700 (Mountain Standard Time) {}
    name: "9092B985-8E3F-40C1-B088-9EA002B18E6F.JPG",
    size: 198357,
    type: "image/jpeg",
    webkitRelativePath: ""
  }
  axios.get("https://api.backblazeb2.com/b2api/v2/b2_authorize_account", {
    headers: { Authorization: "BasicMDA0MzVlNmJjNjIwY2NiMDAwMDAwMDAwMTpLMDA0NjZ2bDY2ZjE3SVNwdTFVeTZkeWtlNittZGxR" },
  })
      .then(response => {
        const apiUrl = response.data.apiUrl
        axios.get(`${apiUrl}/b2api/v2/b2_get_upload_url`, {
          headers: { Authorization: functions.config().ACCOUNT_AUTHORIZATION_TOKEN },
          data: { bucketId: "2335ee169bccf642800c0c1b" }
        })
            .then(r => {
              const uploadUrl = r.data.uploadUrl
              axios.post(uploadUrl, {}, {
                headers: { 
                  Authorization: functions.config().ACCOUNT_AUTHORIZATION_TOKEN,
                  "X-Bz-File-Name": data.filename,
                  "Content-Type": "b2/x-auto",
                  "Content-Length": data.content_length,
                  "X-Bz-Content-Sha1": "",
                },
                
              })
            })
      })
}

exports.getStripeCheckoutUrl = functions.https.onCall(handleStripeCheckout);
exports.getSession = functions.https.onCall(getSession);
exports.uploadFile = functions.https.onCall(uploadFile)
