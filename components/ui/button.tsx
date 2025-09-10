import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  const variants: Record<string, string> = {
    default: "bg-black text-white hover:bg-black/90",
    outline:
      "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
  };
  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}
