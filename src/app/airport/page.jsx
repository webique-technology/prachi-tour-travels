// src/app/airport/page.js
import ServicesGridCardSection from "@/components/sections/ServicesGridSec";
import { CommonBanner } from "@/components/ui/cards";
import { NashikAirportCabServices } from "@/lib/airportData";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title:
      "Airport Transportation | Leading Cab / Taxi Service Provider in Nashik",
    description:
      "Book punctual 24/7 Airport pickup and drop cab services from Nashik to Mumbai Airport (CSMIA), Pune Airport, Shirdi Airport, and Ozar Nashik Airport.",
    image: "/images/slide_3.webp",
  },
  path: "/airport",
});

const AirportPage = () => {
  const breadcrumbPaths = [
    {
      label: { en: "Home", hi: "होम", mr: "मुख्यपृष्ठ" },
      url: "/",
    },
    {
      label: { en: "Airport", hi: "एयरपोर्ट", mr: "विमानतळ" },
      url: "/airport",
    },
  ];

  return (
    <main>
      <CommonBanner
        title={{
          en: "Airport Services",
          hi: "एयरपोर्ट कैब सेवाएं",
          mr: "विमानतळ कॅब सेवा",
        }}
        breadcrumbs={breadcrumbPaths}
        bgImage="/images/slide_3.webp"
        overlayOpacity={0.6}
        textAlign="center"
      />
      <ServicesGridCardSection data={NashikAirportCabServices} />
    </main>
  );
};

export default AirportPage;