// src/app/cities/page.jsx
import ServicesGridCardSection from "@/components/sections/ServicesGridSec";
import { CommonBanner } from "@/components/ui/cards";
import { originalStaticTours } from "@/lib/cityData";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title:
      "City Transportation | Leading Cab / Taxi Service Provider in Nashik",
    description:
      "Book reliable outstation and intercity cabs from Nashik to Mumbai, Pune, Shirdi, Trimbakeshwar, Shani Shingnapur, and across Maharashtra.",
    image: "/images/slide_3.webp",
  },
  path: "/cities",
});

const CitiesPage = () => {
  const breadcrumbPaths = [
    {
      label: { en: "Home", hi: "होम", mr: "मुख्यपृष्ठ" },
      url: "/",
    },
    {
      label: { en: "Cities", hi: "शहर", mr: "शहरे" },
      url: "/cities",
    },
  ];

  // Maps ONLY originalStaticTours to include redirect paths
  const staticCityServices = originalStaticTours.map((tour) => ({
    ...tour,
    redirectUrl: `/cities/${tour.slug}`,
  }));

  return (
    <main>
      <CommonBanner
        title={{
          en: "Cities Services",
          hi: "शहर कैब सेवाएं",
          mr: "शहर कॅब सेवा",
        }}
        breadcrumbs={breadcrumbPaths}
        bgImage="/images/slide_3.webp"
        overlayOpacity={0.6}
        textAlign="center"
      />
      {/* Renders Grid with ONLY Original Static Tour Cards */}
      <ServicesGridCardSection data={staticCityServices} />
    </main>
  );
};

export default CitiesPage;