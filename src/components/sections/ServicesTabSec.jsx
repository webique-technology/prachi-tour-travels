"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CabsData } from "@/lib/data";
import { useLanguage } from "../../context/LanguageContext";

const ServiceTabsSection = ({
  title,
  highlightWord,
  desc,
  sliderBtns = false,
  page = "home",
  translationKey,
}) => {
  const { t, pick } = useLanguage();

  // Default to "serviceTabsSec" only on home if no custom translationKey is provided
  const activeKey =
    translationKey !== undefined
      ? translationKey
      : page === "home"
        ? "serviceTabsSec"
        : null;

  const resolveSectionText = (field, fallbackProp) => {
    if (activeKey) {
      const val = t(`${activeKey}.${field}`);
      if (val !== undefined && val !== `${activeKey}.${field}`) {
        return val;
      }
    }
    return fallbackProp ? pick(fallbackProp) : "";
  };

  // Shared UI labels always pull from serviceTabsSec
  const resolveSharedText = (key, fallback) => {
    const val = t(`serviceTabsSec.${key}`);
    return val && val !== `serviceTabsSec.${key}` ? val : fallback;
  };

  const tabLabelMap = {
    Sedan: resolveSharedText("tabs.sedan", "Sedan"),
    SUV: resolveSharedText("tabs.suv", "SUV"),
    "Tempo Traveller": resolveSharedText(
      "tabs.tempoTraveller",
      "Tempo Traveller",
    ),
    Bus: resolveSharedText("tabs.bus", "Bus"),
  };

  const tabConfigurations = {
    cabs: ["Sedan", "SUV"],
    bus: ["Tempo Traveller", "Bus"],
    home: ["Sedan", "SUV", "Tempo Traveller", "Bus"],
  };

  const tabsList = tabConfigurations[page] || tabConfigurations.home;
  const [activeTab, setActiveTab] = useState(tabsList[0]);

  const serializedTabs = JSON.stringify(tabsList);

  useEffect(() => {
    const parsedTabs = JSON.parse(serializedTabs);
    if (parsedTabs.length > 0) {
      setActiveTab(parsedTabs[0]);
    }
  }, [serializedTabs]);

  const filteredCabs = CabsData.filter((cab) => {
    if (activeTab === "All Tabs") return true;
    const rawCategory =
      typeof cab.category === "object" && cab.category !== null
        ? cab.category.en || ""
        : cab.category || "";
    return rawCategory.toLowerCase() === activeTab.toLowerCase();
  });

  const displayTitle = resolveSectionText("title", title);
  const displayHighlight = resolveSectionText("highlightWord", highlightWord);
  const displayDesc = resolveSectionText("desc", desc);
  const viewDetailsLabel = resolveSharedText("viewDetailsBtn", "View Details");
  const emptyMessageLabel = resolveSharedText(
    "emptyMessage",
    "No fleet available under this specific category selection.",
  );

  return (
    <section className="service-tabs-section section-padding position-relative">
      <Container>
        {/* Title & Optional Description Block */}
        <div className="text-center mb-4">
          <div className="h-100">
            <h2 className="section-title text-dark">
              {displayTitle}{" "}
              {displayHighlight && (
                <span className="title-highlight">{displayHighlight}</span>
              )}
            </h2>
            {displayDesc && (
              <p
                className="text-muted mx-auto mt-2"
                style={{ maxWidth: "680px" }}
              >
                {displayDesc}
              </p>
            )}
          </div>
        </div>

        {/* Dynamic Category Tab Filter Switcher */}
        <div className="tabs-nav-container d-flex justify-content-center mb-4 mb-md-5">
          <div className="tabs-pill d-flex gap-1 gap-sm-2 align-items-center justify-content-center p-2 rounded-3">
            {tabsList.map((tabKey) => (
              <button
                key={tabKey}
                type="button"
                className={`tab-nav-btn border-0 px-3 px-sm-4 py-2 py-sm-2 fw-semibold transition-all ${
                  activeTab === tabKey ? "active shadow-sm" : ""
                }`}
                onClick={() => setActiveTab(tabKey)}
              >
                {tabLabelMap[tabKey] || tabKey}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Window Display */}
        <div className="tab-view-window position-relative">
          {sliderBtns === true && (
            <>
              <button
                type="button"
                className="slider-arrow arrow-left shadow-sm d-flex align-items-center justify-content-center position-absolute rounded-circle bg-white border"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="slider-arrow arrow-right shadow-sm d-flex align-items-center justify-content-center position-absolute rounded-circle bg-white border"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div className="tab-content-wrapper">
            <Row className="g-4">
              {filteredCabs.length ? (
                filteredCabs.map((cab) => {
                  const rawCategory =
                    typeof cab.category === "object" && cab.category !== null
                      ? cab.category.en || ""
                      : cab.category || "";
                  const currentCategory = rawCategory.toLowerCase();
                  const pathPrefix =
                    currentCategory === "bus" ||
                    currentCategory === "tempo traveller"
                      ? "/bus"
                      : "/cabs";

                  const cabName = pick(cab.name);

                  return (
                    <Col
                      key={cab.id}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      className="d-flex"
                    >
                      <div className="h-100 w-100">
                        <Card className="cab-display-card h-100 text-center rounded-4 w-100 shadow-sm border d-flex flex-column justify-content-between p-2 p-sm-3">
                          <div className="card-image-box d-flex align-items-center justify-content-center">
                            <img
                              src={cab.imageSrc}
                              alt={cabName || "Vehicle Image"}
                              className="img-fluid vehicle-img"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  "https://placehold.co/240x160?text=Vehicle+Image";
                              }}
                            />
                          </div>

                          <Card.Body className="p-2 d-grid align-items-center">
                            <Card.Title className="vehicle-name fw-semibold fs-5 mb-3 text-dark">
                              {cabName}
                            </Card.Title>

                            <Link
                              href={`${pathPrefix}/${cab.slug}`}
                              className="w-100"
                            >
                              <Button className="btn-square font-base accent py-1 w-100">
                                {viewDetailsLabel}
                              </Button>
                            </Link>
                          </Card.Body>
                        </Card>
                      </div>
                    </Col>
                  );
                })
              ) : (
                <Col xs={12} className="text-center py-5">
                  <p className="text-muted">{emptyMessageLabel}</p>
                </Col>
              )}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

ServiceTabsSection.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  highlightWord: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  desc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  sliderBtns: PropTypes.bool,
  page: PropTypes.oneOf(["home", "cabs", "bus"]),
  translationKey: PropTypes.string,
};

export { ServiceTabsSection };
