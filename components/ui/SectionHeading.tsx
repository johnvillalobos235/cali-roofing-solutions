interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`space-y-4 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-xl"}`}
    >
      {kicker && (
        <p className={`kicker ${dark ? "text-primary" : "text-primary"}`}>
          {kicker}
        </p>
      )}
      <h2
        className={`text-[2rem] sm:text-[2.5rem] font-bold tracking-tight leading-[1.1] ${
          dark ? "text-white" : "text-n-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[0.95rem] leading-relaxed ${dark ? "text-n-400" : "text-n-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
