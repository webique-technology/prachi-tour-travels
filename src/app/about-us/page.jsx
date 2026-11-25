import React from "react";
import { CommonBanner } from "@/components/ui/cards";
import innerPageBg from "../../../public/images/slide_3.webp";
import { AppDownloadBanner } from "@/components/sections/PromoSection";
import mobileImg from "../../../public/images/promo-mobiles.png";
import appDBgImage from "../../../public/images/promo-banner-2.jpg";
import { LeftTextRightImageCommnSec } from "@/components/sections/LTRI_CommonSec";
import {
  BookingForm,
  PilgrimStandard,
} from "@/components/sections/CommonSec";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title: "About Us | Leading Cab / Taxi Rental Service Provider in Nashik",
    description:
      "Learn more about Prachi Tours & Travels Airport Cabs, our vision, vetted professional drivers, and fleet quality standards.",
    image: "/images/about-banner.jpg",
  },
  path: "/about-us",
});

export default function AboutPage() {
  const breadcrumbPaths = [
    {
      label: { en: "Home", hi: "होम", mr: "मुख्यपृष्ठ" },
      url: "/",
    },
    {
      label: { en: "About Us", hi: "हमारे बारे में", mr: "आमच्याबद्दल" },
      url: "/about-us",
    },
  ];

  const ExplorationSec = {
    heading: "10 Years of Delivering Reliable ",
    highlightWord: "Cab Journeys",
    imageSrc: "/images/customize-img.webp",
    badgeText: {
      normalText: "Looking for an",
      highlightedText: "exciting way to explore Nashik’s hidden gems.",
    },
    vissionMission: [
      {
        title: "Vision",
        desc: "To be Maharashtra's most trusted and customer-first cab rental service, setting the benchmark for safety, punctuality, and transparent pricing.",
      },
      {
        title: "Mission",
        desc: "To deliver clean, comfortable vehicles with experienced drivers 24/7, making every pilgrimage, airport drop, and outstation journey completely stress-free.",
      },
    ],
  };

  const downloadSectionData = {
    titlePrefix: "Ever wondered how smooth your journey can be? At ",
    titleHighlight: "Prachi Tours & Travels Airport Cabs",
    titleSuffix: "We Make It Happen.",
    iosLink: "tel:+911234567890",
    androidLink:
      "https://wa.me/911234567890?text=Hello%2C%20I%20would%20like%20to%20book%20a%20cab.%20Please%20provide%20more%20details.",
    mockupImageSrc: mobileImg,
  };

  return (
    <main>
      <CommonBanner
        title={{
          en: "About Us",
          hi: "हमारे बारे में",
          mr: "आमच्याबद्दल",
        }}
        breadcrumbs={breadcrumbPaths}
        bgImage={innerPageBg}
        overlayOpacity={0.6}
        textAlign="center"
      />
      <LeftTextRightImageCommnSec
        translationKey="aboutPageExplorationSec"
        heading={ExplorationSec.heading}
        highlightWord={ExplorationSec.highlightWord}
        badge_color_r="accent"
        imageSrc={ExplorationSec.imageSrc}
        vissionMission={ExplorationSec.vissionMission}
      />
      <PilgrimStandard />
      <AppDownloadBanner
        translationKey="aboutDownloadSec"
        titlePrefix={downloadSectionData.titlePrefix}
        titleHighlight={downloadSectionData.titleHighlight}
        titleSuffix={downloadSectionData.titleSuffix}
        iosLink={downloadSectionData.iosLink}
        androidLink={downloadSectionData.androidLink}
        mockupImageSrc={downloadSectionData.mockupImageSrc}
        bgImage={appDBgImage}
        rightComponent={<BookingForm titleClass="d-none" />}
      />
    </main>
  );
}