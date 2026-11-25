"use client";

import React from "react";
import PropTypes from "prop-types";
import { BookingForm } from "./CommonSec";
import { Col, Container, Row } from "react-bootstrap";
import { LinkPillBtn } from "../ui/Buttons";
import { PhoneCall } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export const DetailPage1 = ({ dataObject }) => {
  const { t, pick } = useLanguage();
  const data = dataObject;

  if (!data) return null;

  const headerImage = data?.routeImg || data?.image;

  // Safely resolves { en: [...], hi: [...], mr: [...] }, [{ en, hi, mr }], { en: "..." }, or plain strings/arrays
  const resolveList = (val) => {
    const picked = pick(val);
    if (Array.isArray(picked)) {
      return picked.map((entry) => pick(entry)).filter(Boolean);
    }
    return picked ? [picked] : [];
  };

  const titleText = pick(data.title);
  const introText = pick(data.intro);
  const fleetDescText = pick(data.fleetDescription);

  // Keep English title for consistent WhatsApp booking messages
  const bookingPageTitle =
    typeof data.title === "object" && data.title !== null
      ? data.title.en || titleText
      : titleText;

  const callBtnLabel =
    t("ctaSec.contactBtn") !== "ctaSec.contactBtn"
      ? t("ctaSec.contactBtn")
      : "Call Us";

  const whatsappBtnLabel =
    t("ctaSec.whatsappBtn") !== "ctaSec.whatsappBtn"
      ? t("ctaSec.whatsappBtn")
      : "Chat with Us";

  const longDistHeading = data.longDistance
    ? pick(data.longDistance.heading)
    : "";
  const longDistContent = data.longDistance
    ? resolveList(data.longDistance.content)
    : [];
  const longDistClosing = data.longDistance
    ? pick(data.longDistance.closing)
    : "";

  return (
    <main className="pb-4 pb-sm-5 pt-0 bg-white text-dark">
      <Container fluid className="p-0 position-relative mb-4">
        {/* Main Top Image And Title Box */}
        <div
          className={`detail-page-header-bg ${headerImage ? "has-bg-image" : ""}`}
          style={
            headerImage
              ? { "--header-bg": `url("${headerImage}")` }
              : undefined
          }
        >
          {/* Primary Hero Header */}
          <div className="position-absolute w-100 d-none d-lg-block">
            <div className="container">
              <header className="mb-4">
                {titleText && (
                  <h1 className="detail-h1 text-white">{titleText}</h1>
                )}
                <div className="text-secondary lh-base fs-6">
                  {introText && <p className="mb-3 text-light">{introText}</p>}
                  {fleetDescText && (
                    <p className="mb-0 text-light">{fleetDescText}</p>
                  )}
                </div>
              </header>
            </div>
          </div>
        </div>
      </Container>

      <div className="container">
        <Row className="row g-4 justify-content-center">
          {/* Main Layout Content Column */}
          <Col lg={7}>
            <article className="data-details-page px-2">

              <div className="d-block d-lg-none">
            <div className="container">
              <header className="mb-4">
                {titleText && (
                  <h1 className="detail-h1">{titleText}</h1>
                )}
                <div className="text-secondary lh-base fs-6">
                  {introText && <p className="mb-3">{introText}</p>}
                  {fleetDescText && (
                    <p className="mb-0">{fleetDescText}</p>
                  )}
                </div>
              </header>
            </div>
          </div>
              {/* DYNAMIC CONTENT BLOCK ENGINE */}
              {Array.isArray(data.contentBlocks) &&
                data.contentBlocks.map((block, index) => {
                  const blockHeading = pick(block.heading);
                  const blockContent = pick(block.content);
                  const blockIntro = pick(block.intro);
                  const blockClosing = pick(block.closing);
                  const blockItems = resolveList(block.items);

                  // Renders standard text layout sections
                  if (block.type === "text") {
                    return (
                      <section key={index} className="mb-4 pt-3">
                        {blockHeading && (
                          <h2 className="h3 fw-bold text-dark mb-3">
                            {blockHeading}
                          </h2>
                        )}
                        {blockContent && (
                          <p className="text-secondary lh-base fs-6">
                            {blockContent}
                          </p>
                        )}
                      </section>
                    );
                  }

                  // Renders highlighted pricing callout boxes
                  if (block.type === "callout") {
                    return (
                      <section
                        key={index}
                        className="mb-4 p-4 bg-light rounded-3 border-start border-warning border-4 shadow-sm"
                      >
                        {blockHeading && (
                          <h2 className="h4 fw-bold text-dark mb-2">
                            📍 {blockHeading}
                          </h2>
                        )}
                        {blockContent && (
                          <p className="text-secondary lh-base mb-0">
                            {blockContent}
                          </p>
                        )}
                      </section>
                    );
                  }

                  // Renders listing layouts (Features / Places to visit)
                  if (block.type === "list") {
                    return (
                      <section key={index} className="mb-4 pt-3 border-top">
                        {blockHeading && (
                          <h2 className="h3 fw-bold text-dark mb-3">
                            {blockHeading}
                          </h2>
                        )}
                        {blockIntro && (
                          <p className="text-secondary fw-medium mb-3">
                            {blockIntro}
                          </p>
                        )}

                        <div className="row g-2 mb-3">
                          {blockItems.map((item, listIdx) => (
                            <div key={listIdx} className="col-12 col-md-6">
                              <div className="d-flex align-items-start p-2 bg-light rounded border border-light-subtle h-100">
                                <span className="text-success fw-bold me-2 px-1">
                                  ✓
                                </span>
                                <span className="text-secondary small fw-medium">
                                  {item}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {blockClosing && (
                          <p className="text-secondary lh-base mt-2">
                            {blockClosing}
                          </p>
                        )}
                      </section>
                    );
                  }

                  return null;
                })}

              {/* Bottom Custom Promotion Banner */}
              {data.longDistance &&
                (longDistHeading ||
                  longDistContent.length > 0 ||
                  longDistClosing) && (
                  <section className="mt-4">
                    {longDistHeading && (
                      <h3 className="h4 fw-bold mb-3 text-warning">
                        {longDistHeading}
                      </h3>
                    )}

                    {longDistContent.map((value, i) => (
                      <p key={i} className="text-secondary fs-6 mb-3 lh-base">
                        {value}
                      </p>
                    ))}

                    {longDistClosing && (
                      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 pt-4 border-top border-secondary">
                        <span className="fw-bold text-uppercase tracking-wide text-warning small mb-2 mb-sm-0">
                          {longDistClosing}
                        </span>
                      </div>
                    )}
                  </section>
                )}
            </article>
          </Col>

          {/* Sidebar Area with Booking Form */}
          <Col lg={5}>
            <div className="position-sticky" style={{ top: "80px" }}>
              <BookingForm
                btnClass="btn-square primary"
                pageTitle={bookingPageTitle}
              />

              <Row className="g-4 mt-2">
                <Col>
                  <LinkPillBtn
                    href={"tel:+911234567890"}
                    icon={<PhoneCall size={18} />}
                    btnText={callBtnLabel}
                    varaint="pill-btn accent rounded-2 text-center w-100 d-block"
                  />
                </Col>
                <Col>
                  <LinkPillBtn
                    href={`https://wa.me/911234567890?text=${encodeURIComponent("Hello! I want to book a Cab request.")}`}
                    target="_blank"
                    btnText={whatsappBtnLabel}
                    img={"/images/whatsapp.svg"}
                    varaint="pill-btn pill-btn-whatsapp gap-2 rounded-2 text-center w-100 d-block"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </main>
  );
};

DetailPage1.propTypes = {
  dataObject: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    intro: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    fleetDescription: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    image: PropTypes.string,
    routeImg: PropTypes.string,
    contentBlocks: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(["text", "callout", "list"]).isRequired,
        heading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        intro: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        closing: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      }),
    ),
    longDistance: PropTypes.shape({
      heading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object,
      ]),
      closing: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    }),
  }),
};