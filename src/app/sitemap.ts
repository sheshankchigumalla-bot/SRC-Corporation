import type { MetadataRoute } from "next";

const SITE_URL = "https://www.srcagroglobal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${SITE_URL}/images/hero-section-image.png`,
        `${SITE_URL}/products/dry-red-chilli.png`,
        `${SITE_URL}/products/specialty-chilli-powder.png`,
        `${SITE_URL}/products/onion.png`,
        `${SITE_URL}/products/de-onion.png`,
        `${SITE_URL}/products/turmeric-powder-and-roots-display.png`,
        `${SITE_URL}/products/garlic.png`,
      ],
    },
  ];
}
