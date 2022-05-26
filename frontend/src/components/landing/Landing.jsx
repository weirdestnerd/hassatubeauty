import React from "react";
import Navbar from "../navbar/Navbar";

// TODO: review w/ Trina
const perks = [
  {
    name: "Free returns",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
    description:
      "Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.",
  },
  {
    name: "Same day delivery",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg",
    description:
      "We offer a delivery service that has never been done before. Checkout today and receive your products within hours.",
  },
  {
    name: "All year discount",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: "For the planet",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "We’ve pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

function Landing() {
  return (
    <div className="bg-white">
      <header className="relative overflow-hidden">
        <Navbar />

        {/* Hero section */}
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Best in wig styles and creation
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Something about how good the wigs are and that people should
                buyyy them
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
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/deep-wave.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/trina2.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/trina4.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/trina1.jpg"
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
                            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/trina5+(1).jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="/shop_all"
                  className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  Order your wig
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Category section */}
        <section aria-labelledby="category-heading" className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2
                id="category-heading"
                className="text-2xl font-extrabold tracking-tight text-gray-900"
              >
                Shop our wigs
              </h2>
              <a
                href="/"
                className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
              >
                Browse all wigs
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                <img
                  src="https://landing-page-images.s3.us-west-004.backblazeb2.com/body_wave.jpg"
                  alt=""
                  className="object-center object-cover group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50"
                />
                <div className="p-6 flex items-end">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="/shop_all">
                        <span className="absolute inset-0" />
                        Body wave wig
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Get it now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                <img
                  src="https://landing-page-images.s3.us-west-004.backblazeb2.com/trina2.jpeg"
                  alt=""
                  className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                  style={{ objectPosition: "0 25%" }}
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="/shop_all">
                        <span className="absolute inset-0" />
                        Loose wave wig
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Get it now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                <img
                  src="https://landing-page-images.s3.us-west-004.backblazeb2.com/trina1.jpg"
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
                      <a href="/shop_all">
                        <span className="absolute inset-0" />
                        Deep wave wig
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Get it now
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:hidden">
              <a
                href="/shop_all"
                className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Browse all wigs
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Featured section */}
        <section aria-labelledby="cause-heading">
          <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 bg-opacity-50"
            />
            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
              <h2
                id="cause-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                Making wigs from my heart
              </h2>
              <p className="mt-3 text-xl text-white">
                Something something I&apos;m passionate about making wigs.
                I&apos;ve being making them for so long. I&apos;m a genius at
                making wigs. It all started when ... Wigs is my life. So and so
                can vouch for me
              </p>
              <a
                href="/read_our_story"
                className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
                Read my story
              </a>
            </div>
          </div>
        </section>

        {/* Perks section */}
        <section
          aria-labelledby="perks-heading"
          className="bg-gray-50 border-t border-gray-200"
        >
          <h2 id="perks-heading" className="sr-only">
            Our perks
          </h2>

          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
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
                      <a href="/shop_all" className="font-semibold text-white">
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

      <footer aria-labelledby="footer-heading" className="bg-white">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block text-indigo-600">
                We&apos;re on social media!
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <a
                href="https://m.facebook.com/Hassatu-Beauty-100304611802432/"
                className="mr-6 text-gray-600"
              >
                <svg
                  className="w-6 h-6 text-blue-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hassatu_beauty/"
                className="mr-6 text-gray-600"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="w-6 h-6 text-blue-600 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8"> */}
          {/*  <div className="grid grid-cols-2 gap-8 xl:col-span-2"> */}
          {/*     <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-8"> */}
          {/*      <div> */}
          {/*        <h3 className="text-sm font-medium text-gray-900">Shop</h3> */}
          {/*        <ul className="mt-6 space-y-6"> */}
          {/*          {footerNavigation.shop.map((item) => ( */}
          {/*            <li key={item.name} className="text-sm"> */}
          {/*              <a */}
          {/*                href={item.href} */}
          {/*                className="text-gray-500 hover:text-gray-600" */}
          {/*              > */}
          {/*                {item.name} */}
          {/*              </a> */}
          {/*            </li> */}
          {/*          ))} */}
          {/*        </ul> */}
          {/*      </div> */}
          {/*      <div> */}
          {/*        <h3 className="text-sm font-medium text-gray-900">Company</h3> */}
          {/*        <ul className="mt-6 space-y-6"> */}
          {/*          {footerNavigation.company.map((item) => ( */}
          {/*            <li key={item.name} className="text-sm"> */}
          {/*              <a */}
          {/*                href={item.href} */}
          {/*                className="text-gray-500 hover:text-gray-600" */}
          {/*              > */}
          {/*                {item.name} */}
          {/*              </a> */}
          {/*            </li> */}
          {/*          ))} */}
          {/*        </ul> */}
          {/*      </div> */}
          {/*     </div> */}
          {/*     <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-8"> */}
          {/*      <div> */}
          {/*        <h3 className="text-sm font-medium text-gray-900">Account</h3> */}
          {/*        <ul role="list" className="mt-6 space-y-6"> */}
          {/*          {footerNavigation.account.map((item) => ( */}
          {/*            <li key={item.name} className="text-sm"> */}
          {/*              <a */}
          {/*                href={item.href} */}
          {/*                className="text-gray-500 hover:text-gray-600" */}
          {/*              > */}
          {/*                {item.name} */}
          {/*              </a> */}
          {/*            </li> */}
          {/*          ))} */}
          {/*        </ul> */}
          {/*      </div> */}
          {/*      <div> */}
          {/*        <h3 className="text-sm font-medium text-gray-900">Connect</h3> */}
          {/*        <ul role="list" className="mt-6 space-y-6"> */}
          {/*          {footerNavigation.connect.map((item) => ( */}
          {/*            <li key={item.name} className="text-sm"> */}
          {/*              <a */}
          {/*                href={item.href} */}
          {/*                className="text-gray-500 hover:text-gray-600" */}
          {/*              > */}
          {/*                {item.name} */}
          {/*              </a> */}
          {/*            </li> */}
          {/*          ))} */}
          {/*        </ul> */}
          {/*      </div> */}
          {/*     </div> */}
          {/*  </div> */}
          {/*  <div className="mt-16 md:mt-16 xl:mt-0"> */}
          {/*    <h3 className="text-sm font-medium text-gray-900"> */}
          {/*      Sign up for our newsletter */}
          {/*    </h3> */}
          {/*    <p className="mt-6 text-sm text-gray-500"> */}
          {/*      The latest deals and savings, sent to your inbox weekly. */}
          {/*    </p> */}
          {/*    <form className="mt-2 flex sm:max-w-md"> */}
          {/*      /!* eslint-disable-next-line jsx-a11y/label-has-associated-control *!/ */}
          {/*      <label htmlFor="email-address" className="sr-only"> */}
          {/*        Email address */}
          {/*      </label> */}
          {/*      <input */}
          {/*        id="email-address" */}
          {/*        type="text" */}
          {/*        autoComplete="email" */}
          {/*        required */}
          {/*        className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-indigo-500 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" */}
          {/*      /> */}
          {/*      <div className="ml-4 flex-shrink-0"> */}
          {/*        <button */}
          {/*          type="submit" */}
          {/*          className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" */}
          {/*        > */}
          {/*          Sign up */}
          {/*        </button> */}
          {/*      </div> */}
          {/*    </form> */}
          {/*  </div> */}
          {/* </div> */}

          <div className="border-t border-gray-200 py-10">
            <p className="text-sm text-gray-500">
              Copyright &copy; 2021 Hassatu Beauty.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;