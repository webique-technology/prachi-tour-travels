"use client";

import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { AnimationSecComponent } from "../ui/AnimationSecComponent";
import { useLanguage } from "../../context/LanguageContext";

const ServicesGridCardSection = ({ data = [], heading, btnText }) => {
  const { t, pick } = useLanguage();

  const translatedHeading = t("servicesGridSec.heading");
  const displayHeading = heading
    ? pick(heading)
    : translatedHeading !== "servicesGridSec.heading"
      ? translatedHeading
      : "Prachi Tours & Travels Cab / Taxi Rental Services";

  const translatedBtn = t("servicesGridSec.viewDetailsBtn");
  const displayBtnText = btnText
    ? pick(btnText)
    : translatedBtn !== "servicesGridSec.viewDetailsBtn"
      ? translatedBtn
      : "View Tour Details";

  return (
    <section className="cab-services-section py-5 bg-white">
      <Container>
        {/* Component Header Block */}
        <div className="text-center mb-5">
          <h2 className="main-section-heading fw-bold text-dark">
            {displayHeading}
          </h2>
          <div className="heading-underline"></div>
        </div>

        {/* Dynamic Loops mapping exactly 4 cards per row on large devices */}
        <Row className="g-4">
          {data?.map((tour, index) => {
            const cardTitle = pick(tour.title);
            const cardHref =
              tour.redirectUrl || (tour.slug ? `/cities/${tour.slug}` : "#");

            return (
              <Col lg={3} md={6} xs={6} key={tour.id || index}>
                <div
                  // distance={index * 5}
                  // duration={0.5}
                  className="h-100"
                >
                  <div className="tour-service-card rounded h-100 d-flex flex-column text-center bg-white">
                    {/* Image Wrap */}
                    <Link
                      href={cardHref}
                      className="card-image-link overflow-hidden"
                    >
                      <img
                        src={tour.image}
                        alt={cardTitle || "Tour Package"}
                        className="tour-card-img img-fluid"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/300x200?text=Nashik+Tour";
                        }}
                      />
                    </Link>

                    {/* Info & Title Container */}
                    <div className="card-body-content p-3 d-flex flex-column flex-grow-1 justify-content-between">
                      <h4 className="tour-card-title fw-semibold mb-2 mb-sm-3">
                        <Link
                          href={cardHref}
                          className="text-decoration-none title-anchor"
                        >
                          {cardTitle}
                        </Link>
                      </h4>

                      {/* Dynamic Action Redirect Link Block */}
                      <div className="mt-auto">
                        <Link
                          href={cardHref}
                          className="btn-square primary text-uppercase text-decoration-none d-inline-block w-100"
                        >
                          {displayBtnText}
                        </Link>
                      </div>
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

ServicesGridCardSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      slug: PropTypes.string,
      redirectUrl: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        .isRequired,
    }),
  ).isRequired,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  btnText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ServicesGridCardSection;
