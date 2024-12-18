import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

export const metadata: Metadata = {
  title: "Atabey Transfer",
  description: "Premium transfering service from airport to anywhere you want.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} w-screen  antialiased`}>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
