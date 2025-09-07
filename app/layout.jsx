import './globals.css'

export const metadata = {
  title: 'La energía del dinero',
  description: 'Landing del libro',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
