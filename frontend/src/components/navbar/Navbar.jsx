import React, { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import MobileLogin from "./mobile/MobileLogin";
import Menu from "./mobile/Menu";
import Logo from "../Logo";
import LoginNav from "./LoginNav";
import CartIcon from "./CartIcon";

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigation = {
    categories: [
      // {
      //   id: "women",
      //   name: "Women",
      //   featured: [
      //     {
      //       name: "New Arrivals",
      //       href: "#",
      //       imageSrc:
      //         "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
      //       imageAlt:
      //         "Models sitting back to back, wearing Basic Tee in black and bone.",
      //     },
      //     {
      //       name: "Basic Tees",
      //       href: "#",
      //       imageSrc:
      //         "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
      //       imageAlt:
      //         "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
      //     },
      //   ],
      //   sections: [
      //     {
      //       id: "clothing",
      //       name: "Clothing",
      //       items: [
      //         { name: "Tops", href: "#" },
      //         { name: "Dresses", href: "#" },
      //         { name: "Pants", href: "#" },
      //         { name: "Denim", href: "#" },
      //         { name: "Sweaters", href: "#" },
      //         { name: "T-Shirts", href: "#" },
      //         { name: "Jackets", href: "#" },
      //         { name: "Activewear", href: "#" },
      //         { name: "Browse All", href: "#" },
      //       ],
      //     },
      //     {
      //       id: "accessories",
      //       name: "Accessories",
      //       items: [
      //         { name: "Watches", href: "#" },
      //         { name: "Wallets", href: "#" },
      //         { name: "Bags", href: "#" },
      //         { name: "Sunglasses", href: "#" },
      //         { name: "Hats", href: "#" },
      //         { name: "Belts", href: "#" },
      //       ],
      //     },
      //     {
      //       id: "brands",
      //       name: "Brands",
      //       items: [
      //         { name: "Full Nelson", href: "#" },
      //         { name: "My Way", href: "#" },
      //         { name: "Re-Arranged", href: "#" },
      //         { name: "Counterfeit", href: "#" },
      //         { name: "Significant Other", href: "#" },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   id: "men",
      //   name: "Men",
      //   featured: [
      //     {
      //       name: "New Arrivals",
      //       href: "#",
      //       imageSrc:
      //         "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
      //       imageAlt:
      //         "Drawstring top with elastic loop closure and textured interior padding.",
      //     },
      //     {
      //       name: "Artwork Tees",
      //       href: "#",
      //       imageSrc:
      //         "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
      //       imageAlt:
      //         "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
      //     },
      //   ],
      //   sections: [
      //     {
      //       id: "clothing",
      //       name: "Clothing",
      //       items: [
      //         { name: "Tops", href: "#" },
      //         { name: "Pants", href: "#" },
      //         { name: "Sweaters", href: "#" },
      //         { name: "T-Shirts", href: "#" },
      //         { name: "Jackets", href: "#" },
      //         { name: "Activewear", href: "#" },
      //         { name: "Browse All", href: "#" },
      //       ],
      //     },
      //     {
      //       id: "accessories",
      //       name: "Accessories",
      //       items: [
      //         { name: "Watches", href: "#" },
      //         { name: "Wallets", href: "#" },
      //         { name: "Bags", href: "#" },
      //         { name: "Sunglasses", href: "#" },
      //         { name: "Hats", href: "#" },
      //         { name: "Belts", href: "#" },
      //       ],
      //     },
      //     {
      //       id: "brands",
      //       name: "Brands",
      //       items: [
      //         { name: "Re-Arranged", href: "#" },
      //         { name: "Counterfeit", href: "#" },
      //         { name: "Full Nelson", href: "#" },
      //         { name: "My Way", href: "#" },
      //       ],
      //     },
      //   ],
      // },
    ],
    pages: [
      { name: "Wigs", href: "/shop-wigs" },
      { name: "Bundles", href: "/shop-bundles" },
      { name: "Frontals", href: "/shop-frontals" },
      { name: "Closures", href: "/shop-closures" },
      { name: "Deals", href: "/shop-closures" },
      { name: "My Story", href: "/my-story" },
      { name: "Shipping Policy", href: "/shipping-policy" },
    ],
  };

  return (
    <header className="relative bg-white">
      {/* Mobile menu */}
      <Transition.Root show={mobileNavOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileNavOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <Menu />

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <MobileLogin />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Top navigation */}
      <nav
        aria-label="Top"
        className="relative z-20 bg-white bg-opacity-90 backdrop-filter backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center">
            <button
              type="button"
              className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
              onClick={() => setMobileNavOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <Logo />

            {/* Flyout menus */}
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="h-full flex space-x-8">
                {navigation.categories.map((category) => (
                  <Popover key={category.name} className="flex">
                    {({ open }) => (
                      <>
                        <div className="relative flex">
                          <Popover.Button
                            className={classNames(
                              open
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-700 hover:text-gray-800",
                              "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                            )}
                          >
                            {category.name}
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute top-full inset-x-0 bg-white text-sm text-gray-500">
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                              className="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            />
                            {/* Fake border when menu is open */}
                            <div
                              className="absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8"
                              aria-hidden="true"
                            >
                              <div
                                className={classNames(
                                  open ? "bg-gray-200" : "bg-transparent",
                                  "w-full h-px transition-colors ease-out duration-200"
                                )}
                              />
                            </div>

                            <div className="relative">
                              <div className="max-w-7xl mx-auto px-8">
                                <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                    {category.featured.map((item) => (
                                      <div
                                        key={item.name}
                                        className="group relative text-base sm:text-sm"
                                      >
                                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                          <img
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className="object-center object-cover"
                                          />
                                        </div>
                                        <a
                                          href={item.href}
                                          className="mt-6 block font-medium text-gray-900"
                                        >
                                          <span
                                            className="absolute z-10 inset-0"
                                            aria-hidden="true"
                                          />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                    {category.sections.map((section) => (
                                      <div key={section.name}>
                                        <p
                                          id={`${section.name}-heading`}
                                          className="font-medium text-gray-900"
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          aria-labelledby={`${section.name}-heading`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {section.items.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                className="hover:text-gray-800"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}

                {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </Popover.Group>

            <div className="ml-auto flex items-center">
              <LoginNav />

              {/* /!*Search *!/ */}
              {/* <div className="flex lg:ml-6"> */}
              {/* <a href="/search" className="p-2 text-gray-400 hover:text-gray-500"> */}
              {/*   <span className="sr-only">Search</span> */}
              {/*   <SearchIcon className="w-6 h-6" aria-hidden="true" /> */}
              {/* </a> */}
              {/* </div> */}

              <CartIcon />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
