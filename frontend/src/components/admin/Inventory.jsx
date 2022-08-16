import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SideNav from "./SideNav";
import { useSignedInUser } from "../../hooks/UserHook";
import InventoryList from "./InventoryList";
import Notification from "../alerts/Notification";

function Inventory() {
  const [showToast, setShowToast] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const user = useSignedInUser();
  if (!user) navigate(`/sign-in?redirect=/admin`);
  if (
    user &&
    !["odgbadebo@gmail.com", "dhassatu75@gmail.com"].includes(user.email)
  )
    navigate("/404");

  useEffect(() => {
    setShowToast(
      Object.keys(searchParams).length === 0 &&
        searchParams.get("showProductActionToast")
    );
    searchParams.delete("showProductActionToast");
  }, []);

  return (
    <div className="h-full overflow-y-auto">
      {showToast && (
        <Notification
          onClose={() => setShowToast(false)}
          message="Successfully done!"
          description="Product is added/updated!"
          type="success"
        />
      )}
      <SideNav />
      {/* Main column */}
      <div className="lg:pl-64 flex flex-col">
        <main className="h-full flex-auto overflow-y-auto">
          {/* Page title & actions */}
          <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
                Inventory
              </h1>
            </div>
            <div className="mt-4 flex sm:mt-0 sm:ml-4">
              <a
                href="/admin/products/new"
                className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
              >
                New product
              </a>
            </div>
          </div>

          <InventoryList title="Frontals" type="frontals" />
          <InventoryList title="Bundles" type="bundles" />
          <InventoryList title="Closure" type="closures" />
          <InventoryList title="Wigs" type="wigs" />
        </main>
      </div>
    </div>
  );
}

export default Inventory;
