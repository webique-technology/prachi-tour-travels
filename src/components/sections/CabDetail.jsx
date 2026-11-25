"use client";

import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Table, Badge } from "react-bootstrap";
import {
  ArrowLeft,
  ShieldCheck,
  Compass,
  HelpCircle,
  CheckCircle2,
  DollarSign,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import "../../styles/CommonSec.scss";
import { BookingForm } from "./CommonSec";
import { LinkPillBtn } from "../ui/Buttons";
import { useLanguage } from "../../context/LanguageContext";

const CabDetail = ({ cab }) => {
  const { t, pick } = useLanguage();

  if (!cab) return null;

  const tr = (key, fallback) => {
    const val = t(`cabDetailSec.${key}`);
    return val && val !== `cabDetailSec.${key}` ? val : fallback;
  };

  // Detect whether this detail page is for a Bus / Tempo Traveller or Cab
  const rawCategory =
    typeof cab.category === "object" && cab.category !== null
      ? cab.category.en || ""
      : cab.category || "";
  const isBusOrTempo =
    rawCategory.toLowerCase() === "bus" ||
    rawCategory.toLowerCase() === "tempo traveller";

  const backHref = isBusOrTempo ? "/bus" : "/cabs";
  const backLabel = isBusOrTempo
    ? tr("backToBus", "Back to Buses")
    : tr("backToCabs", "Back to Cabs");

  // Resolve localized fields safely
  const cabName = pick(cab.name);
  const cabCategory = pick(cab.category);
  const cabTitle = pick(cab.title);
  const cabRoutesSubtitle = pick(cab.routesSubtitle);
  const cabDescription = pick(cab.description);
  const cabProvider = pick(cab.providerFallback);
  const cabNotes = pick(cab.notes);

  // Keep English strings for BookingForm dropdown sync and WhatsApp message
  const rawCabName =
    typeof cab.name === "object" && cab.name !== null
      ? cab.name.en || cabName
      : cabName;

  const rawCabTitle =
    typeof cab.title === "object" && cab.title !== null
      ? cab.title.en || cabTitle
      : cabTitle;

  const pickedFeatures = pick(cab.features);
  const displayFeatures = Array.isArray(pickedFeatures)
    ? pickedFeatures.map((f) => pick(f)).filter(Boolean)
    : [];

  const displayPricingTable = Array.isArray(cab.pricingTable)
    ? cab.pricingTable
    : [];

  return (
    <section className="cab-detail-wrapper section-padding">
      <Container className="py-3">
        {/* 1. BACK BUTTON */}
        <div className="mb-4">
          <Link
            href={backHref}
            className="back-link border border-dark py-1 px-2 rounded-4 d-inline-flex align-items-center text-decoration-none small fw-semibold text-muted"
          >
            <ArrowLeft size={16} className="me-2" /> {backLabel}
          </Link>
        </div>

        {/* 2. MOBILE-ONLY IMAGE CARD (< 992px) */}
        <div className="vehicle-image-card bg-white border shadow-sm p-4 mb-4 rounded-3 text-center d-lg-none">
          <div
            className="img-frame mb-3 p-2 d-flex align-items-center justify-content-center bg-light rounded"
            style={{ minHeight: "240px" }}
          >
            <img
              src={cab.imageSrc}
              alt={cabName || "Vehicle Image"}
              className="img-fluid detail-vehicle-img rounded"
              style={{ maxHeight: "280px", objectFit: "contain" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/500x350?text=Vehicle+Image";
              }}
            />
          </div>
          <h2 className="h4 fw-bold text-dark mb-0">{cabName}</h2>
        </div>

        {/* Grid Setup */}
        <Row className="g-4 lg-g-5">
          {/* 3. MAIN LEFT COLUMN */}
          <Col xs={12} lg={7} className="order-1 order-lg-1">
            <div className="detail-header-block mb-4">
              {cabCategory && (
                <Badge
                  bg="dark"
                  className="text-uppercase mb-2 px-3 py-2 tracking-wider rounded-1"
                >
                  {cabCategory} {tr("fleetChoiceSuffix", "Fleet Choice")}
                </Badge>
              )}
              <h1 className="main-title fw-bold text-dark display-6 mb-2">
                {tr("bookHirePrefix", "Book / Hire")} {cabTitle}
              </h1>
              {cabRoutesSubtitle && (
                <p className="route-subtitle text-primary fw-medium small-base mb-0">
                  {cabRoutesSubtitle}
                </p>
              )}
            </div>

            <hr className="my-4 border-slate-200" />

            {/* Description Paragraph Block */}
            {cabDescription && (
              <div className="description-block mb-4">
                <h3 className="h5 fw-bold text-dark mb-3 d-flex align-items-center">
                  <Compass size={18} className="me-2 text-primary" />{" "}
                  {tr("journeyOverview", "Journey Overview")}
                </h3>
                <p className="description-text text-muted lh-lg mb-0">
                  {cabDescription}
                </p>
              </div>
            )}

            {/* DYNAMIC VEHICLE FEATURES DISPLAY CORE */}
            {displayFeatures.length > 0 && (
              <div className="features-block mb-4 p-4 bg-white rounded border shadow-sm">
                <h3 className="h5 fw-bold text-dark mb-3 d-flex align-items-center">
                  <CheckCircle2 size={18} className="me-2 text-success" />{" "}
                  {tr("amenitiesTitle", "Vehicle Amenities & Inclusions")}
                </h3>
                <div className="row g-2">
                  {displayFeatures.map((feature, idx) => (
                    <div key={idx} className="col-12 col-sm-6">
                      <div className="d-flex align-items-center p-2 bg-light rounded border border-light-subtle">
                        <span className="text-success me-2 fw-bold small">
                          ✓
                        </span>
                        <span className="text-secondary small fw-semibold">
                          {feature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DYNAMIC PER METER PRICING MATRIX TABLE */}
            {displayPricingTable.length > 0 && (
              <div className="pricing-table-block mb-4 p-4 bg-white rounded border shadow-sm">
                <h3 className="h5 fw-bold text-dark mb-3 d-flex align-items-center">
                  <DollarSign size={18} className="me-2 text-warning" />{" "}
                  {tr("rateCardTitle", "Estimated Rate Card (Per-Km Matrix)")}
                </h3>
                <div className="table-responsive">
                  <Table
                    striped
                    bordered
                    hover
                    className="align-middle mb-0 small-base"
                  >
                    <thead className="table-dark">
                      <tr>
                        <th>
                          {tr("tableHeaders.vehicleModel", "Vehicle Model")}
                        </th>
                        <th>{tr("tableHeaders.ratePerKm", "Rate / KM")}</th>
                        <th>{tr("tableHeaders.minLimit", "Min. Limit")}</th>
                        <th>
                          {tr(
                            "tableHeaders.driverAllowance",
                            "Driver Allowance",
                          )}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayPricingTable.map((row, idx) => (
                        <tr key={idx}>
                          <td className="fw-bold text-dark">
                            {pick(row.vehicle)}
                          </td>
                          <td className="highlight-text text-base highlight-text-primary fw-semibold">
                            {pick(row.ratePerKm)}
                          </td>
                          <td className="text-secondary text-base">
                            {pick(row.minKm)}
                          </td>
                          <td className="text-secondary text-base">
                            {pick(row.driverAllowance)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                <p className="small text-muted mt-2 mb-0 italic">
                  {tr(
                    "rateDisclaimer",
                    "*Note: Tolls, state permits, and state parking charges are calculated additionally based on your exact route checkpoints.",
                  )}
                </p>
              </div>
            )}

            {/* Trust Driver Fallback Notice */}
            <div className="driver-notice-card p-3 rounded mb-4 d-flex align-items-start bg-white border shadow-sm">
              <ShieldCheck
                size={24}
                className="text-success me-3 mt-1 flex-shrink-0"
              />
              <div>
                <h4 className="h6 fw-bold mb-1 text-dark">
                  {tr("driverTitle", "Experienced Drivers Included")}
                </h4>
                <p className="small text-muted mb-0">
                  {tr("driverDescPrefix", "Every ride booked with")}{" "}
                  <strong>{cabProvider}</strong>{" "}
                  {tr(
                    "driverDescSuffix",
                    "includes an experienced, professional driver-cum-guide who is well-mannered and fully vetted for a safe journey.",
                  )}
                </p>
              </div>
            </div>

            {/* SEO and Route Notes Box */}
            {cabNotes && (
              <div className="notes-block p-4 rounded bg-white border">
                <h4 className="h6 fw-bold text-dark mb-3 d-flex align-items-center">
                  <HelpCircle size={16} className="me-2 text-warning" />{" "}
                  {tr("bookingRefTitle", "Booking Reference & Service Scope")}
                </h4>
                <p className="notes-text text-muted small lh-base mb-0">
                  {cabNotes}
                </p>
              </div>
            )}
          </Col>

          {/* 4. INTERACTIVE SIDEBAR RIGHT COLUMN */}
          <Col
            xs={12}
            lg={5}
            className="order-2 order-lg-2 d-flex flex-column align-items-center justify-content-start"
          >
            <div className="w-100 position-sticky" style={{ top: "30px" }}>
              {/* DESKTOP-ONLY VEHICLE CARD (>= 992px) */}
              <div className="vehicle-image-card bg-white border shadow-sm p-4 mb-4 rounded-3 text-center d-none d-lg-block">
                <div
                  className="img-frame mb-3 p-2 d-flex align-items-center justify-content-center bg-light rounded"
                  style={{ minHeight: "240px" }}
                >
                  <img
                    src={cab.imageSrc}
                    alt={cabName || "Vehicle Image"}
                    className="img-fluid detail-vehicle-img rounded"
                    style={{ maxHeight: "280px", objectFit: "contain" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/500x350?text=Vehicle+Image";
                    }}
                  />
                </div>
                <h2 className="h4 fw-bold text-dark mb-0">{cabName}</h2>
              </div>

              {/* Dynamic Interactive Booking Form */}
              <BookingForm
                btnClass="w-100 py-2.5"
                defaultCab={rawCabName}
                pageTitle={rawCabTitle}
              />

              {/* Call and WhatsApp Action Row Elements */}
              <Row className="g-3 mt-1">
                <Col xs={6}>
                  <LinkPillBtn
                    href={"tel:+911234567890"}
                    icon={<PhoneCall size={18} />}
                    btnText={tr("callUsBtn", "Call Us")}
                    varaint="pill-btn accent rounded-2 text-center w-100 d-block py-2"
                  />
                </Col>
                <Col xs={6}>
                  <LinkPillBtn
                    href={`https://wa.me/911234567890?text=${encodeURIComponent("Hello! I want to book a Cab request.")}`}
                    target="_blank"
                    btnText={tr("whatsappBtn", "Chat with Us")}
                    img={"/images/whatsapp.svg"}
                    varaint="pill-btn pill-btn-whatsapp gap-2 rounded-2 text-center w-100 d-block py-2"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

CabDetail.propTypes = {
  cab: PropTypes.shape({
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    category: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    routesSubtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    imageSrc: PropTypes.string,
    features: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    pricingTable: PropTypes.array,
    providerFallback: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    notes: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }).isRequired,
};

export default CabDetail;
