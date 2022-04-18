import React, {useState} from "react";
import MobileNavbar from "./mobile_nav/MobileNavbar";
import TopNavbar from "./TopNavbar";
import NavbarLogo from "./NavbarLogo";
import MegaNav from "./MegaNav";
import {MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon} from "@heroicons/react/outline";

const navigation = {
    categories: [
        {
            name: 'Women',
            featured: [
                { name: 'Sleep', href: '#' },
                { name: 'Swimwear', href: '#' },
                { name: 'Underwear', href: '#' },
            ],
            collection: [
                { name: 'Everything', href: '#' },
                { name: 'Core', href: '#' },
                { name: 'New Arrivals', href: '#' },
                { name: 'Sale', href: '#' },
            ],
            categories: [
                { name: 'Basic Tees', href: '#' },
                { name: 'Artwork Tees', href: '#' },
                { name: 'Bottoms', href: '#' },
                { name: 'Underwear', href: '#' },
                { name: 'Accessories', href: '#' },
            ],
            brands: [
                { name: 'Full Nelson', href: '#' },
                { name: 'My Way', href: '#' },
                { name: 'Re-Arranged', href: '#' },
                { name: 'Counterfeit', href: '#' },
                { name: 'Significant Other', href: '#' },
            ],
        },
        {
            name: 'Men',
            featured: [
                { name: 'Casual', href: '#' },
                { name: 'Boxers', href: '#' },
                { name: 'Outdoor', href: '#' },
            ],
            collection: [
                { name: 'Everything', href: '#' },
                { name: 'Core', href: '#' },
                { name: 'New Arrivals', href: '#' },
                { name: 'Sale', href: '#' },
            ],
            categories: [
                { name: 'Artwork Tees', href: '#' },
                { name: 'Pants', href: '#' },
                { name: 'Accessories', href: '#' },
                { name: 'Boxers', href: '#' },
                { name: 'Basic Tees', href: '#' },
            ],
            brands: [
                { name: 'Significant Other', href: '#' },
                { name: 'My Way', href: '#' },
                { name: 'Counterfeit', href: '#' },
                { name: 'Re-Arranged', href: '#' },
                { name: 'Full Nelson', href: '#' },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    return (
        <>
            <MobileNavbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            <nav aria-label="Top">
                <TopNavbar />
                {/* Secondary navigation */}
                <div className="bg-white">
                    <div className="border-b border-gray-200">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="h-16 flex items-center justify-between">
                                <NavbarLogo />
                                <MegaNav navigation={navigation} />
                                
                                {/* Mobile menu and search (lg-) */}
                                <div className="flex-1 flex items-center lg:hidden">
                                    <button
                                        type="button"
                                        className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                                        onClick={() => setMobileMenuOpen(true)}
                                    >
                                        <span className="sr-only">Open menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                            
                                    {/* Search */}
                                    <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Search</span>
                                        <SearchIcon className="w-6 h-6" aria-hidden="true" />
                                    </a>
                                </div>
                        
                                {/* Logo (lg-) */}
                                <a href="#" className="lg:hidden">
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                        alt=""
                                        className="h-8 w-auto"
                                    />
                                </a>
                        
                                <div className="flex-1 flex items-center justify-end">
                                    <div className="flex items-center lg:ml-8">
                                        <div className="flex space-x-8">
                                            <div className="hidden lg:flex">
                                                <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                                    <span className="sr-only">Search</span>
                                                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                                                </a>
                                            </div>
                                    
                                            <div className="flex">
                                                <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                                    <span className="sr-only">Account</span>
                                                    <UserIcon className="w-6 h-6" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                
                                        <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />
                                
                                        <div className="flow-root">
                                            <a href="#" className="group -m-2 p-2 flex items-center">
                                                <ShoppingCartIcon
                                                    className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                    aria-hidden="true"
                                                />
                                                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                                <span className="sr-only">items in cart, view bag</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;