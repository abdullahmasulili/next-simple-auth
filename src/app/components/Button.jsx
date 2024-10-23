import React from "react";

export default function Button({ children, block, ...props }) {
  const btnWidth = block ? "w-full" : "w-24";
  return (
    <button
      {...props}
      className={`bg-white text-black p-2 rounded-lg ${btnWidth}`}
    >
      {children}
    </button>
  );
}
