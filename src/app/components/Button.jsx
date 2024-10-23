import React from "react";

export default function Button({
  children,
  block,
  className: style,
  ...props
}) {
  const btnWidth = block ? "w-full" : "w-24";
  const defaultStyling = ["bg-white", "text-black"];
  const customStyling = style?.split(" ");
  const fixStyling = ["p-2", "rounded-lg"];

  let styling = [...fixStyling, btnWidth];

  if (style) {
    styling = styling.concat(customStyling).join(" ");
  } else {
    styling = styling.concat(defaultStyling).join(" ");
  }
  console.log(styling);
  return (
    <button {...props} className={styling}>
      {children}
    </button>
  );
}
