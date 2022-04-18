import React, {Fragment} from "react";
import {Tab} from "@headlessui/react";
import {classNames} from "../../../helpers/classnames";

const FeaturedNavs = ({ category, categoryIdx }) => {
    return (
        <div>
            <p id={`mobile-featured-heading-${categoryIdx}`} className="font-medium text-gray-900">
                Featured
            </p>
            <ul
                aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                className="mt-6 space-y-6"
            >
                {category.featured.map((item) => (
                    <li key={item.name} className="flex">
                        <a href={item.href} className="text-gray-500">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const CategoriesNavs = ({ category }) => {
    return (
        <div>
            <p id="mobile-categories-heading" className="font-medium text-gray-900">
                Categories
            </p>
            <ul aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
                {category.categories.map((item) => (
                    <li key={item.name} className="flex">
                        <a href={item.href} className="text-gray-500">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const CollectionNavs = ({ category }) => {
    return (
        <div>
            <p id="mobile-collection-heading" className="font-medium text-gray-900">
                Collection
            </p>
            <ul aria-labelledby="mobile-collection-heading" className="mt-6 space-y-6">
                {category.collection.map((item) => (
                    <li key={item.name} className="flex">
                        <a href={item.href} className="text-gray-500">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const BrandNavs = ({ category }) => {
    return (
        <div>
            <p id="mobile-brand-heading" className="font-medium text-gray-900">
                Brands
            </p>
            <ul aria-labelledby="mobile-brand-heading" className="mt-6 space-y-6">
                {category.brands.map((item) => (
                    <li key={item.name} className="flex">
                        <a href={item.href} className="text-gray-500">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// category format:
//         {
//             name: 'Women',
//             featured: [
//                 { name: 'Sleep', href: '#' },
//                 { name: 'Swimwear', href: '#' },
//                 { name: 'Underwear', href: '#' },
//             ],
//             collection: [
//                 { name: 'Everything', href: '#' },
//                 { name: 'Core', href: '#' },
//                 { name: 'New Arrivals', href: '#' },
//                 { name: 'Sale', href: '#' },
//             ],
//             categories: [
//                 { name: 'Basic Tees', href: '#' },
//                 { name: 'Artwork Tees', href: '#' },
//                 { name: 'Bottoms', href: '#' },
//                 { name: 'Underwear', href: '#' },
//                 { name: 'Accessories', href: '#' },
//             ],
//             brands: [
//                 { name: 'Full Nelson', href: '#' },
//                 { name: 'My Way', href: '#' },
//                 { name: 'Re-Arranged', href: '#' },
//                 { name: 'Counterfeit', href: '#' },
//                 { name: 'Significant Other', href: '#' },
//             ],
//         }
const MobileNavbarCategories = ({ categories }) => {
    return (
        <Tab.Group as="div" className="mt-2">
            <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex px-4 space-x-8">
                    {categories.map((category) => (
                        <Tab
                            key={category.name}
                            className={({ selected }) =>
                                classNames(
                                    selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                                    'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                                )
                            }
                        >
                            {category.name}
                        </Tab>
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels as={Fragment}>
                {categories.map((category, categoryIdx) => (
                    <Tab.Panel key={category.name} className="px-4 pt-10 pb-6 space-y-12">
                        <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                            <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                                <FeaturedNavs category={category} categoryIdx={categoryIdx} />
                                <CategoriesNavs category={category} />
                            </div>
                            <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                                <CollectionNavs category={category} />
                                <BrandNavs category={category} />
                            </div>
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

export default MobileNavbarCategories