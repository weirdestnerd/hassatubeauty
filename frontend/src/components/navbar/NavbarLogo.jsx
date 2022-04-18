import React from "react";

const NavbarLogo = () => {
    return (
        <div className="hidden lg:flex lg:items-center">
            <a href="#">
                <span className="sr-only">Hassatu Beauty</span>
                <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt=""
                />
            </a>
        </div>
    )
}

export default NavbarLogo