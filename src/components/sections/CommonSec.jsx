"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import { usePathname } from "next/navigation";
import * as LucideIcons from "lucide-react";
import { Award, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";
import "../../styles/CommonSec.scss";
import { CabsData } from "@/lib/data";
import { AnimationSecComponent } from "../ui/AnimationSecComponent";
import { useLanguage } from "@/context/LanguageContext";

export const FeatureGridSec = ({
  badgeText = "OUR EXPERTISE",
  mainHeading = "Our Premium Travel Solutions.",
  subHeading = "Experience comfort and reliability with our specialized transport services tailored for the discerning traveler.",
  featuresData = [],
}) => {
  return (
    <section className="feature-grid-section py-5 text-white">
      <Container className="py-4">
        {/* Header Block using React-Bootstrap Grid */}
        <Row className="justify-content-center text-center mb-5 header-block">
          <Col xs={12} md={10} lg={8}>
            {badgeText && (
              <span className="feature-badge text-uppercase fw-semibold mb-2 d-inline-block">
                {badgeText}
              </span>
            )}
            <h2 className="feature-main-heading section-title fw-semibold mb-3">
              {mainHeading}
            </h2>
            {subHeading && (
              <p className="feature-sub-heading text-muted small-base mb-0">
                {subHeading}
              </p>
            )}
          </Col>
        </Row>

        {/* Dynamic Grid Layout using React-Bootstrap Grid */}
        <Row className="g-4 justify-content-center">
          {featuresData.map((feature, index) => {
            // Dynamically resolve Lucide Icon string from props
            const IconComponent =
              LucideIcons[feature.iconName] || LucideIcons.HelpCircle;

            return (
              <Col
                key={feature.id || index}
                xs={12}
                md={6}
                lg={4}
                className="d-flex"
              >
                <div className="feature-card p-4 d-flex flex-column justify-content-between w-100">
                  {/* Top Content Wrapper */}
                  <div>
                    {/* Dynamic Icon Ring */}
                    <div
                      className="icon-wrapper mb-4 d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor:
                          feature.iconBg || "rgba(255, 255, 255, 0.05)",
                        color: feature.iconColor || "#ffffff",
                      }}
                    >
                      <IconComponent size={24} strokeWidth={2} />
                    </div>

                    {/* Card Title & Desc */}
                    <h3 className="card-title h5 fw-bold mb-3">
                      {feature.title}
                    </h3>
                    <p className="card-desc small text-muted lh-base mb-4">
                      {feature.description}
                    </p>
                  </div>

                  {/* Dynamic Action Trigger */}
                  <div className="card-footer-action pt-2">
                    <Link
                      href={feature.linkUrl || "#"}
                      className="learn-more-btn d-inline-flex align-items-center text-decoration-none fw-semibold small"
                      style={{ color: feature.themeColor || "#38bdf8" }}
                    >
                      Learn More
                      <LucideIcons.ArrowRight
                        size={14}
                        className="ms-2 transition-arrow"
                      />
                    </Link>
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

export const CarBlock = ({}) => {
  const carBlockData = [
    {
      title: "Sedan",
      icon: "/images/sedan.png",
    },
    {
      title: "Hatchback",
      icon: "/images/hatchback.png",
    },
    {
      title: "SUV",
      icon: "/images/suv.png",
    },
    {
      title: "Jeep",
      icon: "/images/jeep.png",
    },
    {
      title: "Traveller",
      icon: "/images/traveller.png",
    },
    {
      title: "Bus",
      icon: "/images/bus.png",
    },
  ];

  return (
    <section className="car-block py-5  pb-1">
      <Container>
        <Row className="g-3 g-md-4">
          {carBlockData.map((car, index) => {
            return (
              <Col xs={4} md={4} xl={2} key={index}>
                {/* <AnimationSecComponent> */}
                <div className="car-block-card shadow-sm border">
                  <img src={car.icon} alt={car.title} className="img-fluid" />
                  <h3 className="card-title h5 fw-bold mb-0">{car.title}</h3>
                </div>
                {/* </AnimationSecComponent> */}
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export const BookingForm = ({
  titleClass = "",
  btnClass = "btn-square light",
  defaultCab = "",
  pageTitle = "",
}) => {
  const pathname = usePathname();
  const { t, pick } = useLanguage();

  const isAirportPage = pathname?.includes("/airport");

  const tourTypeOptions = [
    { value: "Outstation", label: t("form.tourTypeOptions.outstation") },
    { value: "One Way", label: t("form.tourTypeOptions.oneWay") },
    { value: "Round Trip", label: t("form.tourTypeOptions.roundTrip") },
    {
      value: "Airport Pickup / Drop",
      label: t("form.tourTypeOptions.airport"),
    },
    { value: "Local", label: t("form.tourTypeOptions.local") },
  ];

  const [formData, setFormData] = useState({
    CabType: defaultCab,
    tourType: isAirportPage ? "Airport Pickup / Drop" : "",
    pickupAddress: "",
    dropAddress: "",
    pickupDate: "",
    pickupTime: "",
    completeName: "",
    emailAddress: "",
    phoneNo: "",
    message: "",
  });

  // Sync defaultCab if passed dynamically or on slug changes (e.g. /cabs/[slug] or /bus/[slug])
  useEffect(() => {
    if (defaultCab) {
      setFormData((prev) => ({
        ...prev,
        CabType: defaultCab,
      }));
    }
  }, [defaultCab]);

  const WHATSAPP_NUMBER = "911234567890";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dynamically include both Cab Type and Tour Type if present
    const serviceLines = [
      formData.CabType ? `*Cab / Vehicle Type:* ${formData.CabType}` : null,
      formData.tourType ? `*Tour Type:* ${formData.tourType}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const introSentence = pageTitle
      ? `Hello, I would like to book a cab for: *${pageTitle}*. Here are my ride details:\n\n`
      : `Hello, I would like to book a cab. Here are my ride details:\n\n`;

    const textMessage =
      `*New Cab Booking Request*\n` +
      `${introSentence}` +
      `*Customer Name:* ${formData.completeName || "N/A"}\n` +
      `*Contact Number:* ${formData.phoneNo || "N/A"}\n` +
      `*Email:* ${formData.emailAddress || "N/A"}\n\n` +
      `${serviceLines ? `${serviceLines}\n\n` : ""}` +
      `*Pickup Date:* ${formData.pickupDate || "N/A"}\n` +
      `*Pickup Time:* ${formData.pickupTime || "N/A"}\n\n` +
      `*Pickup Add:* ${formData.pickupAddress || "N/A"}\n` +
      `*Drop Add:* ${formData.dropAddress || "N/A"}\n\n` +
      `*Message:* ${formData.message || "N/A"}`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Reset form state cleanly
    setFormData({
      CabType: defaultCab,
      tourType: isAirportPage ? "Airport Pickup / Drop" : "",
      pickupAddress: "",
      dropAddress: "",
      pickupDate: "",
      pickupTime: "",
      completeName: "",
      emailAddress: "",
      phoneNo: "",
      message: "",
    });
  };

  return (
    <div className="cab-booking-card border shadow-sm p-4 rounded-3">
      <div className={`card-header-block text-start mb-4 ${titleClass}`}>
        <h2 className="booking-main-title h4 fw-bold text-dark mb-1">
          {t("form.title")}
        </h2>
        <p className="booking-subtitle small text-muted mb-0">
          {t("form.subtitle")}
        </p>
      </div>

      <Form onSubmit={handleSubmit} className="booking-form-element">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="completeName"
            placeholder={t("form.fullName")}
            value={formData.completeName}
            onChange={handleChange}
            className="form-input-field"
            required
          />
        </Form.Group>

        <div className="row g-3 mb-3">
          <div className="col-12 col-sm-6">
            <Form.Group>
              <Form.Control
                type="tel"
                name="phoneNo"
                placeholder={t("form.phone")}
                value={formData.phoneNo}
                onChange={handleChange}
                className="form-input-field"
                required
              />
            </Form.Group>
          </div>
          <div className="col-12 col-sm-6">
            <Form.Group>
              <Form.Control
                type="email"
                name="emailAddress"
                placeholder={t("form.email")}
                value={formData.emailAddress}
                onChange={handleChange}
                className="form-input-field"
              />
            </Form.Group>
          </div>
        </div>

        <Form.Group className="mb-3">
          <Form.Select
            name="CabType"
            value={formData.CabType}
            onChange={handleChange}
            className="form-select form-input-field custom-select"
          >
            <option value="" className="w-100 p-3">
              {t("form.vehicleType")}
            </option>
            {CabsData?.map((Cab, index) => {
              const cabValue =
                typeof Cab.name === "object" && Cab.name !== null
                  ? Cab.name.en
                  : Cab.name;
              const cabLabel = pick(Cab.name);

              return (
                <option
                  key={Cab.id || index}
                  value={cabValue}
                  className="w-100 p-3"
                >
                  {cabLabel}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select
            name="tourType"
            value={formData.tourType}
            onChange={handleChange}
            className="form-select form-input-field custom-select"
          >
            <option value="">{t("form.tourType")}</option>
            {tourTypeOptions.map((tour, index) => (
              <option key={index} value={tour.value}>
                {tour.label}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <div className="row g-3 mb-3">
          <div className="col-12 col-sm-6">
            <Form.Group>
              <Form.Control
                type="text"
                name="pickupAddress"
                placeholder={t("form.pickupAddress")}
                value={formData.pickupAddress}
                onChange={handleChange}
                className="form-input-field"
                required
              />
            </Form.Group>
          </div>
          <div className="col-12 col-sm-6">
            <Form.Group>
              <Form.Control
                type="text"
                name="dropAddress"
                placeholder={t("form.dropAddress")}
                value={formData.dropAddress}
                onChange={handleChange}
                className="form-input-field"
                required
              />
            </Form.Group>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-12 col-sm-6">
            <Form.Group>
              <Form.Control
                type="date"
                name="pickupDate"
                placeholder={t("form.pickupDate")}
                value={formData.pickupDate}
                onChange={handleChange}
                className="form-input-field"
                required
              />
            </Form.Group>
          </div>

          <div className="col-12 col-sm-6">
            <Form.Group>
              <Form.Control
                type="time"
                name="pickupTime"
                placeholder={t("form.pickupTime")}
                value={formData.pickupTime}
                onChange={handleChange}
                className="form-input-field"
                required
              />
            </Form.Group>
          </div>
        </div>

        <Form.Group className="mb-4">
          <Form.Control
            as="textarea"
            name="message"
            placeholder={t("form.message")}
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="form-input-field text-area-field"
          />
        </Form.Group>

        <div className="text-start">
          <button type="submit" className="btn-square primary">
            {t("form.submitBtn")}
          </button>
        </div>
      </Form>
    </div>
  );
};

export const PilgrimStandard = () => {
  const { t } = useLanguage();

  const tr = (key, fallback) => {
    const val = t(`pilgrimStandardSec.${key}`);
    return val && val !== `pilgrimStandardSec.${key}` ? val : fallback;
  };

  const translatedCards = t("pilgrimStandardSec.cards");
  const cardsText = Array.isArray(translatedCards) ? translatedCards : [];

  const standardsList = [
    {
      id: "standard-1",
      icon: <Award size={32} className="card-icon" />,
      title: cardsText[0]?.title || "Vetted & Verified Drivers",
      description:
        cardsText[0]?.description ||
        "Every driver undergoes a background check and a specialized orientation for the Nashik city routes and temple etiquettes.",
      isFeatured: false,
    },
    {
      id: "standard-2",
      icon: <ShieldCheck size={36} className="card-icon" />,
      title: cardsText[1]?.title || "100% Booking Guarantee",
      description:
        cardsText[1]?.description ||
        "Once confirmed, your vehicle is locked in. No cancellations during the peak mela hours.",
      isFeatured: true,
    },
    {
      id: "standard-3",
      icon: <Sparkles size={32} className="card-icon" />,
      title: cardsText[2]?.title || "Sanitized Fleet",
      description:
        cardsText[2]?.description ||
        "Vehicles are deep cleaned after every trip following international hygiene protocols.",
      isFeatured: false,
    },
    {
      id: "standard-4",
      icon: <PhoneCall size={30} className="card-icon" />,
      title: cardsText[3]?.title || "24/7 Roadside Assistance",
      description:
        cardsText[3]?.description ||
        "Dedicated helpline for any on-road emergencies, ensuring your journey remains uninterrupted.",
      isFeatured: false,
    },
  ];

  return (
    <section className="pilgrim-standard-section section-padding bg-light">
      <Container>
        {/* Section Heading */}
        <div className="text-center section-header">
          <div>
            <h2 className="section-title">
              {tr("title", "The Premium Ride")}{" "}
              <span className="title-highlight">
                {tr("highlightWord", "Standard")}
              </span>
            </h2>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <Row className="g-4 justify-content-center align-items-stretch">
          {standardsList.map((item) => (
            <Col key={item.id} xs={6} sm={6} md={6} lg={3} className="d-flex">
              <div className="h-100 w-100">
                <div
                  className={`standard-card h-100 d-flex flex-column rounded-4 p-4 transition-all w-100 ${
                    item.isFeatured
                      ? "featured-card shadow"
                      : "standard-white shadow-sm"
                  }`}
                >
                  {/* Icon Wrapper Context */}
                  <div className="icon-container mb-4">{item.icon}</div>

                  {/* Card Title */}
                  <h3 className="card-heading fw-bold mb-3">{item.title}</h3>

                  {/* Card Description */}
                  <p className="card-desc lh-base mb-0 d-none d-sm-block">{item.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
