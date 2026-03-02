import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manicure-five.vercel.app"),

  title: "Studio de Uñas en Guadalajara | Diseño Profesional 💅",
  description:
    "Reserva tus uñas profesionales en Guadalajara. Diseños únicos, gelish, acrílicas y más.",

  openGraph: {
    title: "Studio de Uñas en Guadalajara 💅",
    description:
      "Diseños únicos que resaltan tu estilo. Agenda tu cita hoy.",
    url: "/",
    siteName: "Nail Studio GDL",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Studio de Uñas en Guadalajara 💅",
    description:
      "Diseños únicos que resaltan tu estilo. Agenda tu cita hoy.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
