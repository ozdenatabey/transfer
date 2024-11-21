import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  field: string;
  className?: string;
}

const ShimmerButton = ({ field, className }: Props) => {
  return (
    <button
      className={cn(
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-secondary bg-[linear-gradient(70deg,#212121,30%,#179FC0,60%,#212121)] bg-[length:200%_100%] px-6 font-medium transition-colors text-white",
        className
      )}
    >
      {field}
    </button>
  );
};

export default ShimmerButton;
