/* Sitemap automático para o Google (/sitemap.xml) */
import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.suaclinica.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/politica-de-privacidade`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
