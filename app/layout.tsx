import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Undangan Halal Bi Halal — Keluarga Citra",
  description:
    "Undangan Halal Bi Halal Idul Fitri 1447 H — Keluarga Tino Pane",
  keywords: ["halal bihalal", "idul fitri", "1447H", "undangan", "lebaran"],
  openGraph: {
    title: "Undangan Halal Bi Halal — Keluarga Citra",
    description: "Undangan Halal Bi Halal Idul Fitri 1447 H",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
