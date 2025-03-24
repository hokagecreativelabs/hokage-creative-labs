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
