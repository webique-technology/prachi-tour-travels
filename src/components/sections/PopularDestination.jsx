"use client";

import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { CabServicesCityToCity } from "@/lib/data";
import "../../styles/PopularDestinayion.scss";
import { DestinationCard } from "../ui/cards";
import { useLanguage } from "../../context/LanguageContext";

const PopularDestinations = ({
  title = "Most Popular",
  footerText = "These popular cities have a lot to offer!",
  buttonText = "View All Cities",
  highlightWord = "City",
}) => {
  const { t, pick } = useLanguage();

  const tr = (key, fallbackProp) => {
    const val = t(`popularDestinationsSec.${key}`);
    if (val && val !== `popularDestinationsSec.${key}`) {
      return val;
    }
    return fallbackProp ? pick(fallbackProp) : "";
  };

  // Safely resolves { en: [...], hi: [...], mr: [...] }, [{ en, hi, mr }], { en: "..." }, or plain strings
  const resolveDescription = (dest) => {
    const rawContent = dest.longDistance?.content;
    const pickedContent = pick(rawContent);

    if (Array.isArray(pickedContent)) {
      return pickedContent.map((item) => pick(item)).filter(Boolean);
    }
    if (typeof pickedContent === "string" && pickedContent.trim()) {
      return [pickedContent];
    }

    const pickedIntro = pick(dest.intro);
    return pickedIntro ? [pickedIntro] : [];
  };

  const displayTitle = tr("title", title);
  const displayHighlight = tr("highlightWord", highlightWord);
  const displayFooterText = tr("footerText", footerText);
  const displayButtonText = tr("buttonText", buttonText);

  return (
    <section className="popular-destinations-section section-padding">
      <Container>
        {/* Main Section Header */}
        <Row className="justify-content-center mb-4 text-center">
          <Col md={8}>
            <h2 className="section-title">
              {displayTitle}{" "}
              {displayHighlight && (
                <span className="title-highlight">{displayHighlight}</span>
              )}
            </h2>
          </Col>
        </Row>

        {/* Destination Grid */}
        <Row className="g-4 mb-4 mb-md-5">
          {CabServicesCityToCity.filter((dest) => dest.popularCity === true)
            .slice(0, 8)
            .map((dest) => {
              const cardTitle = pick(dest.popularCityTitle) || pick(dest.title);
              const cardDescription = resolveDescription(dest);

              return (
                <Col lg={3} md={6} xs={6} key={dest.id}>
                  <div className="h-100">
                    <DestinationCard
                      image={dest.image}
                      title={cardTitle}
                      slugPath={`/cities/${dest.slug}`}
                      description={cardDescription}
                    />
                  </div>
                </Col>
              );
            })}
        </Row>

        {/* Section Footer Actions */}
        <Row className="justify-content-center align-items-center text-center mt-4">
          <Col>
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
              {/* <span className="footer-promo-text text-muted">
                {displayFooterText}
              </span> */}
              <Link
                href="/cities"
                className="pill-btn accent d-flex align-items-center gap-2 px-4 py-2 border-0"
              >
                {displayButtonText} <span>&rarr;</span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

PopularDestinations.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  footerText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  highlightWord: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default PopularDestinations;
