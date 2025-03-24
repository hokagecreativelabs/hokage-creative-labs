import './globals.css'
import { SEO } from "../seo.config";
import ClientScripts from "./components/layout/ClientScripts";
import Loader from "./components/ui/Loader";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata = {
  title: SEO.title,
  description: SEO.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="image" href="/optimized/itl-600.webp" />
        <link rel="preload" as="image" href="/optimized/MP-600.webp" />
        <link rel="preload" as="image" href="/optimized/daylee-600.webp" />
        <link rel="preload" as="image" href="/optimized/kings-600.webp" />
        <link
          rel="preload"
          href="/fonts/Nohemi-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/VastagoGrotesk-Regular.otf"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <Loader />
        <main className="flex-1">{children}</main>
        <Footer />
        <ClientScripts />
      </body>
    </html>
  );
}
