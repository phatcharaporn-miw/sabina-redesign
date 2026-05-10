import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/PageHeader";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Sabina Online Store",
  description: "Sabina Lingerie Official Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#FAF9F8] text-[#2A1F1A]">
        <main>{children}</main>
      </body>
    </html>
  );
}