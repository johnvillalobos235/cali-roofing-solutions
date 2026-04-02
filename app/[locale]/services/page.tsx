"use client";

import { useTranslations } from "next-intl";
import SubpageHero from "@/components/SubpageHero";
import ServicesAccordion from "@/components/ServicesAccordion";
import RoofingTypes from "@/components/RoofingTypes";

export default function ServicesPage() {
  const t = useTranslations("servicesPage");

  return (
    <>
      <SubpageHero title={t("title")} subtitle={t("subtitle")} />
      <ServicesAccordion />
      <RoofingTypes />
    </>
  );
}
