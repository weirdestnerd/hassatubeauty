import React from "react";

function Footer() {
  return (
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
  );
}

export default Footer;
