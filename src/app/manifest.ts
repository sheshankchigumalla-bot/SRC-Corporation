import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SRC Corporation",
    short_name: "SRC Corp",
    description:
      "Bulk supplier and exporter of premium Indian dry red chillies, chilli powder, onions, turmeric and dehydrated garlic.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ed1c24",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
