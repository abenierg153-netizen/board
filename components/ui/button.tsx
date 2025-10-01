import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-lg text-sm font-medium transition-all",
        variant === "primary" &&
          "bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md",
        variant === "secondary" &&
          "bg-secondary text-white hover:bg-secondary/90 shadow-sm hover:shadow-md",
        variant === "ghost" &&
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}


