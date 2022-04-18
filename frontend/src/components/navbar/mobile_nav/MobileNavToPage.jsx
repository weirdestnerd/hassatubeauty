import React from "react";

// pages format:
// pages: [
//         { name: 'Company', href: '#' },
//         { name: 'Stores', href: '#' },
//     ],
const MobileNavToPage = ({ pages }) => {
    return (
        <div className="border-t border-gray-200 py-6 px-4 space-y-6">
            {pages.map((page) => (
                <div key={page.name} className="flow-root">
                    <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                        {page.name}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default MobileNavToPage;