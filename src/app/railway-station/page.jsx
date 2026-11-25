import ServicesGridCardSection from "@/components/sections/ServicesGridSec";
import { CommonBanner } from "@/components/ui/cards";
import { NashikRailwayCabServices } from "@/lib/railwayData";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title:
      "Railway Pickup - Drop Services | Leading Cab / Taxi Rental Service Provider in Nashik",
    description:
      "Book punctual 24/7 Railway Station pickup and drop cab services in Nashik, Nashik Road, Manmad, Igatpuri, and Kopargaon with experienced drivers.",
    image: "/images/slide_3.webp",
  },
  path: "/railway-station",
});

const RailwayStationPage = () => {
  const breadcrumbPaths = [
    {
      label: { en: "Home", hi: "होम", mr: "मुख्यपृष्ठ" },
      url: "/",
    },
    {
      label: { en: "Railway Station", hi: "रेलवे स्टेशन", mr: "रेल्वे स्थानक" },
      url: "/railway-station",
    },
  ];

  return (
    <main>
      <CommonBanner
        title={{
          en: "Railway Station Services",
          hi: "रेलवे स्टेशन सेवाएं",
          mr: "रेल्वे स्थानक सेवा",
        }}
        breadcrumbs={breadcrumbPaths}
        bgImage="/images/slide_3.webp"
        overlayOpacity={0.6}
        textAlign="center"
      />
      <ServicesGridCardSection data={NashikRailwayCabServices} />
    </main>
  );
};

export default RailwayStationPage;