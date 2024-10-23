import React from "react";

export default function Card({ children, className: style }) {
  let styling = ["p-8", "bg-stone-900", "rounded-lg"];
  const customStyling = style?.split(" ");

  if (style) {
    styling = styling.concat(customStyling);
  }

  return <div className={styling.join(" ")}>{children}</div>;
}
