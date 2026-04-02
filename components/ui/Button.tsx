import Link from "next/link";
import { cn } from "@/lib/cn";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-light",
  secondary:
    "border border-white/20 text-white/90 hover:border-white/40 hover:text-white",
  ghost:
    "text-n-500 hover:text-n-900 underline underline-offset-4",
};

const sizes = {
  sm: "px-5 py-2 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-sm",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold tracking-wide uppercase rounded-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
