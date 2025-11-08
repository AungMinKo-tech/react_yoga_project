import React from "react";
import { FormItem, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

export default function FormFieldInput({
  field,
  label = "Label",
  placeholder = "",
  controlClassName = "",
  itemClassName = "flex flex-col",
  icon = null,
  iconType = "text",
  onIconClick = () => {},
}) {
  const inputPadding = "py-[22.5px] px-[18px]";

  return (
    <FormItem className={itemClassName}>
      <FormLabel>{label}</FormLabel>

      <div className="relative">
        <FormControl className={controlClassName}>
          <Input
            placeholder={placeholder}
            {...field}
            type={iconType}
            className={`${inputPadding} ${icon ? "pr-10" : ""}`}
          />
        </FormControl>

        {/* Icon */}
        {icon && (
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={onIconClick}
          >
            {icon}
          </div>
        )}
      </div>

      {/* Error message */}
      <FormMessage className="flex justify-end text-red-500" />
    </FormItem>
  );
}
