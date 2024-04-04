import * as React from "react";

import { cn } from "@/lib/utils";
import { FaSearch } from "react-icons/fa";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <label className="flex items-center rounded-full border border-input px-3 py-1 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed">
        <input
          type={type}
          className={cn(
            "flex h-9 w-full bg-transparent placeholder:text-muted-foreground focus-visible:outline-none disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <FaSearch />
      </label>
    );
  }
);
Input.displayName = "Input";

export { Input };
