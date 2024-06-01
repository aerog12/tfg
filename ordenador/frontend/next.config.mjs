/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otras configuraciones pueden ir aquí
};

// Importar next-images
import withImages from "next-images";

// Extender la configuración con next-images
export default withImages(nextConfig);
