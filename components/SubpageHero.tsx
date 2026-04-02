interface SubpageHeroProps {
  title: string;
  subtitle: string;
}

export default function SubpageHero({ title, subtitle }: SubpageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 pt-40 pb-20 sm:pt-52 sm:pb-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 via-slate-950/80 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.08),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 px-6">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        <p className="max-w-xl text-lg text-white/60">{subtitle}</p>
      </div>

      {/* Bottom Divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
