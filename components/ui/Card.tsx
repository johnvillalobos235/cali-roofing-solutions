import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
}

export default function Card({
  children,
  className,
  hover = false,
  dark = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 border",
        dark
          ? "bg-n-800/50 border-n-700/50"
          : "bg-white border-n-200/80",
        hover && "transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      {children}
    </div>
  );
}
