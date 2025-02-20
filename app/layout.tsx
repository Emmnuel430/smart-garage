import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartGarage",
  description: "Solution complète pour la gestion de garages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="theme-color" content="#0D47A1" /> */}

        {/* Icônes */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/logo.png" />

        {/* Liens CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

        <title>SmartGarage</title>
      </head>
      <body className="bg-blue-950 text-white tracking-wide font-jost">
        {/* Contenu */}
        {children}

        {/* Scripts */}
        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://unpkg.com/@tailwindcss/browser@4"
          strategy="afterInteractive"
        />
        <Script src="/js/modal.js" strategy="afterInteractive" />
        <Script src="/js/scrollreveal.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
