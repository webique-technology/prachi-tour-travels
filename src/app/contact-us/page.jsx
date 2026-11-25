import ContactPageComp from "./ContactPage";

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title:
      "Contact Us 24/7 available | Leading Cab / Taxi Rental Service Provider in Nashik",
    description:
      "Contact Prachi Tours & Travels Airport Cab / Taxi, available 24/7 for Cab / Taxi Rental Services in Nashik, Mumbai, and throughout Maharashtra.",
    image: "/images/about-banner.jpg",
  },
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <ContactPageComp />
    </>
  );
}
