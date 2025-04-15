import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "text-white shadow-sm inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      type: {
        submit: "",
        confirm: "",
        cancel: "",
      },
      variant: {
        default: "",
        hover: "",
        click: "",
        disabled: "",
        loading: "",
      },
      size: {
        default: "h-10 px-10 text-base",
        sm: "h-10 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-20 text-lg",
      },
    },
    defaultVariants: {
      type: "submit",
      variant: "default",
      size: "default",
    },
    compoundVariants: [
      {
        type: "submit",
        variant: "default",
        class: "bg-base1",
      },
      {
        type: "submit",
        variant: "hover",
        class: "bg-base2",
      },
      {
        type: "submit",
        variant: "click",
        class: "bg-base3",
      },
      {
        type: "submit",
        variant: "disabled",
        class: "bg-transparent2",
      },
      {
        type: "submit",
        variant: "loading",
        class: "bg-transparent2",
      },
      {
        type: "confirm",
        variant: "default",
        class: "bg-transparent1",
      },
      {
        type: "confirm",
        variant: "hover",
        class: "bg-transparent2",
      },
      {
        type: "confirm",
        variant: "click",
        class: "bg-transparent3",
      },
      {
        type: "confirm",
        variant: "disabled",
        class: "bg-transparent2",
      },
      {
        type: "confirm",
        variant: "loading",
        class: "bg-transparent2",
      },
    ],
  }
);

const Button = React.forwardRef(
  ({ className, type, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ type, variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
