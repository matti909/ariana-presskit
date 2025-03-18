import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.scss";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Hero from "./sections/Hero";
import Rider from "./sections/Rider";

const robotoSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ariana Presskit",
  description: "Ariana Presskit 2025",
  icons: {
    icon: [
      { url: "/musica.png", type: 'image/png' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <div className="background"></div>
        <Navbar />
        <Hero />
        <main>
          {children}
        </main>
        <Rider />
        <Footer />
      </body>
    </html>
  );
}
