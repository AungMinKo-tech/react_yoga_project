import React from "react";
import { Button } from "../components/ui/button";

function LinkButton({ text, className = "" }) {
  return (
    <Button
      type="submit"
      className={`w-full rounded-full bg-[#345813] hover:bg-[#44562f] text-white py-6 ${className}`}
    >
      {text}
    </Button>
  );
}

export default LinkButton;
