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
  description: "The Ernest Chianumba Foundation is a Nigerian charitable foundation dedicated to supporting children through education, compassionate care and community support. Join us from anywhere in the world to help build brighter futures and create lasting opportunities for children in need.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="VaDcT8ETwVWi28LtzuuFf_RnKeATo6r6b-nntOApmqU" />
      </head>
      <body className="min-h-full flex flex-col">
        <DonateProvider>{children}</DonateProvider>
      </body>
    </html>
  );
}
