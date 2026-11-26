"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SwiperSliderComp } from "../ui/SwiperSlider";
import { SwiperSlide } from "swiper/react";
import { LinkPillBtn } from "../ui/Buttons";
import { ArrowRight, Quote, Star, User } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const TestimonialSec = () => {
  const { t } = useLanguage();

  const rawItems = t("testimonialSec.items");
  const testimonialsList = Array.isArray(rawItems) ? rawItems : [];

  const sliderBreakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  };

  return (
    <section className="testimonial-section section-padding bg-white">
      <Container>
        {/* Section Heading */}
        <Row className="justify-content-center mb-4 mb-md-5">
          <Col
            xs={12}
            className="d-flex flex-wrap align-items-center justify-content-center gap-3"
          >
            <h2 className="section-title text-start mb-0">
              {t("testimonialSec.heading")}{" "}
              <span className="title-highlight">
                {t("testimonialSec.highlight")}
              </span>
            </h2>
          </Col>
        </Row>

        {/* Swiper Slider */}
        <Row>
          <Col xs={12}>
            <SwiperSliderComp
              navigation={false}
              pagination={true}
              timeDelay={4000}
              spaceBetween={24}
              breakpoints={sliderBreakpoints}
              className="testimonial-swiper-wrapper pb-5"
            >
              {testimonialsList.map((item) => (
                <SwiperSlide key={item.id} className="h-auto d-flex">
                  <article className="testimonial-review-card d-grid flex-column justify-content-between bg-white rounded-4 p-3 w-100 h-100">
                    {/* Inner Gray Quote Container */}
                    <div className="testimonial-quote-box rounded-3 p-3 p-sm-4 flex-grow-1 d-flex flex-column">
                      {/* Top Header: Quote Icon + Verified Label & 5 Stars */}
                      <div className="testimonial-card-header d-flex align-items-center justify-content-between gap-2 pb-3 mb-3">
                        <div className="d-flex align-items-center gap-2">
                          <Quote
                            size={20}
                            strokeWidth={2.2}
                            className="testimonial-quote-icon flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="testimonial-badge-label fw-bold">
                            {t("testimonialSec.badgeLabel")}
                          </span>
                        </div>

                        <div
                          className="testimonial-stars d-flex align-items-center gap-1 flex-shrink-0"
                          aria-label={`${item.rating || 5} out of 5 stars`}
                        >
                          {Array.from({ length: item.rating || 5 }).map(
                            (_, index) => (
                              <Star
                                key={index}
                                size={15}
                                className="testimonial-star-icon"
                                aria-hidden="true"
                              />
                            )
                          )}
                        </div>
                      </div>

                      {/* Review Quote Text */}
                      <p className="testimonial-quote-text mb-0">
                        “{item.text}”
                      </p>
                    </div>

                    {/* Footer Client Info */}
                    <div className="testimonial-author-footer d-flex align-items-center gap-3 pt-3 px-2">
                      <div className="testimonial-avatar-circle rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                        <User
                          size={24}
                          className="testimonial-avatar-icon"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="testimonial-author-meta min-w-0">
                        <h3 className="testimonial-author-name fw-bold mb-1">
                          {item.name}
                        </h3>
                        <p className="testimonial-author-location mb-0">
                          {item.location}
                        </p>
                        <p className="testimonial-author-trip mb-0">
                          {item.trip}
                        </p>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </SwiperSliderComp>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSec;