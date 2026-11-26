"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { Star, MapPin, Bookmark } from "lucide-react";
import "../../styles/CommonSec.scss";
import { AnimationSecComponent } from "./AnimationSecComponent";
import { useLanguage } from "@/context/LanguageContext";

const DestinationCard = ({
  image,
  count,
  title,
  slugPath,
  distance,
  description,
}) => {
  const { t, pick } = useLanguage();
  const [imgError, setImgError] = useState(!image);

  const safeTitle = pick(title);
  const safeDistance = pick(distance);

  const pickedDesc = pick(description);
  const safeDesc = Array.isArray(pickedDesc)
    ? pick(pickedDesc[0])
    : pickedDesc;

  const spotsLabel =
    t("destinationCard.sightseeingSpots") !==
    "destinationCard.sightseeingSpots"
      ? t("destinationCard.sightseeingSpots")
      : "Sightseeing Spots";

  const subtitleText =
    safeDistance ||
    safeDesc ||
    (count ? `${count} ${spotsLabel}` : "");

  return (
    <Link
      href={slugPath}
      target="_blank"
      rel="noopener noreferrer"
      className="destination-card-link text-decoration-none d-block h-100"
    >
      <div className="destination-card position-relative rounded-3 overflow-hidden shadow-sm h-100">
        {!imgError && image ? (
          <img
            src={image}
            alt={safeTitle || "Destination"}
            className="card-img w-100 h-100"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="card-fallback d-flex flex-column align-items-center justify-content-center w-100 h-100">
            <Mountain
              size={26}
              strokeWidth={1.8}
              className="fallback-icon mb-1"
            />
            <span className="fallback-title fw-semibold">{safeTitle}</span>
          </div>
        )}

        {/* Bottom Dark Gradient Overlay */}
        <div className="card-overlay position-absolute top-0 start-0 w-100 h-100" />

        {/* Bottom-Left Text Details */}
        <div className="card-details position-absolute bottom-0 start-0 w-100 p-3 z-1">
          <h4 className="destination-title fw-bold text-white mb-1">
            {safeTitle}
          </h4>
          {subtitleText && (
            <p className="destination-subtitle mb-0">{subtitleText}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

DestinationCard.propTypes = {
  image: PropTypes.string,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  slugPath: PropTypes.string.isRequired,
  distance: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    ),
  ]),
};

export { DestinationCard };

// trip card
const TripCard = ({ data }) => {
  const {
    id,
    isFeatured,
    image,
    title,
    rating,
    reviewsCount,
    location,
    description,
    originalPrice,
    discountedPrice,
    detailsLink,
    hostAvatar,
  } = data;

  return (
    <div className="trip-card bg-white h-100 shadow-sm border-0 position-relative d-flex flex-column">
      {/* Top Image & Badge Stack */}
      <div className="card-media position-relative overflow-hidden">
        {isFeatured && (
          <span className="featured-badge featured-badge-orange position-absolute fw-semibold">
            Featured
          </span>
        )}
        <button
          className="bookmark-btn position-absolute d-flex align-items-center justify-content-center border-0 rounded-circle text-white"
          aria-label="Bookmark destination"
        >
          <Bookmark size={24} />
        </button>

        <div className="img-wrapper">
          {image?.src ? (
            <Image
              src={image}
              alt={title}
              className="card-main-img img-fluid"
            />
          ) : (
            <img src={image} alt={title} className="card-main-img img-fluid" />
          )}
        </div>

        {/* Floating Author/Host Avatar */}
        {hostAvatar && (
          <div className="host-avatar-wrapper position-absolute">
            {hostAvatar.src ? (
              <Image
                src={hostAvatar}
                alt="Host"
                width={32}
                height={32}
                className="rounded-circle border border-white"
              />
            ) : (
              <img
                src={hostAvatar}
                alt="Host"
                className="rounded-circle border border-white"
              />
            )}
          </div>
        )}
      </div>

      {/* Card Content Elements */}
      <div className="card-body p-4 d-flex flex-column flex-grow-1">
        <div className="rating-row d-flex align-items-center mb-2">
          <div className="stars-group text-warning d-flex gap-1 me-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < Math.floor(rating) ? "text-warning" : "text-muted-light"
                }
                // Fill the star if it's active, leave it hollow if it's not
                fill={i < Math.floor(rating) ? "currentColor" : "none"}
              />
            ))}
          </div>
          <span className="rating-text fw-semibold text-dark">{rating}</span>
          <span className="reviews-count ms-1 text-muted">
            ({reviewsCount} reviews)
          </span>
        </div>

        <h4 className="card-title fw-bold mb-3">{title}</h4>

        <div className="location-row py-1 px-2 rounded-2 d-flex align-items-start mb-3 text-muted">
          <MapPin className="mt-1 me-2 flex-shrink-0 location-icon" size={14} />
          <span className="location-text">{location}</span>
        </div>

        <p className="card-desc text-muted mb-4">{description}</p>

        {/* Pricing and Action Footer Row */}
        <div className="card-footer-row mt-auto pt-3 border-top d-flex align-items-center justify-content-between">
          <div className="price-box">
            {originalPrice && (
              <span className="text-decoration-line-through text-muted small me-2">
                ₹{originalPrice}
              </span>
            )}
            <span className="current-price fw-bold">₹{discountedPrice}</span>
          </div>

          <Link href={detailsLink} passHref>
            <span className="btn btn-link-details d-inline-flex align-items-center fw-bold p-0 text-decoration-none">
              More Details <span className="ms-1 arrow-icon">&gt;</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
TripCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isFeatured: PropTypes.bool,
    image: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewsCount: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    originalPrice: PropTypes.number,
    discountedPrice: PropTypes.number.isRequired,
    detailsLink: PropTypes.string.isRequired,
    hostAvatar: PropTypes.any,
  }).isRequired,
};

