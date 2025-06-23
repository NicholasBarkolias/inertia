import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-orange-400 to-pink-400 text-white shadow hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200",
        destructive: "bg-red-500 text-red-50 shadow-sm hover:bg-red-500/90",
        outline:
          "border border-orange-200 bg-orange-50 shadow-sm hover:bg-orange-100 hover:text-orange-900 text-orange-700",
        secondary:
          "bg-orange-100 text-orange-900 shadow-sm hover:bg-orange-200",
        ghost: "hover:bg-orange-100 hover:text-orange-900 text-slate-600",
        link: "text-orange-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-10 rounded-xl px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
