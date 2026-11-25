// src/lib/seo.js

const DEFAULT_SITE_CONFIG = {
  siteName: "Prachi Tours & Travels Airport Cabs / Taxi",
  defaultTitle:
    "Prachi Tours & Travels Airport Cabs / Taxi | Premium Cab & Car Rentals in Maharashtra",
  defaultDescription:
    "Book reliable, affordable, and safe outstation Cabs / Taxi, and buses from Nashik to Mumbai, Pune, Shirdi, and across Maharashtra. 24/7 service.",
  defaultKeywords: [
    "Prachi Tours & Travels Airport Cabs / Taxi",
    "Cab / Taxi Rental Service Nashik",
    "Outstation cab booking",
    "Cab rental Nashik to Mumbai",
    "Car hire Nashik",
  ],
  siteUrl: "https://www.nashikmumbaicabs.com", // Replace with your actual domain
  defaultOgImage: "/images/og-default.jpg",
};

// Safely extracts string from plain strings or { en, hi, mr } translation objects
function resolveMetaText(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    return value.en || value.hi || value.mr || "";
  }
  return String(value);
}

/**
 * Generates standardized Next.js Metadata objects dynamically
 * @param {Object} options Configuration parameters
 * @param {Object} [options.data] Dynamic data object (cab, tour, airport, railway, etc.)
 * @param {Object} [options.staticData] Manual overrides or static page details
 * @param {string} [options.path] Current page path or slug (e.g., '/cabs/maruti-ertiga')
 * @returns {import('next').Metadata} Formatted Next.js Metadata configuration object
 */
export function generatePageMetadata({
  data = null,
  staticData = {},
  path = "",
} = {}) {
  // 1. Extract dynamic meta properties safely across string & { en, hi, mr } formats
  const dynamicTitle =
    resolveMetaText(data?.meta?.title) ||
    resolveMetaText(data?.title) ||
    resolveMetaText(data?.name) ||
    null;

  const dynamicDescription =
    resolveMetaText(data?.meta?.description) ||
    resolveMetaText(data?.description) ||
    resolveMetaText(data?.intro) ||
    resolveMetaText(data?.routesSubtitle) ||
    null;

  const dynamicImage = data?.imageSrc || data?.image || null;

  // 2. Resolve final parameters
  const staticTitle = resolveMetaText(staticData.title);
  const title =
    staticTitle ||
    (dynamicTitle
      ? `${dynamicTitle} | ${DEFAULT_SITE_CONFIG.siteName}`
      : DEFAULT_SITE_CONFIG.defaultTitle);

  // Clean description string to prevent cut-offs (max 160 chars)
  const rawDesc =
    resolveMetaText(staticData.description) ||
    dynamicDescription ||
    DEFAULT_SITE_CONFIG.defaultDescription;
  const description =
    rawDesc.length > 160 ? `${rawDesc.slice(0, 157)}...` : rawDesc;

  // Resolve absolute canonical and image URLs
  const canonicalUrl = `${DEFAULT_SITE_CONFIG.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

  const rawImage =
    staticData.image || dynamicImage || DEFAULT_SITE_CONFIG.defaultOgImage;
  const imageUrl = rawImage.startsWith("http")
    ? rawImage
    : `${DEFAULT_SITE_CONFIG.siteUrl}${rawImage}`;

  // Combine keywords safely whether data.notes is a string or { en, hi, mr }
  const resolvedNotes = resolveMetaText(data?.notes);
  const keywords = Array.isArray(staticData.keywords)
    ? staticData.keywords
    : resolvedNotes
      ? resolvedNotes
          .split(",")
          .map((k) => k.trim())
          .filter(Boolean)
      : DEFAULT_SITE_CONFIG.defaultKeywords;

  // 3. Construct and return the full Next.js Metadata object
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: DEFAULT_SITE_CONFIG.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