export { TripCard };

// testimonial card
const TestimonialCard = ({ rating, text, name, role }) => {
  const userInitial = name ? name.trim().charAt(0).toUpperCase() : "?";

  const getAvatarStyles = (userName) => {
    const bgColors = [
      "#e63946", // Soft Red
      "#2a9d8f", // Teal
      "#457b9d", // Slate Blue
      "#e9c46a", // Warm Yellow
      "#f4a261", // Orange
      "#8338ec", // Purple
      "#3a86c8", // Medium Blue
      "#06d6a0", // Mint Green
    ];

    let hash = 0;
    if (userName) {
      for (let i = 0; i < userName.length; i++) {
        hash = userName.charCodeAt(i) + ((hash << 5) - hash);
      }
    }

    const colorIndex = Math.abs(hash) % bgColors.length;
    const backgroundColor = bgColors[colorIndex];

    // Returns styles with good text contrast rules
    return {
      backgroundColor,
      color: "#ffffff",
      fontSize: "1.2rem",
      width: "45px",
      height: "45px",
    };
  };

  const avatarStyle = getAvatarStyles(name);

  return (
    <div className="testimonial-card bg-light p-4 p-md-5 d-flex flex-column justify-content-between h-100 position-relative border-0">
      <div>
        {/* Star Rating Group */}
        <div className="stars-wrapper d-flex gap-1 mb-4 text-warning">
          {[...Array(5)].map((_, idx) => (
            <Star
              key={idx}
              size={16}
              fill={idx < rating ? "#ffb703" : "transparent"}
              className={idx < rating ? "text-warning" : "text-muted-light"}
            />
          ))}
        </div>

        {/* Feedback Text Review */}
        <p className="feedback-text text-secondary mb-5">{text}</p>
      </div>
      <div className="card-footer-profile d-flex align-items-center justify-content-between pt-2">
        <div className="d-flex align-items-center gap-3">
          <div
            className="avatar-initial-circle flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle fw-bold shadow-sm select-none"
            style={avatarStyle}
          >
            {userInitial}
          </div>

          <div className="profile-meta">
            <h5 className="profile-name fw-bold mb-0 text-dark">{name}</h5>
            <span className="profile-role text-uppercase text-muted small tracking-wider">
              {role}
            </span>
          </div>
        </div>

        <div className="quote-mark-icon select-none">
          <svg
            width="48"
            height="38"
            viewBox="0 0 48 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 21.6562C0 9.71875 9.09375 0.5 20.3438 0.5V7.6875C13.5 7.6875 9.1875 12.8438 9.1875 19.4062H20.3438V37.5H0V21.6562ZM27.6562 21.6562C27.6562 9.71875 36.75 0.5 48 0.5V7.6875C41.1562 7.6875 36.8438 12.8438 36.8438 19.4062H48V37.5H27.6562V21.6562Z"
              fill="#E2E8F0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  avatar: PropTypes.any.isRequired,
};

export { TestimonialCard };

// common pages header banner
const CommonBanner = ({
  title,
  breadcrumbs = [],
  bgImage = "/images/common-banner.avif",
  bgColorClass = "", // If you want to use a specific theme/Bootstrap color class (e.g., 'bg-primary')
  overlayOpacity = 0.5, // Customizable overlay darkness (0 to 1)
  textAlign = "center", // left, center, right
  className = "",
}) => {
  const { pick } = useLanguage();

  // Conditionally set inline styles if a background image path or object is provided
  const bannerStyle = {};
  if (bgImage) {
    const imgUrl =
      typeof bgImage === "object" && bgImage.src ? bgImage.src : bgImage;
    bannerStyle.backgroundImage = `url(${imgUrl})`;
  }

  return (
    <div
      className={`common-page-banner position-relative overflow-hidden d-flex align-items-center ${bgColorClass} ${className}`}
      style={bannerStyle}
    >
      {/* Background Overlay layer: Only renders if a bgImage exists */}
      {bgImage && (
        <div
          className="banner-overlay position-absolute top-0 start-0 w-100 h-100"
        />
      )}

      {/* Content Container (Forces elements above absolute overlays) */}
      <Container className="position-relative z-2 text-white">
        <Row
          className={`justify-content-${textAlign === "center" ? "center" : textAlign === "right" ? "end" : "start"}`}
        >
          <Col md={10} className={`text-${textAlign}`}>
            {/* Page Main Heading */}
            <h1 className="banner-title fw-bold mb-3">{pick(title)}</h1>

            {/* Dynamic Breadcrumbs list */}
            {breadcrumbs.length > 0 && (
              <nav
                aria-label="breadcrumb"
                className="d-inline-flex align-items-center"
              >
                <ol className="banner-breadcrumbs-list d-flex align-items-center m-0 p-0 list-unstyled fw-semibold">
                  {breadcrumbs.map((crumb, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    const crumbLabel = pick(crumb.label);

                    return (
                      <li
                        key={index}
                        className={`breadcrumb-item-custom d-flex align-items-center ${isLast ? "active-crumb .common-page-banner crumb-link text-white" : "text-white"}`}
                      >
                        {!isLast && crumb.url ? (
                          <Link
                            href={crumb.url}
                            className="text-decoration-none crumb-link text-white"
                          >
                            {crumbLabel}
                          </Link>
                        ) : (
                          <span>{crumbLabel}</span>
                        )}
                        {!isLast && (
                          <span className="crumb-separator mx-2">—</span>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

CommonBanner.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        .isRequired,
      url: PropTypes.string,
    }),
  ),
  bgImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  bgColorClass: PropTypes.string,
  overlayOpacity: PropTypes.number,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  className: PropTypes.string,
};

export { CommonBanner };
