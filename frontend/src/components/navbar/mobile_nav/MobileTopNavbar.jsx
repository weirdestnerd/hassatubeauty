import React from "react";

const MobileTopNavbar = () => {
    return (
        <div className="border-t border-gray-200 py-6 px-4 space-y-6">
            <div className="flow-root">
                <a href="/create-account" className="-m-2 p-2 block font-medium text-gray-900">
                    Create an account
                </a>
            </div>
            <div className="flow-root">
                <a href="/sign-in" className="-m-2 p-2 block font-medium text-gray-900">
                    Sign in
                </a>
            </div>
        </div>
    )
}

export default MobileTopNavbar;