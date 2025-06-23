import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-xl border border-orange-200 bg-orange-50/50 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-300 focus-visible:border-orange-300 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
