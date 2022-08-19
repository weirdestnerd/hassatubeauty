import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";
import { getInventory } from "../../firebase";
import { TYPES } from "../../constants/admin/types";
import RollbarError from "../../helpers/Rollbar";

function InventoryList({ title, type }) {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInventory(type)
      .then(setInventory)
      .catch(RollbarError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;
  return (
    <>
      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
            {title}
          </h2>
        </div>
        <ul className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
          {inventory.map((product) => (
            <li key={product.id}>
              <a
                href={`/admin/${product.type}/${product.id}`}
                className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
              >
                <span className="flex items-center truncate space-x-3">
                  <span className="font-medium truncate text-sm leading-6">
                    {product.name}{" "}
                    {/* <span className="truncate font-normal text-gray-500"> */}
                    {/*  {product.type} */}
                    {/* </span> */}
                  </span>
                </span>
                <ChevronRightIcon
                  className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </a>
              <a
                href={`/shop/${product.type}/${product.id}`}
                className="text-indigo-600 hover:text-indigo-900 px-4 py-4"
                target="_blank"
                rel="noreferrer"
              >
                Preview
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects table (small breakpoint and up) */}
      <div className="hidden mt-8 sm:block">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="border-t border-gray-200">
                <th
                  className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  scope="col"
                >
                  <span className="lg:pl-2">{title}</span>
                </th>
                <th
                  className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  scope="col"
                >
                  <span />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {inventory.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center space-x-3 lg:pl-2">
                      <a
                        href={`/admin/${product.type}/${product.id}`}
                        className="truncate hover:text-gray-600"
                      >
                        <span>
                          {product.name}{" "}
                          {/* <span className="text-gray-500 font-normal"> */}
                          {/*  {product.type} */}
                          {/* </span> */}
                        </span>
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <a
                      href={`/shop/${product.type}/${product.id}`}
                      className="text-indigo-600 hover:text-indigo-900"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Preview
                    </a>
                    <span> </span>
                    <a
                      href={`/admin/${product.type}/${product.id}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

InventoryList.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(TYPES.map((t) => t.value)).isRequired,
};

export default InventoryList;
