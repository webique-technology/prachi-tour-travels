import { Inter, Poppins, Roboto } from "next/font/google";
import "../styles/variable.scss";
import "../styles/main.scss";
// src/app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css"; // Your custom global styles
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  DynamicFooterLinks,
  IndustryMarquee,
  RoutePillGrid,
} from "@/components/sections/IndustryMarquee";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title:
    "Prachi Tours & Travels Airport Cab / Taxis | Reliable Cab / Taxi & Car Rentals",
  description:
    "Experience seamless travel with Prachi Tours & Travels Airport Cab / Taxis. Over 10 years of trusted Cab / Taxi services across Nashik, Mumbai, Pune, and Shirdi. Book affordable outstation Cab / Taxis, airport transfers, and local sightseeing packages 24/7.",
  keywords: [
    "Car Rentals ",
    "Taxi Service ",
    "Car Hire",
    "One Way Cab / Taxi ",
    "One Side Taxi",
    "AC Taxi",
    "Outstation Cab / Taxi",
    "Outstation Taxi",
    // ─── 1. BRAND & COMMERCIAL HIGH-INTENT SEARCHES ─────────────────────────
    "Nashik Mumbai Pune Shirdi Airport Cab / Taxis",
    "Nashik Mumbai Cab / Taxis",
    "Cab / Taxi service near me",
    "taxi service near me",
    "best outstation Cab / Taxi service in Nashik",
    "car rental service in Maharashtra",
    "budget Cab / Taxi booking Nashik",
    "one way Cab / Taxi booking Maharashtra",
    "round trip taxi service Nashik",
    "24x7 Cab / Taxi service Nashik Mumbai",
    "Innova Crysta on rent Nashik",
    "Swift Dzire Cab / Taxi rental",
    "Tempo Traveller on rent Nashik",

    // ─── 2. NASHIK HUB ROUTES (TOP SEARCHED) ────────────────────────────────
    "Nashik to Mumbai Cab / Taxi",
    "Nashik to Mumbai",
    "Nashik to Mumbai Taxi Service",
    "Nashik to Mumbai One Way Cab / Taxi",
    "Nashik to Mumbai Airport Cab / Taxi",
    "Nashik to CSMIA Airport Drop",
    "Nashik Mumbai Cab / Taxi Fare",
    "Nashik to Pune",
    "Nashik to Pune Cab / Taxi",
    "Nashik to Pune Taxi Service",
    "Nashik to Pune One Way Cab / Taxi",
    "Nashik to Pune Airport Drop",
    "Nashik to Shirdi",
    "Nashik to Shirdi Cab / Taxi",
    "Nashik to Shirdi Taxi Service",
    "Nashik to Shirdi Sai Baba Temple Cab / Taxi",
    "Nashik to Chhatrapati Sambhajinagar",
    "Nashik to Chhatrapati Sambhajinagar Cab / Taxi",
    "Nashik to Samruddhi Mahamarg Cab / Taxi",
    "Nashik to Trimbakeshwar",
    "Nashik to Trimbakeshwar Cab / Taxi Service",
    "Nashik to Shani Shingnapur",
    "Nashik to Shani Shingnapur Cab / Taxi",
    "Nashik to Bhimashankar",
    "Nashik to Bhimashankar Darshan Cab / Taxi",
    "Nashik to Igatpuri",
    "Nashik to Igatpuri Cab / Taxi",

    // ─── 3. MUMBAI HUB ROUTES ────────────────────────────────────────────────
    "Mumbai to Nashik Cab / Taxi",
    "Mumbai to Nashik",
    "Mumbai to Nashik Taxi Service",
    "Mumbai Airport to Nashik Cab / Taxi",
    "Mumbai to Nashik One Way Cab / Taxi",
    "Mumbai to Pune",
    "Mumbai to Pune Cab / Taxi",
    "Mumbai to Pune Expressway Cab / Taxi",
    "Mumbai to Shirdi Cab / Taxi",
    "Mumbai Airport to Shirdi Cab / Taxi",
    "Mumbai to Shirdi One Way Drop",
    "Mumbai to Chhatrapati Sambhajinagar Cab / Taxi",
    "Mumbai to Trimbakeshwar Darshan Cab / Taxi",
    "Mumbai to Lonavala Cab / Taxi",
    "Mumbai to Mahabaleshwar Cab / Taxi",

    // ─── 4. PUNE HUB ROUTES ──────────────────────────────────────────────────
    "Pune to Nashik Cab / Taxi",
    "Pune to Nashik Taxi Service",
    "Pune to Nashik One Way Drop",
    "Pune to Mumbai Cab / Taxi",
    "Pune to Mumbai Airport Cab / Taxi",
    "Pune to Shirdi Cab / Taxi",
    "Pune to Shirdi Sai Baba Mandir Cab / Taxi",
    "Pune to Chhatrapati Sambhajinagar Cab / Taxi",
    "Pune to Goa Outstation Cab / Taxi",
    "Pune to Mahabaleshwar Holiday Cab / Taxi",
    "Pune to Trimbakeshwar Cab / Taxi",

    // ─── 5. SHIRDI HUB ROUTES (PILGRIMAGE & TRANSIT) ─────────────────────────
    "Shirdi to Nashik Cab / Taxi",
    "Shirdi to Mumbai Cab / Taxi",
    "Shirdi to Mumbai Airport Drop",
    "Shirdi to Pune Cab / Taxi",
    "Shirdi to Pune Airport Taxi",
    "Shirdi to Chhatrapati Sambhajinagar Cab / Taxi",
    "Shirdi to Shani Shingnapur Cab / Taxi",
    "Shirdi to Kopargaon Railway Station Cab / Taxi",
    "Shirdi to Manmad Junction Cab / Taxi",
    "Shirdi Airport Taxi Service",

    // ─── 6. CHHATRAPATI SAMBHAJINAGAR ROUTES ───────────────────
    "Chhatrapati Sambhajinagar to Nashik Cab / Taxi",
    "Chhatrapati Sambhajinagar to Mumbai Cab / Taxi",
    "Chhatrapati Sambhajinagar to Pune Cab / Taxi",
    "Chhatrapati Sambhajinagar to Shirdi Cab / Taxi",
    "Chh Sambhajinagar to Mumbai Cab / Taxi",
    "Ajanta Ellora Caves Tour Cab / Taxi Package",
    "Verul Ellora Caves Sightseeing Cab / Taxi",
    "Chh. Sambhajinagar to Trimbakeshwar Darshan",
    "Chh. Sambhajinagar to Shani Shingnapur",
    "Chh. Sambhajinagar to Nagpur",
    "Chh. Sambhajinagar to Mumbai",
    "Chh. Sambhajinagar to Pune",
    "Chh. Sambhajinagar to Verul",
    "Chh. Sambhajinagar to Jalna",

    // ─── 7. AIRPORT, LOCAL & PILGRIMAGE SPECIAL SEARCHES ─────────────────────
    "Mumbai Airport pickup and drop Cab / Taxi / taxi service",
    "Pune Airport Cab / Taxi transfers / taxi service",
    "Shirdi Airport pickup drop / taxi service",
    "Nashik Airport taxi service / taxi service",
    "airport Cab / Taxi transfers Maharashtra / taxi service",
    "local sightseeing tours Nashik / taxi service",
    "Panchavati Nashik local Cab / Taxi / taxi service",
    "Trimbakeshwar Jyotirlinga Cab / Taxi booking / taxi service",
    "Maharashtra Jyotirlinga tour Cab / Taxi package / taxi service",
    "Samruddhi Expressway Cab / Taxi service / taxi service",
  ],
  alternates: {
    canonical: "https://nashikmumbaicabs.com", // Replace with your actual domain
  },
  openGraph: {
    title:
      "Prachi Tours & Travels Airport Cabs / Taxi | Reliable Cabs / Taxi & Car Rentals",
    description:
      "Book affordable and comfortable Cabs / Taxi services between Nashik, Mumbai, Pune, and Shirdi. Enjoy 24/7 airport transfers, outstation drops, and local sightseeing tours.",
    url: "https://nashikmumbaicabs.com", // Replace with your actual domain
    siteName: "Prachi Tours & Travels Airport Cabs / Taxi",
    images: [
      {
        url: "https://nashikmumbaicabs.com/images/og-banner.jpg", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "Prachi Tours & Travels Airport Cabs - Premium Car Rental Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Prachi Tours & Travels Airport Cabs / Taxi | Reliable Cab / Taxi & Car Rentals",
    description:
      "Affordable, reliable, and comfortable cab / Taxi services across Maharashtra. Available 24/7.",
    images: ["https://nashikmumbaicabs.com/images/og-banner.jpg"], // Replace with your actual banner path
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${roboto.variable}`}
    >
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <DynamicFooterLinks />
          {/* <IndustryMarquee /> */}
          <Footer />
          <a
            href="https://wa.me/911234567890?text=Hello%20I%20want%20to%20know%20more"
            target="_blank"
            className="whatsapp-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </a>
        </LanguageProvider>
      </body>
    </html>
  );
}
