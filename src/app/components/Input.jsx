import React from "react";

export default function Input({ id, label, ...props }) {
  const styling = [
    "w-full",
    "mt-2",
    "h-10",
    "px-3",
    "rounded",
    "focus:outline-none",
    "focus:border-2",
    "border-2",
    "border-white",
    "focus:border-amber-300",
    "bg-transparent",
    "mb-5",
  ].join(" ");

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} className={styling} />
    </>
  );
}
