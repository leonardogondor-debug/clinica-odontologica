/**
 * LAYOUT PRINCIPAL
 * Define SEO (title, description, Open Graph), dados estruturados (JSON-LD "Dentist")
 * e carrega o componente de consentimento, que ativa GTM/GA4/Meta Pixel após o aceite.
 */
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { clinica } from "@/data/clinica";
import Consentimento from "@/components/Consentimento/Consentimento";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.suaclinica.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${clinica.nome} | Agende sua avaliação odontológica`,
  description: `${clinica.descricao} Agende sua avaliação pelo WhatsApp.`,
  alternates: { canonical: "/" },
  openGraph: {
    title: clinica.nome,
    description: clinica.descricao,
    url: siteUrl,
    siteName: clinica.nome,
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b5ed7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Dados estruturados para o Google entender que é uma clínica odontológica
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinica.nome,
    description: clinica.descricao,
    url: siteUrl,
    telephone: clinica.telefoneLink,
    email: clinica.email,
    address: { "@type": "PostalAddress", streetAddress: clinica.endereco, addressCountry: "BR" },
    openingHours: clinica.horario,
  };

  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Consentimento />
      </body>
    </html>
  );
}
