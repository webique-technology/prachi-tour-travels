import { PilgrimStandard } from "@/components/sections/CommonSec";
import { ServiceTabsSection } from "@/components/sections/ServicesTabSec";
import { CommonBanner } from "@/components/ui/cards";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title:
      "Bus & Tempo Traveller Rental in Nashik | Group Tour Bus Booking",
    description:
      "Book 13 to 50 seater AC & Non-AC Tempo Travellers and luxury buses on rent in Nashik for family tours, pilgrimages, and corporate trips.",
    image: "/images/about-banner.jpg",
  },
  path: "/bus",
});

const BusPage = () => {
  const breadcrumbPaths = [
    {
      label: { en: "Home", hi: "होम", mr: "मुख्यपृष्ठ" },
      url: "/",
    },
    {
      label: { en: "Bus", hi: "बस", mr: "बस" },
      url: "/bus",
    },
  ];

  return (
    <main>
      <CommonBanner
        title={{
          en: "Bus Services",
          hi: "बस सेवाएं",
          mr: "बस सेवा",
        }}
        breadcrumbs={breadcrumbPaths}
        bgImage="/images/slide_3.webp"
        overlayOpacity={0.6}
        textAlign="center"
      />
      <ServiceTabsSection
        page="bus"
        translationKey=""
        title=""
        highlightWord=""
        bgVariant={"bg-white"}
      />
      <PilgrimStandard />
    </main>
  );
};

export default BusPage;