"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/i18n";

export default function LocaleSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-xs">
      {locales.map((l) => {
        const newPath = pathname.replace(`/${locale}`, `/${l}`);
        return (
          <Link
            key={l}
            href={newPath}
            className={`uppercase transition-colors ${
              l === locale
                ? "font-semibold text-white"
                : "text-n-400 hover:text-white"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
