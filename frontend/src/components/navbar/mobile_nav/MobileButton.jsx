import React from "react";
import {XIcon} from "@heroicons/react/outline";

const MobileButton = ({ setMobileMenuOpen }) => {
    return (
        <div className="px-4 pt-5 pb-2 flex">
            <button
                type="button"
                className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
            >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
    )
}

export default MobileButton;