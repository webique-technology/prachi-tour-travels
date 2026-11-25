"use client";

import React, { useState } from "react";
import { CommonBanner } from "@/components/ui/cards";
import innerPageBg from "../../../public/images/slide_3.webp";
import "../../styles/contactPage.scss";
import { Container, Row, Col, Form } from "react-bootstrap";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPageComp() {
  const { t } = useLanguage();

  const tr = (key, fallback) => {
    const val = t(`contactPage.${key}`);
    return val && val !== `contactPage.${key}` ? val : fallback;
  };

  const breadcrumbPaths = [
    { label: tr("breadcrumbHome", "Home"), url: "/" },
    { label: tr("breadcrumbCurrent", "Contact Us"), url: "/contact-us" },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeToPrivacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const targetWhatsAppNumber = "911234567890";

    const formattedText =
      `*New Inquiry From Website*%0A%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Subject:* ${formData.subject || "N/A"}%0A%0A` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetWhatsAppNumber}&text=${formattedText}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      agreeToPrivacy: false,
    });
  };

  return (
    <main>
      <CommonBanner
        title={tr("bannerTitle", "Contact Us")}
        breadcrumbs={breadcrumbPaths}
        bgImage={innerPageBg}
        overlayOpacity={0.6}
        textAlign="center"
      />

      <section className="contact-page-section section-padding">
        <Container>
          {/* Section Header Top Text Group */}
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="contact-main-heading fw-bold mb-3">
                {tr("heading", "Get in Touch")}
              </h2>
              <p className="contact-sub-text text-muted mb-0">
                {tr(
                  "subText",
                  "Premium intercity mobility across Maharashtra. We're here to assist with your travel needs, 24/7.",
                )}
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {/* Direct Info Blocks */}
            <Col xs={12}>
              <Row className="g-4">
                {/* Box Item 1: Office Info */}
                <Col md={12} lg={4}>
                  <div className="h-100 info-block-item d-flex align-items-start gap-4 p-4 shadow-sm bg-white">
                    <div className="info-icon-circle rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center text-white">
                      <MapPin size={22} />
                    </div>
                    <div className="info-meta">
                      <h4 className="info-title fw-semibold mb-2">
                        {tr("cards.officeTitle", "Our Office")}
                      </h4>
                      <Link
                        href="https://maps.app.goo.gl/dr8vJdnkumcJhJ5D7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="info-anchor-link fw-semibold text-decoration-none"
                      >
                        {tr(
                          "cards.officeAddress",
                          "Shop No. 7, Nysa Business Centre, Ghadge Nagar, Makhmalabad, Nashik, Maharashtra 422003",
                        )}
                      </Link>
                    </div>
                  </div>
                </Col>

                {/* Box Item 2: Email Us */}
                <Col md={6} lg={4}>
                  <div className="h-100 info-block-item d-flex align-items-start gap-4 p-4 shadow-sm bg-white">
                    <div className="info-icon-circle rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center text-white">
                      <Mail size={22} />
                    </div>
                    <div className="info-meta">
                      <h4 className="info-title fw-semibold mb-2">
                        {tr("cards.emailTitle", "Email Us")}
                      </h4>
                      <Link
                        href="mailto:contact@prachiTravels.com"
                        className="info-anchor-link fw-semibold text-decoration-none overflow-auto text-break"
                      >
                        contact@prachiTravels.com
                      </Link>
                    </div>
                  </div>
                </Col>

                {/* Box Item 3: Call Us */}
                <Col md={6} lg={4}>
                  <div className="h-100 info-block-item d-flex align-items-start gap-4 p-4 shadow-sm bg-white">
                    <div className="info-icon-circle rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center text-white">
                      <Phone size={22} />
                    </div>
                    <div className="info-meta">
                      <h4 className="info-title fw-bold mb-2">
                        {tr("cards.callTitle", "Call Us")}
                      </h4>
                      <Link
                        href="tel:+911234567890"
                        className="info-anchor-link fw-semibold text-decoration-none"
                      >
                        +91 12345 67890
                      </Link>
                      <p className="info-description mb-0 text-muted small">
                        {tr(
                          "cards.callNote",
                          "Available 24/7 for support and bookings.",
                        )}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            {/* Left Column: Form Card Wrapper */}
            <Col lg={7} md={12}>
              <div className="contact-form-card shadow-sm">
                <Form onSubmit={handleSubmit}>
                  <Row className="gy-4">
                    <Col md={6} xs={12}>
                      <Form.Group controlId="formFullName">
                        <Form.Label className="field-custom-label text-uppercase fw-bold">
                          {tr("form.fullNameLabel", "Full Name")}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="fullName"
                          placeholder={tr(
                            "form.fullNamePlaceholder",
                            "John Doe",
                          )}
                          value={formData.fullName}
                          onChange={handleChange}
                          className="custom-input-field border-0"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} xs={12}>
                      <Form.Group controlId="formEmail">
                        <Form.Label className="field-custom-label text-uppercase fw-bold">
                          {tr("form.emailLabel", "Email Address")}
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder={tr(
                            "form.emailPlaceholder",
                            "john@example.com",
                          )}
                          value={formData.email}
                          onChange={handleChange}
                          className="custom-input-field border-0"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} xs={12}>
                      <Form.Group controlId="formPhone">
                        <Form.Label className="field-custom-label text-uppercase fw-bold">
                          {tr("form.phoneLabel", "Phone Number")}
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          placeholder={tr(
                            "form.phonePlaceholder",
                            "+91 00000 00000",
                          )}
                          value={formData.phone}
                          onChange={handleChange}
                          className="custom-input-field border-0"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} xs={12}>
                      <Form.Group controlId="formSubject">
                        <Form.Label className="field-custom-label text-uppercase fw-bold">
                          {tr("form.subjectLabel", "Subject")}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          placeholder={tr(
                            "form.subjectPlaceholder",
                            "Inquiry about...",
                          )}
                          value={formData.subject}
                          onChange={handleChange}
                          className="custom-input-field border-0"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group controlId="formMessage">
                        <Form.Label className="field-custom-label text-uppercase fw-bold">
                          {tr("form.messageLabel", "Message")}
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          rows={4}
                          placeholder={tr(
                            "form.messagePlaceholder",
                            "How can we help you today?",
                          )}
                          value={formData.message}
                          onChange={handleChange}
                          className="custom-textarea-field border-0"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <button
                        type="submit"
                        className="pill-btn accent d-inline-flex align-items-center gap-2"
                      >
                        {tr("form.submitBtn", "Submit Message")}{" "}
                        <ArrowRight size={18} />
                      </button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>

            {/* Right Column: Google Map Embed */}
            <Col lg={5} md={12}>
              <div className="map-main-box shadow-sm h-100 rounded-4 overflow-hidden border bg-white">
                <iframe
                  title="Prachi Tours & Travels"
                  src="https://www.google.com/maps?q=Nashik,Maharashtra&output=embed"
                  className="map-embed-frame w-100 h-100 border-0 d-block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}