import { PilgrimStandard } from "@/components/sections/CommonSec";
import { ServiceTabsSection } from "@/components/sections/ServicesTabSec";
import { CommonBanner } from "@/components/ui/cards";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title:
      "Car Rental Service in Nashik | Outstation Cabs / Taxi, Airport Cab / Taxi & Local Travel",
    description:
      "Book affordable Cabs / Taxi from Nashik to Shirdi, Mumbai, Pune & all Maharashtra. Reliable drivers, AC Cabs / Taxi & on-time service guaranteed.",
    image: "/images/about-banner.jpg",
  },
  path: "/cabs",
});

const CabsPage = () => {
  const breadcrumbPaths = [
    {
      label: { en: "Home", hi: "होम", mr: "मुख्यपृष्ठ" },
      url: "/",
    },
    {
      label: { en: "Cabs", hi: "कैब्स", mr: "कॅब्स" },
      url: "/cabs",
    },
  ];

  return (
    <main>
      <CommonBanner
        title={{
          en: "Cabs Services",
          hi: "कैब सेवाएं",
          mr: "कॅब सेवा",
        }}
        breadcrumbs={breadcrumbPaths}
        bgImage="/images/slide_3.webp"
        overlayOpacity={0.6}
        textAlign="center"
      />
      <ServiceTabsSection
        page="cabs"
        translationKey="cabsTabsSec"
        title="Choose Your"
        highlightWord="Cab"
      />
      <PilgrimStandard />
    </main>
  );
};

export default CabsPage;