"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import * as LucideIcons from "lucide-react";
import { AnimationSecComponent } from "../ui/AnimationSecComponent";
import { useLanguage } from "../../context/LanguageContext";

const WhyChooseUs = ({ title, features, highlightWord }) => {
  const { t } = useLanguage("whyChooseUs");

  const translatedTitle = t("whyChooseUs.title");
  const translatedHighlight = t("whyChooseUs.highlightWord");
  const translatedFeatures = t("whyChooseUs.features");

  // Use translated data from context, falling back to passed props if needed
  const displayTitle =
    translatedTitle && translatedTitle !== "whyChooseUs.title"
      ? translatedTitle
      : title;

  const displayHighlight =
    translatedHighlight && translatedHighlight !== "whyChooseUs.highlightWord"
      ? translatedHighlight
      : highlightWord;

  const displayFeatures = Array.isArray(translatedFeatures)
    ? translatedFeatures
    : features || [];

  return (
    <section className="why-choose-us-section section-padding bg-white">
      <Container>
        {/* Section Header */}
        <Row className="justify-content-center mb-4 text-center">
          <Col md={8}>
            {/* <AnimationSecComponent> */}
            <div className="title-wrapper d-inline-block position-relative">
              <h2 className="section-title px-3">
                {displayTitle}{" "}
                {displayHighlight && (
                  <span className="title-highlight">{displayHighlight}</span>
                )}
              </h2>
              {/* Optional: Add custom decorative absolute elements for the handwritten accent lines if needed */}
              <span className="accent-underline"></span>
            </div>
            {/* </AnimationSecComponent> */}
          </Col>
        </Row>

        {/* Features Grid Layout */}
        <Row className="g-4 features-grid justify-content-center">
          {displayFeatures?.map((item, idx) => {
            // Dynamically resolve the Lucide icon component
            const IconComponent =
              LucideIcons[item.iconName] || LucideIcons.HelpCircle;

            return (
              <Col xl={3} lg={3} md={6} sm={6} xs={12} key={item.id || idx}>
                <div
                  // distance={200}
                  // duration={0.7}
                  className="h-100"
                >
                  <div className="feature-box bg-white text-center rounded-5 p-3 p-sm-4 position-relative">
                    {/* Floating Top Rounded Icon Circle */}
                    <div className="icon-badge position-absolute top-0 start-50 translate-middle d-flex align-items-center justify-content-center shadow-sm">
                      <IconComponent size={28} className="" strokeWidth={1.5} />
                    </div>

                    {/* Feature Card Text Meta */}
                    <div className="feature-body mt-4">
                      <h4 className="feature-heading fw-semibold fw-sm-bold mb-3">
                        {item.title}
                      </h4>
                      <p className="feature-description text-muted small mb-0">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

WhyChooseUs.propTypes = {
  title: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      iconName: PropTypes.string.isRequired, // Exact string key name from Lucide (e.g., 'UserCheck')
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default WhyChooseUs;