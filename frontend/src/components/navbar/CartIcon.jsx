import React, { useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { useSignedInUser } from "../../hooks/UserHook";
import Cart from "../shopping/Cart";

function CartIcon() {
  const [cartOpen, setCartOpen] = useState(false);

  const user = useSignedInUser();

  if (!user) return null;

  return (
    <div className="ml-4 flow-root lg:ml-6">
      <button
        type="submit"
        onClick={() => (cartOpen ? null : setCartOpen(true))}
        className="group -m-2 p-2 flex items-center"
      >
        <ShoppingBagIcon
          className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
      </button>
      {cartOpen && (
        <Cart userUid={user.uid} setOpen={setCartOpen} open={cartOpen} />
      )}
    </div>
  );
}

export default CartIcon;
