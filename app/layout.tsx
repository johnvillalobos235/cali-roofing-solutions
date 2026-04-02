import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maaz Roofing",
  description: "Professional roofing services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
