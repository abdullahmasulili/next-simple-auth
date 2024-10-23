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
  let styling = ["p-2", "rounded-lg", btnWidth].join(" ");

  if (style) {
    styling = [...styling, ...customStyling];
  } else {
    styling = [...styling, ...defaultStyling];
  }

  return (
    <button {...props} className={styling}>
      {children}
    </button>
  );
}
