import * as React from "react";

import { cn } from "../../lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // Match the input: white background, subtle border and clear focus
        "w-full min-h-16 rounded-md px-3 py-2 text-base md:text-sm",
        "bg-white text-gray-800 placeholder-gray-400 border border-gray-200 shadow-sm",
        "focus:ring-2 focus:ring-green-500 focus:border-transparent",
        // invalid state
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
