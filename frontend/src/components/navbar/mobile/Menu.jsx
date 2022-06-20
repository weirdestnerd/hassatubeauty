import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

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
    // { name: "Company", href: "#" },
    // { name: "Stores", href: "#" },
  ],
};

function Menu() {
  return (
    <>
      {/* Links */}
      <Tab.Group as="div" className="mt-2">
        <div className="border-b border-gray-200">
          <Tab.List className="-mb-px flex px-4 space-x-8">
            {navigation.categories.map((category) => (
              <Tab
                key={category.name}
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "text-indigo-600 border-indigo-600"
                      : "text-gray-900 border-transparent",
                    "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                  )
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels as={Fragment}>
          {navigation.categories.map((category) => (
            <Tab.Panel
              key={category.name}
              className="pt-10 pb-8 px-4 space-y-10"
            >
              <div className="grid grid-cols-2 gap-x-4">
                {category.featured.map((item) => (
                  <div key={item.name} className="group relative text-sm">
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
              {category.sections.map((section) => (
                <div key={section.name}>
                  <p
                    id={`${category.id}-${section.id}-heading-mobile`}
                    className="font-medium text-gray-900"
                  >
                    {section.name}
                  </p>
                  <ul
                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                    className="mt-6 flex flex-col space-y-6"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className="-m-2 p-2 block text-gray-500"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}

export default Menu;
