import type { Metadata, Viewport } from "next";
import { Inter, Zain, Zilla_Slab } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const zain = Zain({
  variable: "--font-zain-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla-slab",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://www.srcagroglobal.com";
const SITE_NAME = "SRC Corporation";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "SRC Corporation - Premium Indian Red Chillies, Spices & Onion Exporter",
    template: "%s | SRC Corporation",
  },
  description:
    "SRC Corporation is a Hyderabad-based bulk supplier and exporter of premium dry red chillies (Teja, Byadgi, Sannam), red chilli powder, red onions, dehydrated onion, turmeric and dehydrated garlic. 27+ years of trusted global supply.",
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "red chilli exporter India",
    "dry red chilli supplier Hyderabad",
    "Teja chilli supplier",
    "Byadgi chilli exporter",
    "Sannam chilli wholesale",
    "red chilli powder exporter",
    "Indian spice exporter",
    "bulk onion supplier India",
    "dehydrated onion supplier",
    "dehydrated garlic exporter",
    "turmeric exporter India",
    "agro export Hyderabad",
    "SRC Corporation",
    "SRC Agro Global",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Agricultural Exports",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "SRC Corporation - Premium Indian Red Chillies, Spices & Onion Exporter",
    description:
      "Bulk supply & global export of premium Indian red chillies, chilli powder, red onions, dehydrated onion, turmeric and dehydrated garlic. 27+ years experience, 5000+ tons supplied.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SRC Corporation - Premium Indian Red Chillies, Spices & Onion Exporter",
    description:
      "Bulk supply & global export of premium Indian red chillies, spices and onion. Hyderabad-based, 27+ years of trusted trade.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#ed1c24",
  width: "device-width",
  initialScale: 1,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: SITE_NAME,
  alternateName: ["SRC Corp", "SRC Agro Global", "SRC Corporation Hyderabad"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icon-512.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/images/hero-section-image.png`,
  description:
    "Bulk supplier and exporter of premium Indian dry red chillies, red chilli powder, red onions, dehydrated onion, turmeric and dehydrated garlic. Based in Hyderabad, serving wholesalers, food processors and spice brands globally.",
  foundingDate: "1998",
  slogan: "Global Supply of Premium Red Chillies & Spices",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop No-112, 1st Floor, 16-10-1, Malakpet Gunj, Sri Krupa Market",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500036",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.3753,
    longitude: 78.5036,
  },
  telephone: [
    "+91-98494-24568",
    "+91-88850-24568",
    "+91-96525-02121",
    "+49-176-61749674",
  ],
  email: "srccorporation2112@gmail.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+91-96525-02121",
    email: "srccorporation2112@gmail.com",
    areaServed: "Worldwide",
    availableLanguage: "English",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Place", name: "Global" },
  ],
  knowsAbout: [
    "Dry Red Chilli Export",
    "Teja Chilli",
    "Byadgi Chilli",
    "Sannam Chilli",
    "Red Chilli Powder",
    "Red Onion",
    "Dehydrated Onion",
    "Turmeric",
    "Dehydrated Garlic",
    "Spice Trading",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Dry Red Chilli",
          category: "Spice",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Red Chilli Powder",
          category: "Spice",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Red Onion",
          category: "Vegetable",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Dehydrated Onion",
          category: "Dehydrated Vegetable",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Turmeric",
          category: "Spice",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Dehydrated Garlic",
          category: "Dehydrated Vegetable",
        },
      },
    ],
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: ["SRC Corp", "SRC Agro Global"],
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

const sanitizeLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${zain.variable} ${zillaSlab.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizeLd(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizeLd(websiteLd) }}
        />
        {children}
      </body>
    </html>
  );
}
