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
      className={`space-y-3 ${align === "center" ? "text-center" : ""} ${
        align === "center" ? "max-w-2xl mx-auto" : ""
      }`}
    >
      {kicker && (
        <p
          className={`kicker ${
            dark ? "text-n-400" : "text-primary"
          }`}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-n-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed ${
            dark ? "text-n-400" : "text-n-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
