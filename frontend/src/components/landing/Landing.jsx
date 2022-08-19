import React from "react";
import { isMobileOnly } from "react-device-detect";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const perks = [
  {
    name: "Packaging & Shipping",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg",
    description:
      "Our packaging process is as quick as two weeks. While shipping could take a little as one week",
  },
  {
    name: "All year discount",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
    description:
      "Looking for a deal? Checkout out sales collection for deals on most products",
  },
];

function Landing() {
  return (
    <div className="bg-white">
      <header className="relative overflow-hidden">
        <Navbar />

        {/* <button */}
        {/*  type="button" */}
        {/*  onClick={() => { */}
        {/*    Object.keys(wigs).forEach((k) => { */}
        {/*      addInventoryProduct({ */}
        {/*        ...wigs[k], */}
        {/*        type: "wigs", */}
        {/*        show: true, */}
        {/*      }) */}
        {/*        .then(() => console.log("Uploaded", k)) */}
        {/*        .catch(console.error); */}
        {/*    }); */}
        {/*  }} */}
        {/* > */}
        {/*  yoasud */}
        {/* </button> */}

        {/* Hero section */}
        <div
          className="pt-0 pb-80 sm:pt-24 sm:pb-28 lg:pt-40 lg:pb-48"
          style={
            isMobileOnly
              ? { paddingBottom: "31rem" }
              : { paddingTop: "26.4rem" }
          }
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Best in wig styles and creation
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                There are no boundaries in fashion, and no compromises when it
                comes to achieving your dreams.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/IMG_5835.JPG"
                            alt=""
                            className="w-full h-full object-center object-cover"
                            style={{ objectPosition: "top" }}
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/IMG_5793.JPG"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/9092B985-8E3F-40C1-B088-9EA002B18E6F.JPG"
                            alt=""
                            className="w-full h-full object-center object-cover"
                            style={{ objectPosition: "-1em 6em" }}
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/IMG_5849.JPG"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/trina6.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/trina3.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/84529386-550E-4BB5-B949-65CB4075E29F.JPG"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TODO: update to /shop-all */}
                <a
                  href="#collections"
                  className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  Shop collections
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Collections section */}
        <section
          id="collections"
          aria-labelledby="category-heading"
          className="bg-gray-50"
        >
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2
                id="category-heading"
                className="text-2xl font-extrabold tracking-tight text-gray-900"
              >
                Shop our collections
              </h2>
              {/* <a */}
              {/*  href="/shop-all" */}
              {/*  className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block" */}
              {/* > */}
              {/*  Browse all wigs */}
              {/*  <span aria-hidden="true"> &rarr;</span> */}
              {/* </a> */}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                <img
                  src="https://landing-page-images.s3.us-west-004.backblazeb2.com/IMG_5831.JPG"
                  alt=""
                  className="object-center object-cover group-hover:opacity-75"
                  style={{ objectPosition: "0 10%" }}
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50"
                />
                <div className="p-6 flex items-end">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="/shop-wigs">
                        <span className="absolute inset-0" />
                        Wig collection
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                <img
                  src="https://landing-page-images.s3.us-west-004.backblazeb2.com/IMG_5810.JPG"
                  alt=""
                  className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                  style={{ objectPosition: "0 10%" }}
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="/shop-frontals">
                        <span className="absolute inset-0" />
                        Frontal collections
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                <img
                  src="https://landing-page-images.s3.us-west-004.backblazeb2.com/IMG_5828.JPG"
                  alt=""
                  className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                  style={{ objectPosition: "top" }}
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="/shop-closures">
                        <span className="absolute inset-0" />
                        Closures collection
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  <div className="mt-6 sm:hidden"> */}
            {/*    <a */}
            {/*      href="/shop-all" */}
            {/*      className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500" */}
            {/*    > */}
            {/*      Browse all wigs */}
            {/*      <span aria-hidden="true"> &rarr;</span> */}
            {/*    </a> */}
            {/*  </div> */}
          </div>
        </section>

        {/* Promo section */}
        {/* <div className="bg-white relative overflow-hidden"> */}
        {/*  /!* Decorative background image and gradient *!/ */}
        {/*  <div aria-hidden="true" className="absolute inset-0"> */}
        {/*    <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8"> */}
        {/*      <img */}
        {/*        src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg" */}
        {/*        alt="" */}
        {/*        className="w-full h-full object-center object-cover" */}
        {/*      /> */}
        {/*    </div> */}
        {/*    <div className="absolute inset-0 bg-white bg-opacity-75" /> */}
        {/*    <div className="absolute inset-0 bg-gradient-to-t from-white via-white" /> */}
        {/*  </div> */}

        {/*  /!* Callout *!/ */}
        {/*  <section */}
        {/*    aria-labelledby="sale-heading" */}
        {/*    className="relative mb-32 max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8" */}
        {/*  > */}
        {/*    <div className="max-w-2xl mx-auto lg:max-w-none"> */}
        {/*      <h2 */}
        {/*        id="sale-heading" */}
        {/*        className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl" */}
        {/*      > */}
        {/*        Enjoy our year-round deals */}
        {/*      </h2> */}
        {/*      <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600"> */}
        {/*        Most of our products are limited releases that won&apos;t come */}
        {/*        back. Get your favorite items while they&apos;re in stock. */}
        {/*      </p> */}
        {/*      <a */}
        {/*        href="/shop-sales" */}
        {/*        className="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto" */}
        {/*      > */}
        {/*        Get access to our one-time sale */}
        {/*      </a> */}
        {/*    </div> */}
        {/*  </section> */}
        {/* </div> */}

        {/* Read My Story section */}
        {/* <section aria-labelledby="cause-heading"> */}
        {/*  <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16"> */}
        {/*    <div className="absolute inset-0 overflow-hidden"> */}
        {/*      {isMobileOnly ? ( */}
        {/*        <img */}
        {/*          src="https://landing-page-images.s3.us-west-004.backblazeb2.com/IMG_5822.JPG" */}
        {/*          alt="" */}
        {/*          className="w-full h-full object-center object-cover" */}
        {/*          style={{ objectPosition: "0 -8em" }} */}
        {/*        /> */}
        {/*      ) : ( */}
        {/*        <img */}
        {/*          src="https://landing-page-images.s3.us-west-004.backblazeb2.com/IMG_5822.JPG" */}
        {/*          alt="" */}
        {/*          className="w-full h-full object-center object-cover" */}
        {/*          style={{ objectPosition: "0 3em" }} */}
        {/*        /> */}
        {/*      )} */}
        {/*    </div> */}
        {/*    <div */}
        {/*      aria-hidden="true" */}
        {/*      className="absolute inset-0 bg-gray-900 bg-opacity-50" */}
        {/*    /> */}
        {/*    <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center"> */}
        {/*      <h2 */}
        {/*        id="cause-heading" */}
        {/*        className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" */}
        {/*      > */}
        {/*        Making wigs from my heart */}
        {/*      </h2> */}
        {/*      <p className="mt-3 text-xl text-white"> */}
        {/*        Something something I&apos;m passionate about making wigs. */}
        {/*        I&apos;ve being making them for so long. I&apos;m a genius at */}
        {/*        making wigs. It all started when ... Wigs is my life. So and so */}
        {/*        can vouch for me */}
        {/*      </p> */}
        {/*      <a */}
        {/*        href="/read_our_story" */}
        {/*        className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto" */}
        {/*      > */}
        {/*        Read my story */}
        {/*      </a> */}
        {/*    </div> */}
        {/*  </div> */}
        {/* </section> */}

        {/* Perks section */}
        <section
          aria-labelledby="perks-heading"
          className="bg-gray-50 border-t border-gray-200"
        >
          <h2 id="perks-heading" className="sr-only">
            Our perks
          </h2>

          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-2 lg:gap-y-0">
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="-my-1 h-24 w-auto mx-auto"
                        src={perk.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Patricia section */}
        {/* <section */}
        {/*  aria-labelledby="featured-heading" */}
        {/*  className="relative my-16 mx-10 rounded-lg overflow-hidden lg:h-96" */}
        {/* > */}
        {/*  <div className="absolute inset-0"> */}
        {/*    <img */}
        {/*      src="https://shopping-page.s3.us-west-004.backblazeb2.com/sonia-roselli-tWng4d9Njxo-unsplash.jpeg" */}
        {/*      alt="" */}
        {/*      className="w-full h-full object-center object-cover" */}
        {/*    /> */}
        {/*  </div> */}
        {/*  <div aria-hidden="true" className="relative w-full h-96 lg:hidden" /> */}
        {/*  <div aria-hidden="true" className="relative w-full h-32 lg:hidden" /> */}
        {/*  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-6 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start"> */}
        {/*    <div> */}
        {/*      <h2 */}
        {/*        id="featured-heading" */}
        {/*        className="text-xl font-bold text-white" */}
        {/*      > */}
        {/*        TNC Lovely */}
        {/*      </h2> */}
        {/*      <p className="mt-1 text-sm text-gray-300"> */}
        {/*        We&apos;ve partnered with TNC Lovely Company to bring you */}
        {/*        essential oils for your daily needs. Something something */}
        {/*        something buy them */}
        {/*      </p> */}
        {/*    </div> */}
        {/*    <a */}
        {/*      href="/shop-patricia" */}
        {/*      className="mt-6 flex-shrink-0 flex bg-white bg-opacity-0 py-3 px-4 border border-white border-opacity-25 rounded-md items-center justify-center text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full" */}
        {/*    > */}
        {/*      View the collection */}
        {/*    </a> */}
        {/*  </div> */}
        {/* </section> */}

        {/* CTA section */}
        <section aria-labelledby="sale-heading">
          <div className="pt-32 overflow-hidden sm:pt-14">
            <div className="bg-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative pt-48 pb-16 sm:pb-24">
                  <div>
                    <h2
                      id="sale-heading"
                      className="text-4xl font-extrabold tracking-tight text-white md:text-5xl"
                    >
                      Only the best quality.
                      <br />
                      Nothing less.
                    </h2>
                    <div className="mt-6 text-base">
                      <a href="/shop-all" className="font-semibold text-white">
                        Shop wigs
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  </div>

                  <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0">
                    <div className="ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8">
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/trina2.jpeg"
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/trina1.jpg"
                            alt=""
                            style={{ objectPosition: "top" }}
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/deep-wave.jpeg"
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/body_wave.jpg"
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            alt=""
                            style={{ objectPosition: "top" }}
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/trina9+(1).jpeg"
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/trina1.jpg"
                            alt=""
                            style={{ objectPosition: "top" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Landing;
