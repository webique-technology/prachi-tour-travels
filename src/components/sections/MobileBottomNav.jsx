"use client";

import React from "react";
import Link from "next/link";
import { Car, MapPin, Plane, TrainFront } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import "../../styles/CommonSec.scss";

export default function MobileBottomNav() {
  const { t } = useLanguage();

  const tr = (key, fallback) => {
    const val = t(`mobileBottomNav.${key}`);
    return val && val !== `mobileBottomNav.${key}` ? val : fallback;
  };

  const serviceLinks = [
    {
      name: tr("cabs", "Cabs"),
      link: "/cabs",
      icon: Car,
      itemClass: "is-cars",
    },
    {
      name: tr("cities", "Cities"),
      link: "/cities",
      icon: MapPin,
      itemClass: "is-cities",
    },
    {
      name: tr("airport", "Airport"),
      link: "/airport",
      icon: Plane,
      itemClass: "is-airport",
    },
    {
      name: tr("railways", "Railways"),
      link: "/railway-station",
      icon: TrainFront,
      itemClass: "is-railways",
    },
  ];

  return (
    <nav
      className="mobile-bottom-nav d-sm-none"
      aria-label="Mobile Quick Navigation"
    >
      {serviceLinks.map((item) => {
        const IconComponent = item.icon;
        return (
          <Link
            href={item.link}
            key={item.link}
            className={`mobile-bottom-nav-item ${item.itemClass}`}
          >
            <IconComponent size={18} aria-hidden="true" />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}