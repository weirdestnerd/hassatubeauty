import React, { useEffect, useState } from "react";
import rn from "random-number";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import LoadingOverlay from "../loading/LoadingOverlay";
import { getActiveOrders, getCartProducts, getSession } from "../../firebase";
import { useSignedInUser } from "../../hooks/UserHook";
import { getProduct, lacesExists } from "../../helpers/utils";

function OrderDetails() {
  const [loading, setLoading] = useState(true);
  const [fulfilledCart, setFulfilledCart] = useState(null);
  const [stripeSession, setStripeSession] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const user = useSignedInUser();

  useEffect(() => {
    if (fulfilledCart && stripeSession) setLoading(false);
    if (!user || !loading || (fulfilledCart && stripeSession)) return;

    getActiveOrders(user.uid).then((snapshot) => {
      const recentOrder = snapshot.docs[0].data();
      setOrderId(recentOrder.orderId);
      const products = getCartProducts(user.uid, recentOrder.cart);
      setFulfilledCart(products);
      getSession({ sessionId: recentOrder.sessionId }).then((session) => {
        setStripeSession(session.data.session);
      });
    });
  }, [user, loading, fulfilledCart, stripeSession]);

  const renderCustomization = (productInfo, product) => {
    const content = [
      product.texture[productInfo.texture],
      lacesExists(product) && product.laces[productInfo.lace],
      `${productInfo.hairLength}"`,
    ].join(" - ");

    return <p className="mt-1 text-sm text-gray-500">{content}</p>;
  };

  const renderProducts = () => {
    return fulfilledCart.map((productInfo) => {
      const product = getProduct(productInfo.key, productInfo.type);
      const firstImageKey = Object.keys(product.images)[0];
      const productImage = product.images[firstImageKey][0];

      return (
        <div
          key={rn()}
          className="py-10 border-b border-gray-200 flex space-x-6"
        >
          <img
            src={productImage.src}
            alt={productImage.alt}
            className="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
          />
          <div className="flex-auto flex flex-col">
            <div>
              <h4 className="font-medium text-gray-900">
                <a href={product.href}>{product.name}</a>
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                {renderCustomization(productInfo, product)}
              </p>
            </div>
            <div className="mt-6 flex-1 flex items-end">
              <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                <div className="flex">
                  <dt className="font-medium text-gray-900">Price</dt>
                  <dd className="ml-2 text-gray-700">${productInfo.price}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      );
    });
  };

  if (loading) return <LoadingOverlay />;

  return (
    <div className="bg-gray-50">
      <Navbar />

      <main className="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-xl">
            <h1 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Thank you!
            </h1>
            <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              We&apos;ve received your order
            </p>
            <p className="mt-2 text-base text-gray-500">
              Your order #{orderId} will be processed and shipped as soon as
              possible.
            </p>
          </div>

          <section
            aria-labelledby="order-heading"
            className="mt-10 border-t border-gray-200"
          >
            <h2 id="order-heading" className="sr-only">
              Your order
            </h2>

            <h3 className="sr-only">Items</h3>

            {renderProducts()}

            <div className="sm:ml-40 sm:pl-6">
              <h3 className="sr-only">Your information</h3>

              <h4 className="sr-only">Addresses</h4>
              <dl className="grid grid-cols-2 gap-x-6 text-sm py-10">
                <div>
                  <dt className="font-medium text-gray-900">
                    Shipping address
                  </dt>
                  <dd className="mt-2 text-gray-700">
                    <address className="not-italic">
                      <span className="block">
                        {stripeSession.shipping.name}
                      </span>
                      <span className="block">
                        {stripeSession.shipping.address.line1}
                      </span>
                      <span className="block">
                        {stripeSession.shipping.address.line2}
                      </span>
                      <span className="block">
                        {stripeSession.shipping.address.city}
                      </span>
                      <span className="block">
                        {stripeSession.shipping.address.state}
                      </span>
                      <span className="block">
                        {stripeSession.shipping.address.postal_code}
                      </span>
                    </address>
                  </dd>
                </div>
                {/* <div> */}
                {/*  <dt className="font-medium text-gray-900">Billing address</dt> */}
                {/*  <dd className="mt-2 text-gray-700"> */}
                {/*    <address className="not-italic"> */}
                {/*      <span className="block">Kristin Watson</span> */}
                {/*      <span className="block">7363 Cynthia Pass</span> */}
                {/*      <span className="block">Toronto, ON N3Y 4H8</span> */}
                {/*    </address> */}
                {/*  </dd> */}
                {/* </div> */}
              </dl>

              {/* <h4 className="sr-only">Payment</h4> */}
              {/* <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10"> */}
              {/*  <div> */}
              {/*    <dt className="font-medium text-gray-900">Payment method</dt> */}
              {/*    <dd className="mt-2 text-gray-700"> */}
              {/*      <p>Apple Pay</p> */}
              {/*      <p>Mastercard</p> */}
              {/*      <p> */}
              {/*        <span aria-hidden="true">•••• </span> */}
              {/*        <span className="sr-only">Ending in </span>1545 */}
              {/*      </p> */}
              {/*    </dd> */}
              {/*  </div> */}
              {/* </dl> */}

              <h3 className="sr-only">Summary</h3>

              <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
                <div className="flex justify-between">
                  <dt className="font-medium text-gray-900">Subtotal</dt>
                  <dd className="text-gray-700">
                    ${stripeSession.amount_subtotal / 100}
                  </dd>
                </div>
                {/* <div className="flex justify-between"> */}
                {/*  <dt className="flex font-medium text-gray-900"> */}
                {/*    Discount */}
                {/*    <span className="rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2"> */}
                {/*      STUDENT50 */}
                {/*    </span> */}
                {/*  </dt> */}
                {/*  <dd className="text-gray-700">-$18.00 (50%)</dd> */}
                {/* </div> */}
                <div className="flex justify-between">
                  <dt className="font-medium text-gray-900">Shipping</dt>
                  <dd className="text-gray-700">
                    ${stripeSession.total_details.amount_shipping / 100}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium text-gray-900">Total</dt>
                  <dd className="text-gray-900">
                    ${stripeSession.amount_total / 100}
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default OrderDetails;
