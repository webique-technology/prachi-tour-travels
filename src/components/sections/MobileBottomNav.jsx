"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import "../../styles/CommonSec.scss";

export default function MobileBottomNav() {
  const { pick } = useLanguage();

  const serviceLinks = [
    {
      name: {
        en: "Cabs",
        hi: "कैब्स",
        mr: "कॅब्स",
      },
      link: "/cabs",
      itemClass: "is-cars",
    },
    {
      name: {
        en: "Cities",
        hi: "शहर",
        mr: "शहरे",
      },
      link: "/cities",
      itemClass: "is-cities",
    },
    {
      name: {
        en: "Airport",
        hi: "एयरपोर्ट",
        mr: "विमानतळ",
      },
      link: "/airport",
      itemClass: "is-airport",
    },
    {
      name: {
        en: "Railways",
        hi: "रेलवे",
        mr: "रेल्वे",
      },
      link: "/railway-station",
      itemClass: "is-railways",
    },
  ];

  return (
    <nav
      className="mobile-bottom-nav d-sm-none"
      aria-label="Mobile Quick Navigation"
    >
      {serviceLinks.map((item) => (
        <Link
          href={item.link}
          key={item.link}
          className={`mobile-bottom-nav-item ${item.itemClass}`}
        >
          <span>{pick(item.name)}</span>
        </Link>
      ))}
    </nav>
  );
}