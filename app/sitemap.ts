import type { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://bauservice-rm.de/", lastModified: "2026-09-23" },
    { url: "https://bauservice-rm.de/impressum", lastModified: "2026-09-22" },
    { url: "https://bauservice-rm.de/datenschutz", lastModified: "2026-09-23" },
  ];
}
