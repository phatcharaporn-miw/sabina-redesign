import type { Metadata } from "next";
// import { Playfair_Display, Inter } from "next/font/google";
import { Cormorant_Garamond, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
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
      className={`${cormorant.variable} ${notoSansThai.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#FAF9F8] text-[#2A1F1A]">
        <main>{children}</main>
      </body>
    </html>
  );
}