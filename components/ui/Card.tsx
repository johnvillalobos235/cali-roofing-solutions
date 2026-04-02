import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-n-50 p-6",
        hover && "transition-shadow hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
