// app/metadata.js
import { SEO } from "../seo.config";

export const metadata = {
  title: SEO.title,
  description: SEO.description,
  openGraph: SEO.openGraph,
  twitter: SEO.twitter,
  metadataBase: new URL(SEO.canonical),
  alternates: { canonical: SEO.canonical },
};
