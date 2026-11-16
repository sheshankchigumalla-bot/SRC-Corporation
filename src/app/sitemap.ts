import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const SITE_URL = "https://www.srcagroglobal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/products`, changeFrequency: "monthly", priority: 0.9 },
    ...products.map(product => ({
      url: `${SITE_URL}/products/${product.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${SITE_URL}${product.image}`],
    })),
  ];
}
