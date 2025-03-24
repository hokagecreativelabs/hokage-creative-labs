"use client";
import { useEffect } from "react";
import Head from "next/head";
import "./globals.css";
import { SEO } from "../seo.config";
import Script from "next/script";
import Loader from "./components/ui/Loader";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function RootLayout({ children }) {
  useEffect(() => {
    const loadCalendly = () => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    };

    const chatButton = document.getElementById("chatButton");
    if (chatButton) {
      chatButton.addEventListener("click", loadCalendly);
    }

    return () => {
      if (chatButton) {
        chatButton.removeEventListener("click", loadCalendly);
      }
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <link rel="canonical" href={SEO.canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:url" content={SEO.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SEO.canonical}/logo.png`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={`${SEO.canonical}/logo.png`} />

        {/* Preload Fonts */}
        <link
          rel="preload"
          href="/fonts/VastagoGrotesk.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>

      <body className="min-h-screen flex flex-col">
        <Navbar />
        <Loader />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Google Analytics */}
        <Script
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"
        />
        <Script
          async
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXX');
            `,
          }}
        />

        {/* Tawk.to - Lazy Load on Interaction */}
        <Script
          defer
          id="tawkto-script"
          strategy="lazyOnload"
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

        <button
          id="chatButton"
          className="fixed bottom-4 right-4 p-2 bg-blue-600 text-white rounded-full"
        >
          Chat with Us
        </button>
      </body>
    </html>
  );
}
