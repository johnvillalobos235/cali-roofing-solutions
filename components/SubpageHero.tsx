interface SubpageHeroProps {
  title: string;
  subtitle: string;
}

export default function SubpageHero({ title, subtitle }: SubpageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 pt-36 pb-16 sm:pt-48 sm:pb-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-slate-900/60 to-slate-950" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-3 px-6">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="max-w-xl text-base text-white/60">{subtitle}</p>
      </div>

      {/* Bottom Divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
