"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: FadeInProps) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`${isVisible ? "fade-in-visible" : "fade-in-hidden"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
