"use client"
import { useEffect } from "react";
import "./globals.css";
import { SEO } from "../seo.config";
import Script from "next/script";
import Loader from "./components/ui/Loader";
import ChatIcon from "./components/ui/ChatIcon";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// export const metadata = {
//   title: SEO.title,
//   description: SEO.description,
//   openGraph: SEO.openGraph,
//   twitter: SEO.twitter,
//   metadataBase: new URL(SEO.canonical), // Fixed undefined siteUrl issue
//   alternates: { canonical: SEO.canonical },
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <html lang="en">
      <head>
      <link
            href="https://assets.calendly.com/assets/external/widget.css"
            rel="stylesheet"
        />
        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX" // Replace with actual ID
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXX'); // Replace with actual ID
            `,
          }}
        />

        {/* JSON-LD Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: SEO.canonical,
              name: SEO.title,
              description: SEO.description,
              publisher: {
                "@type": "Organization",
                name: "Your Agency Name",
                logo: {
                  "@type": "ImageObject",
                  url: `${SEO.canonical}/logo.png`,
                },
              },
            }),
          }}
        />
        <Script
          id="tawkto-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/67dd42619b1c5d190de9b5e0/1ims4mjdm';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />

      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <Loader />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
