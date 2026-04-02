import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cali Roofing Solutions | Southern California Roofing Experts",
  description:
    "Family-owned roofing company serving Southern California. Roof repair, replacement, installation & maintenance. Licensed, bonded & insured. Free estimates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
