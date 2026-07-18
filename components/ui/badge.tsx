import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants: Record<string, string> = {
    default: "bg-card-2 text-muted border border-border",
    accent: "bg-accent/10 text-accent-strong border border-accent/20",
    outline: "border border-border text-muted",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 font-mono text-xs",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
