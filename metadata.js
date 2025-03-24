// app/metadata.js
import { SEO } from "./seo.config";

export const metadata = {
  title: SEO.title,
  description: SEO.description,
  openGraph: {
    title: SEO.openGraph.title,
    description: SEO.openGraph.description,
    url: SEO.openGraph.url,
    siteName: SEO.openGraph.site_name,
    images: [
      {
        url: SEO.openGraph.images[0].url,
        width: SEO.openGraph.images[0].width,
        height: SEO.openGraph.images[0].height,
        alt: SEO.openGraph.images[0].alt,
      },
    ],
    type: SEO.openGraph.type,
  },
  twitter: {
    card: SEO.twitter.cardType,
    site: SEO.twitter.site,
    creator: SEO.twitter.handle,
    title: SEO.title,
    description: SEO.description,
    images: [SEO.openGraph.images[0].url],
  },
};
