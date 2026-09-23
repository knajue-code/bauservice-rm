import type { Metadata } from "next";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/600.css";
import "@fontsource/source-sans-3/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bauservice-rm.de"),
  title: "RM Bauservice | Renovierung & Sanierung in Magstadt",
  description:
    "RM Bauservice in Magstadt: Bautrocknung, Boden- und Fugenarbeiten sowie koordinierte Renovierungen und Sanierungen mit qualifizierten Fachpartnern.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website", locale: "de_DE", url: "/", siteName: "RM Bauservice",
    title: "RM Bauservice | Renovierung & Sanierung in Magstadt",
    description: "Bautrocknung, Boden- und Fugenarbeiten sowie koordinierte Renovierungen und Sanierungen mit qualifizierten Fachpartnern.",
    images: [{ url: "/images/rm-bauservice-social.jpg", width: 1200, height: 630, alt: "RM Bauservice – Renovierung und Sanierung in Magstadt" }],
  },
  twitter: { card: "summary_large_image", title: "RM Bauservice | Renovierung & Sanierung in Magstadt", description: "Bautrocknung, Boden- und Fugenarbeiten sowie koordinierte Renovierungen und Sanierungen.", images: ["/images/rm-bauservice-social.jpg"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org", "@type": "HomeAndConstructionBusiness",
    name: "RM Bauservice – Rino Melis", url: "https://bauservice-rm.de", telephone: "+49 176 60849000", email: "rinomelis@web.de",
    image: "https://bauservice-rm.de/images/rm-bauservice-social.jpg",
    address: { "@type": "PostalAddress", streetAddress: "Rudolf-Diesel-Straße 1", postalCode: "71106", addressLocality: "Magstadt", addressCountry: "DE" },
    areaServed: ["Magstadt", "Renningen", "Leonberg", "Böblingen", "Sindelfingen", "Stuttgart"],
  };
  return <html lang="de"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /></body></html>;
}
