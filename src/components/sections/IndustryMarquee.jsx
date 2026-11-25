"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerLinksData, routePillGridData } from "@/lib/cityData";
import { useLanguage } from "../../context/LanguageContext";
import "../../styles/CommonSec.scss";
import "../../styles/main.scss";
import { Col, Row } from "react-bootstrap";

export const DynamicFooterLinks = () => {
  const pathname = usePathname();
  const { t, pick } = useLanguage();

  // Hide background light modifier on specific sub-routes
  const hideBgLight = pathname === "/cabs" || pathname === "/bus";

  return (
    <section className={`section-padding ${hideBgLight ? "" : "bg-light"}`}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4 mb-md-5">
          <h2 className="section-title text-dark">
            {t("footerLinksSec.heading")}{" "}
            <span className="title-highlight">
              {t("footerLinksSec.highlight")}
            </span>
          </h2>
          <p className="text-muted">{t("footerLinksSec.description")}</p>
        </div>

        {/* Links Grid */}
        <div className="route-links">
          {footerLinksData.map((section) => (
            <div key={section.id || pick(section.title)}>
              {/* Column Heading */}
              <h3
                className="fs-6 fw-bold text-uppercase mb-3 tracking-wide text-dark"
                style={{ letterSpacing: "0.5px" }}
              >
                {pick(section.title || section.category)}
              </h3>

              {/* Links List */}
              <ul className="list-unstyled d-flex flex-column gap-2 m-0 p-0">
                {(section.links || []).map((link, idx) => (
                  <li key={idx} className="d-flex align-items-center gap-2">
                    <img
                      src="/images/hand-right.png"
                      className="icon"
                      alt="pointer icon"
                      style={{
                        width: "16px",
                        height: "16px",
                        objectFit: "contain",
                      }}
                    />
                    <Link
                      href={link.href}
                      className={`text-decoration-none transition-all link-text ${
                        link.isHighlighted
                          ? "text-warning fw-semibold"
                          : "text-dark opacity-75 hover-opacity-100"
                      }`}
                      style={{
                        fontSize: "0.875rem",
                        transition: "opacity 0.2s, color 0.2s",
                      }}
                    >
                      {pick(link.name || link.text)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const RoutePillGrid = () => {
  const { t, pick } = useLanguage();

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">
          {t("footerLinksSec.pillGridHeading")}{" "}
          <span className="text-warning">
            {t("footerLinksSec.pillGridHighlight")}
          </span>
        </h2>
        <Row className="row g-2">
          {routePillGridData.map((route, catIdx) => (
            <Col xs={6} sm={4} md={3} lg={2} key={catIdx}>
              <Link
                href={route.href}
                className="btn btn-outline-secondary btn-sm w-100 py-2 text-truncate rounded-3 bg-white border-0 shadow-sm text-dark hover-shadow"
                style={{ fontSize: "10px", fontWeight: "500" }}
              >
                {pick(route.name)}
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};