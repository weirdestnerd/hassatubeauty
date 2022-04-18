import React, {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import MobileNavbarCategories from "./MobileNavbarCategories";
import MobileNavToPage from "./MobileNavToPage";
import MobileButton from "./MobileButton";
import MobileTopNavbar from "./MobileTopNavbar";

const MobileNavbar = ({ navigation, mobileMenuOpen, setMobileMenuOpen }) => {
    return (
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileMenuOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                        <MobileButton setMobileMenuOpen={setMobileMenuOpen} />
                        <MobileNavbarCategories categories={navigation.categories} />
                        <MobileNavToPage pages={navigation.page} />
                        <MobileTopNavbar />
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition.Root>
    )
}

export default MobileNavbar;