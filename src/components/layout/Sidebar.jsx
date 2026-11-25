"use client";

import React from "react";
import PropTypes from "prop-types";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const NavSidebar = ({ setIsMenuOpen }) => {
  const { t } = useLanguage();

  const tr = (key, fallback) => {
    const val = t(`navSidebar.${key}`);
    return val && val !== `navSidebar.${key}` ? val : fallback;
  };

  const handleCloseMenu = () => {
    if (typeof setIsMenuOpen === "function") {
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "/", label: tr("home", "Home") },
    { href: "/about-us", label: tr("aboutUs", "About Us") },
    { href: "/cities", label: tr("cities", "Cities") },
    { href: "/airport", label: tr("airport", "Airport") },
    { href: "/cabs", label: tr("cabs", "Cabs") },
    { href: "/railway-station", label: tr("railwayStation", "Railway Station") },
    { href: "/bus", label: tr("bus", "Bus") },
    { href: "/contact-us", label: tr("contactUs", "Contact Us") },
  ];

  return (
    <div className="container h-100 trinery-bg">
      <nav className="mobile-nav py-2">
        <Link
          href="/"
          onClick={handleCloseMenu}
          className="d-flex mb-3 align-items-center text-decoration-none"
        >
          <div className="logo-text">
            <img
              src="/images/footer-logo.svg"
              alt="Prachi Travels Logo"
              className="me-2 brand-logo"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="mobile-link"
            onClick={handleCloseMenu}
          >
            {item.label}
          </Link>
        ))}

        {/* Contact Details Block */}
        <div className="mobile-actions text-light mt-4">
          <div>
            <h3 className="footer-heading text-light poppins">
              {tr("contactUs", "Contact Us")}
            </h3>
            <ul className="list-unstyled footer-contact">
              <li className="d-flex mb-3">
                <MapPin size={18} className="me-2 mt-1 icon flex-shrink-0" />
                <div className="d-flex w-100">
                  <span className="poppins small-base">
                    {tr("address", "Coming soon...")}
                  </span>
                </div>
              </li>
              <li className="d-flex mb-3 poppins">
                <Phone
                  size={18}
                  className="me-2 mt-1 icon text-light flex-shrink-0"
                />
                <div>
                  <a
                    href="tel:+911234567890"
                    className="text-decoration-none small-base d-block"
                  >
                    +91 12345 67890
                  </a>
                </div>
              </li>
              <li className="d-flex gap-1 poppins">
                <div>
                  <a
                    href="mailto:contact@prachiTravels.com"
                    className="text-decoration-none small-base"
                  >
                    contact@prachiTravels.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

NavSidebar.propTypes = {
  setIsMenuOpen: PropTypes.func,
};

export default NavSidebar;