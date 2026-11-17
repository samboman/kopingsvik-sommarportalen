import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        sponsor:
          "rounded-full border-transparent bg-sponsor text-sponsor-foreground uppercase tracking-wider text-[0.65rem]",
        live: "rounded-full border-transparent bg-coral text-coral-foreground uppercase tracking-wider text-[0.65rem] gap-1.5",
        open: "rounded-full border-transparent bg-seagrass/15 text-seagrass gap-1.5",
        closed: "rounded-full border-transparent bg-muted text-muted-foreground gap-1.5",
        sand: "rounded-full border-transparent bg-sand text-foreground",
        glass: "rounded-full border-on-image/30 bg-on-image/15 text-on-image backdrop-blur-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
