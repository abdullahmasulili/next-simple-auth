import React from "react";

export default function Button({
  children,
  block,
  disabled,
  className: style,
  ...props
}) {
  const btnWidth = block ? "w-full" : "w-fit-content";
  const defaultStyling = ["bg-white", "text-black"];
  const customStyling = style?.split(" ");
  const fixStyling = ["p-2", "rounded-lg"];
  const disabledStyle = [
    "bg-transparent",
    "text-slate-400",
    "border-2",
    "border-slate-400",
    btnWidth,
    ...fixStyling,
  ];

  let styling = [...fixStyling, btnWidth];

  if (style) {
    styling = styling.concat(customStyling).join(" ");
  } else {
    styling = styling.concat(defaultStyling).join(" ");
  }

  return (
    <button
      {...props}
      className={disabled ? disabledStyle.join(" ") : styling}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
