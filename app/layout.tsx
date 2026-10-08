import type { Metadata } from "next";
import { Inter, Inter_Tight, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { DonateProvider } from "@/components/donation/DonateContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: '400',
  style: 'italic',
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ernest Chianumba Foundation",
  description: "Guided by love, cared for with grace, building lives.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DonateProvider>{children}</DonateProvider>
      </body>
    </html>
  );
}
