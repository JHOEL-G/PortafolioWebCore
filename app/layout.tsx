// app/layout.tsx
import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Comic Style App",
  description: "Un sitio con estilo cómic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comicNeue.variable} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}