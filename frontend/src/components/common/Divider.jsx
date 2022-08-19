import React from "react";

function Divider() {
  return (
    <div className="relative">
      <div className="inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
    </div>
  );
}

export default Divider;
