"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";

import "../../styles/Footer.scss";
import "../../styles/main.scss";

import facebook from "../../../public/images/facebook-logo.svg";
import insta from "../../../public/images/instagram-logo.svg";
import youtube from "../../../public/images/youtube-logo.svg";
import xLogo from "../../../public/images/x-logo.svg";
import paymentLogos from "../../../public/images/footer_payment_icon.png";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="position-relative text-white">
      <div className="custom-footer">
        {/* Main Footer Inner Grid Content */}
        <div className="container pt-4 pt-sm-5 pb-2 pb-sm-4 pb-md-5">
          <Row className="gy-4">
            {/* 1. About Module Frame Segment */}
            <Col md={6} lg={4}>
              <div className="d-flex align-items-center mb-4">
                <div className="">
                  {/* <span>ॐ</span> */}
                  <img
                    src={"/images/footer-logo.svg"}
                    alt="Logo"
                    className="me-1 brand-logo"
                  />
                </div>
              </div>
              <p className="footer-text d-none d-md-block p-0 pe-sm-3">
                {t("footer.description")}
              </p>

              {/* Social Link Wrappers */}
              <div className="d-flex gap-2 mt-3 mb-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Image
                    src={facebook}
                    alt="Facebook"
                    width={18}
                    height={18}
                    className="img-fluid"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Image
                    src={xLogo}
                    alt="X"
                    width={18}
                    height={18}
                    className="img-fluid"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Image
                    src={insta}
                    alt="Instagram"
                    width={18}
                    height={18}
                    className="img-fluid"
                  />
                </a>
                <a href="#" className="social-icon">
                  <Image
                    src={youtube}
                    alt="Youtube"
                    width={18}
                    height={18}
                    className="img-fluid"
                  />
                </a>
              </div>
            </Col>

            {/* 2. Navlinks Column Layer Map */}
            <Col md={6} lg={2} className="d-none d-md-block">
              <h3 className="footer-heading">{t("footer.quickLinksTitle")}</h3>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <Link
                    href="/"
                    target="_blank"
                    className="footer-link d-block mb-1 py-1"
                  >
                    {t("footer.links.home")}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link
                    href="/about-us"
                    target="_blank"
                    className="footer-link d-block mb-1 py-1"
                  >
                    {t("footer.links.about")}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link
                    href="/contact-us"
                    target="_blank"
                    className="footer-link d-block mb-1 py-1"
                  >
                    {t("footer.links.contact")}
                  </Link>{" "}
                </li>
              </ul>
            </Col>

            {/* 3. Operational B2B Core Services Render Module */}
            <Col md={6} lg={2}>
              <h3 className="footer-heading">
                {t("footer.otherServicesTitle")}
              </h3>
              <ul className="services-link list-unstyled">
                {/* <li className='mb-2 p-0'>
                                <Link href="/Cab-packages" target='_blank' className='footer-link d-block mb-1 py-1'>Cab Packages</Link>
                            </li> */}
                <li className="mb-2 p-0">
                  <Link
                    href="/cities"
                    target="_blank"
                    className="footer-link d-block mb-1 py-1"
                  >
                    {t("footer.links.cities")}
                  </Link>
                </li>
                <li className="mb-2 p-0">
                  <Link
                    href="/airport"
                    target="_blank"
                    className="footer-link d-block mb-1 py-1"
                  >
                    {t("footer.links.airport")}
                  </Link>
                </li>
                <li className="mb-2 p-0">
                  <Link
                    href="/cabs"
                    target="_blank"
                    className="footer-link d-block mb-1 py-1"
                  >
                    {t("footer.links.cabs")}
                  </Link>
                </li>
                <li className="mb-2 p-0">
                  <Link
                    href="/railway-station"
                    target="_blank"
                    className="footer-link d-block mb-1 py-1"
                  >
                    {t("footer.links.railway")}
                  </Link>
                </li>
                <li className="mb-2 p-0">
                  <Link
                    href="/bus"
                    target="_blank"
                    className="footer-link d-block mb-1 py-1"
                  >
                    {t("footer.links.bus")}
                  </Link>
                </li>
              </ul>
            </Col>

            {/* 4. Local Contact Mapping Block */}
            <Col md={6} lg={4} className="">
              <div className="d-none d-md-block">
                <h3 className="footer-heading">
                  {t("footer.contactInfoTitle")}
                </h3>
                <ul className="list-unstyled footer-contact">
                  <li className="d-flex mb-3">
                    <div className="">
                      <MapPin
                        size={18}
                        className="me-2 mt-1 icon flex-shrink-0"
                      />
                    </div>
                    <Link
                      href="https://maps.app.goo.gl/dr8vJdnkumcJhJ5D7"
                      target="_blank"
                      className="footer-link d-block"
                    >
                      <span>{t("footer.address")}</span>
                    </Link>
                  </li>
                  <li className="d-flex mb-3">
                    <Phone size={18} className="me-2 mt-1 icon flex-shrink-0" />
                    <div>
                      <a
                        href="tel:+911234567890"
                        className="footer-link d-block"
                      >
                        +91 12345 67890
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <Mail size={18} className="me-2 mt-1 icon flex-shrink-0" />
                    <div className="d-flex flex-column">
                      <a
                        href="mailto:contact@prachiTravels.com"
                        className="footer-link"
                      >
                        contact@prachiTravels.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        {/* Bottom Copyright Status Panel */}
        <div className="footer-bottom">
          <div className="container py-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <p className="mb-0 fw-medium text-light text-center text-lg-start">
              © {currentYear} {t("footer.copyright")}{" "}
              <span className="text-light fw-bold">
                {t("footer.companyName")}
              </span>
            </p>
            <div className="d-flex gap-3">
              <p className="text-light m-0 text-center text-lg-end">
                {t("footer.developedBy")}&nbsp;
                <a
                  href="https://webique.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-webname fw-bold"
                >
                  Webique Technology
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;