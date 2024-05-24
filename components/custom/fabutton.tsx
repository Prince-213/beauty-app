import React from "react";
import { cn } from "@/lib/utils";

const FaButton = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style: string;
}) => {
  return (
    <button
      className={cn(
        "  px-10  mx-auto bg-darkslategreen py-4 hover:bg-black transition-all duration-200 ease-in text-white text-center"
      )}
      style={{ width: style }}
    >
      {children}
    </button>
  );
};

export default FaButton;
