const functions = require("firebase-functions");

const admin = require("firebase-admin");
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

exports.getStripeCheckoutUrl = functions.https.onCall(handleStripeCheckout);
exports.getSession = functions.https.onCall(getSession);
