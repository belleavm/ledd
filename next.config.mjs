/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // desactivar optimizacion de imagenes en next
    images: {
    unoptimized: true,
  }
    //assetPrefix: "https://yuuki-ten.vercel.app/"
    // distDir: 'dist'
};

export default nextConfig;
