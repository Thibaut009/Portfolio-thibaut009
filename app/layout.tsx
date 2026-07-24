import type { Metadata, Viewport } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import content from "./data/content.json";
import CustomCursor from "./components/CustomCursor";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thibaut009.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: content.meta.title,
    template: "%s | Thibaut Gabet",
  },
  description: content.meta.description,
  keywords: content.meta.keywords,
  authors: [{ name: "Thibaut Gabet", url: siteUrl }],
  creator: "Thibaut Gabet",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "profile",
    locale: "fr_FR",
    url: siteUrl,
    siteName: content.meta.title,
    title: content.meta.title,
    description: content.meta.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thibaut Gabet — Développeur Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07070c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thibaut Gabet",
    jobTitle: "Développeur Full Stack",
    url: siteUrl,
    email: "mailto:gabet.thibaut@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lille",
      addressCountry: "FR",
    },
    sameAs: [
      "https://github.com/Thibaut009",
      "https://www.linkedin.com/in/thibaut-gabet-8393a4207/",
    ],
    knowsAbout: [
      "Angular",
      "Spring Boot",
      "React",
      "Next.js",
      "PostgreSQL",
      "TypeScript",
      "Laravel",
      "Symfony",
      ".NET",
    ],
  };

  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <CustomCursor />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
