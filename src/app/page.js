import HeroHeader from "@/components/sections/HeroHeader";
import { LeftTextRightImageCommnSec } from "@/components/sections/LTRI_CommonSec";
import PopularDestinations from "@/components/sections/PopularDestination";
import {
  AppDownloadBanner,
  PromoBanner,
} from "@/components/sections/PromoSection";
import { ServiceTabsSection } from "@/components/sections/ServicesTabSec";
import WhyChooseUs from "@/components/sections/WhyChooseUsSec";
import TestimonialSec from "@/components/sections/TestimonialSec";

import { BookingForm, CarBlock } from "@/components/sections/CommonSec";

export default function Home() {
  const ExplorationSec = {
    heading: "COMFORTABLE JOURNEYS ACROSS ",
    highlightWord: "MAHARASHTRA",
    imageSrc: "/images/welcome-img.webp", // Replace with your image asset
    description:
      "We provide a seamless and reliable way to explore the world around you, making every journey an enjoyable experience. From spiritual pilgrimages to Shirdi and Trimbakeshwar to comfortable family road trips across Maharashtra, we deliver clean vehicles, verified local drivers, and transparent pricing from Nashik.",
    badgeText: {
      normalText: 8,
      highlightedText: "Year Of Services",
    },
    keyPoints: [
      {
        id: 1,
        imgIcon: "/images/happy-face.png",
        title: "Transportation",
        number: 150,
      },
      {
        id: 2,
        imgIcon: "/images/rate.png",
        title: "Transportation",
        number: 76,
      },
    ],
    btnLink: "/about-us",
    btnText: "Read More",
  };

  const PromoData = {
    highlightText: "",
    mainTitleNormal: "",
    mainTitleBold: "COMPLETE TRAVEL & ",
    highlightWord: "CAB SERVICES.",
    mainTitleSuffix: "",
    buttonText: "",
    desc: [],
    features: [
      {
        id: 1,
        icon: "/images/deal.png",
        title: "Hire Cab / Taxis in Nashik",
        description:
          "A diverse fleet of reliable vehicles, from luxury sedans to spacious vans, tailored perfectly for solo travelers, families, and corporate groups.",
      },
      {
        id: 2,
        icon: "/images/airport-transfer.svg",
        title: "Airport Pickup / Drop Cab / Taxi Services",
        description:
          "Reliable and punctual transfers to and from all major airports including CSMIA Mumbai. Professional chauffeurs ensure you never miss a flight.",
      },
      {
        id: 3,
        icon: "/images/bus.png",
        title: "Bus Services from Nashik",
        description:
          "Spacious and comfortable bus rentals for group pilgrimages and corporate tours in Nashik and surrounding areas, equipped with modern amenities.",
      },
      {
        id: 4,
        icon: "/images/luggage.png",
        title: "Corporate Travel",
        description:
          "Streamlined corporate logistics and efficient group transportation solutions customized to simplify high-level business travel needs.",
      },
    ],
    // Replace with your image source path matching image_d1d2a0.jpg
    bgImage: "/images/travel-car-family.webp",
  };

  const whyChooseUsData = {
    title: "Why Choose",
    highlightWord: "Us",
    features: [
      {
        id: 1,
        iconName: "UserCheck", // Maps to <UserCheck /> icon component
        title: "Tour Guide",
        description:
          "Professional, well-mannered drivers who double as local travel guides throughout Maharashtra.",
      },
      {
        id: 2,
        iconName: "Coins", // Maps to <Coins /> icon component
        title: "Friendly Price",
        description:
          "Transparent, budget-friendly outstation Cab / Taxi rates with no hidden tolls or surprise surcharges.",
      },
      {
        id: 3,
        iconName: "CalendarDays", // Maps to <CalendarDays /> icon component
        title: "Instant Booking",
        description:
          "Seamless 24/7 digital reservations with instant ride allocation and quick vehicle dispatch.",
      },
      {
        id: 4,
        iconName: "FileText", // Maps to <FileText /> icon component
        title: "Custom Strategy",
        description:
          "Tailored transit logistics carefully planned for corporate events, family trips, and pilgrimages.",
      },
    ],
  };

  const downloadSectionData = {
    titlePrefix: "Ready to Travel?",
    titleHighlight: "for a Safe ",
    titleSuffix: "& On-Time Ride!",
    iosLink: "tel:+911234567890",
    androidLink:
      "https://wa.me/911234567890?text=Hello%2C%20I%20would%20like%20to%20book%20a%20cab.%20Please%20provide%20more%20details.",
    mockupImageSrc: "/images/promo-mobiles.png",
    // Can accept imported static object 'dualPhonesMockup' or normal string route paths
  };

  return (
    <main>
      <HeroHeader />
      {/* <CarBlock /> */}
      <LeftTextRightImageCommnSec
        translationKey="aboutSec"
        heading={ExplorationSec.heading}
        highlightWord={ExplorationSec.highlightWord}
        keyPoints={ExplorationSec.keyPoints}
        description={ExplorationSec.description}
        imageSrc={ExplorationSec.imageSrc}
        badgeText={ExplorationSec.badgeText}
        badge_color_r={"accent"}
        btnLink={ExplorationSec.btnLink}
        btnText={ExplorationSec.btnText}
      />
      <PromoBanner
        translationKey="servicesPromoSec"
        content={{
          highlightText: PromoData.highlightText,
          highlightWord: PromoData.highlightWord,
          mainTitleNormal: PromoData.mainTitleNormal,
          mainTitleBold: PromoData.mainTitleBold,
          mainTitleSuffix: PromoData.mainTitleSuffix,
          buttonText: PromoData.buttonText,
        }}
        desc={PromoData.desc}
        features={PromoData.features}
        bgImage={PromoData.bgImage}
      />
      <WhyChooseUs
        title={whyChooseUsData.title}
        highlightWord={whyChooseUsData.highlightWord}
        features={whyChooseUsData.features}
      />
      <ServiceTabsSection
        title=" Choose Your Ride For Every"
        highlightWord="Journey"
      />
      <PopularDestinations />
      <TestimonialSec />
      <div id="quickQuote">
        <AppDownloadBanner
          titlePrefix={downloadSectionData.titlePrefix}
          titleHighlight={downloadSectionData.titleHighlight}
          titleSuffix={downloadSectionData.titleSuffix}
          iosLink={downloadSectionData.iosLink}
          androidLink={downloadSectionData.androidLink}
          mockupImageSrc={downloadSectionData.mockupImageSrc}
          // bgImage={"/images/promo-banner-2.jpg"}
          rightComponent={<BookingForm titleClass={"d-none"} />}
        />
      </div>
    </main>
  );
}
