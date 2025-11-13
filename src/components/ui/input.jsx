import * as React from "react"

import { cn } from "../../lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  const ariaInvalid = props["aria-invalid"];
  const isInvalid = ariaInvalid === true || ariaInvalid === "true";
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // White background with subtle border so input is visible on any theme
        "w-full min-w-0 h-9 rounded-md px-3 py-1 text-base file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        // defaults
        "bg-white text-gray-800 border border-gray-200 placeholder-gray-400 shadow-sm",
        // focus styles (clear, visible ring and green border to match site accents)
        "focus:ring-2 focus:ring-green-500 focus:border-transparent",
        // invalid state
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        isInvalid &&
          "border-destructive ring-destructive/20 focus-visible:ring-destructive/50",
        className
      )}
      {...props}
    />
  );
}

export { Input }
