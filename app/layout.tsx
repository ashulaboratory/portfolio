import type { Metadata } from "next";
import { Inter, Archivo_Black, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Ash from "@/components/Ash";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
  display: "swap",
});

const notoJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashisu Murakami | Portfolio",
  description:
    "Student Engineer @ Ishikawa KOSEN. 不便を見つけて、自分の手で形にする人。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${inter.variable} ${archivoBlack.variable} ${notoJp.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <Ash />
      </body>
    </html>
  );
}
