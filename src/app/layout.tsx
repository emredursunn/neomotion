import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neomotion | Yapay Zeka Reklam Ajansı",
  description:
    "Neomotion, yapay zeka destekli reklam çekimleri ve dijital içerik üretimiyle markanıza yenilikçi çözümler sunar. Sanal modellerle moda, e-ticaret ve yaratıcı kampanyalar için etkileyici görseller üretin.",
  keywords: [
    "yapay zeka reklam ajansı",
    "reklam çekimi",
    "sanal model",
    "AI model ajansı",
    "moda çekimi",
    "e-ticaret görseli",
    "yapay zeka fotoğrafçılık",
    "dijital reklam",
    "yaratıcı ajans",
    "Türkiye reklam ajansı"
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased font-sans bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
