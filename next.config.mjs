/** @type {import('next').NextConfig} */
const nextConfig = {
  // Imagens otimizadas automaticamente (WebP/AVIF) pelo componente <Image>
  images: { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
};

export default nextConfig;
