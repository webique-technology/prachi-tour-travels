"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe, Check } from "lucide-react";
import Link from "next/link";
import "../../styles/Navbar.scss";
import NavSidebar from "./Sidebar";
import { Container, Dropdown } from "react-bootstrap";
import { LinkPillBtn } from "../ui/Buttons";
import { useLanguage } from "../../context/LanguageContext";
import { SUPPORTED_LANGUAGES } from "../../i18n/translation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const { lang, setLang, t, pick } = useLanguage();
  const currentLang =
    SUPPORTED_LANGUAGES.find((item) => item.code === lang) ||
    SUPPORTED_LANGUAGES[0];

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setTimeout(() => {
        setShowSidebar(true);
      }, 250);
    } else {
      closeMenu();
    }
  };

  const closeMenu = () => {
    setShowSidebar(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSidebar]);

  return (
    <header
      className={`custom-navbar d-flex align-items-center ${scrolled ? "scrolled" : ""}`}
    >
      <Container fluid="lg">
        <div className="d-flex align-items-center justify-content-between navbar-inner">
          {/* Logo Section */}
          <Link
            href="/"
            className="d-flex align-items-center text-decoration-none logo"
            onClick={closeMenu}
          >
            {/* <div className="logo-icon"><span className="text-white">ॐ</span></div> */}
            <img
              src={"/images/prachitravellogo.svg"}
              alt="Logo"
              className="me-2 brand-logo"
            />
            {/* <div className="logo-text">
                            <h1 className="text-light">Nashik</h1>
                            <p className="lh-auto highlight-text highlight-text-primary">Mumbai Cabs</p>
                        </div> */}
          </Link>

          {/* Navigation Stream Container Block */}
          <nav className="d-none d-lg-flex sora align-items-center gap-4 nav-links">
            <Link
              href="/"
              className={`nav-link-custom ${"/" === "/" ? "active" : ""}`}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about-us"
              className={`nav-link-custom ${"/about-us" === "/about-us" ? "active" : ""}`}
            >
              {t("nav.about")}
            </Link>
            {/* <Link href="/Cab-packages" className={`nav-link-custom ${"/Cab-packages" === "/Cab-packages" ? "active" : ""}`}>
                            Cab Packages
                        </Link> */}
            <Link
              href="/cities"
              className={`nav-link-custom ${"/cities" === "/cities" ? "active" : ""}`}
            >
              {t("nav.cities")}
            </Link>
            <Link
              href="/airport"
              className={`nav-link-custom ${"/airport" === "/airport" ? "active" : ""}`}
            >
              {t("nav.Airport")}
            </Link>
            <Link
              href="/cabs"
              className={`nav-link-custom ${"/cabs" === "/cabs" ? "active" : ""}`}
            >
              {t("nav.cabs")}
            </Link>
            <Link
              href="/railway-station"
              className={`nav-link-custom ${"/railway-station" === "/railway-station" ? "active" : ""}`}
            >
              {t("nav.railway")}
            </Link>
            <Link
              href="/bus"
              className={`nav-link-custom ${"/bus" === "/bus" ? "active" : ""}`}
            >
              {t("nav.bus")}
            </Link>
            {/* <Link href="/contact-us" className={`nav-link-custom ${"/contact-us" === "/contact-us" ? "active" : ""}`}>
                            contact
                        </Link> */}
          </nav>

          <div className="d-none d-lg-inline-flex gap-3">
            <Dropdown className="lang-switcher" align="end">
              <Dropdown.Toggle
                id="language-switcher-dropdown"
                className="lang-switcher-toggle"
                aria-label={`Select language (Current: ${currentLang.fullName})`}
              >
                <Globe size={14} aria-hidden="true" />
                <span>{currentLang.label}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="lang-switcher-menu">
                {SUPPORTED_LANGUAGES.map((item) => {
                  const isActive = lang === item.code;
                  return (
                    <Dropdown.Item
                      key={item.code}
                      as="button"
                      type="button"
                      active={isActive}
                      onClick={() => setLang(item.code)}
                      className={`lang-switcher-item ${isActive ? "is-active" : ""}`}
                      aria-label={item.fullName}
                    >
                      <span className="lang-item-text">
                        <span className="lang-code">{item.label}</span>
                        <span className="lang-name">{item.fullName}</span>
                      </span>
                      {isActive && <Check size={14} aria-hidden="true" />}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>

            <LinkPillBtn
              btnText={t("nav.bookNow")}
              target={"_blank"}
              href={"/contact-us"}
            />
          </div>

          {/* Actions Panel Wrapper */}
          <div className="d-flex d-lg-none align-items-center gap-2 right-actions">
            <div>
               <Dropdown className="lang-switcher" align="end">
              <Dropdown.Toggle
                id="language-switcher-dropdown"
                className="lang-switcher-toggle"
                aria-label={`Select language (Current: ${currentLang.fullName})`}
              >
                <Globe size={14} aria-hidden="true" />
                <span>{currentLang.label}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="lang-switcher-menu">
                {SUPPORTED_LANGUAGES.map((item) => {
                  const isActive = lang === item.code;
                  return (
                    <Dropdown.Item
                      key={item.code}
                      as="button"
                      type="button"
                      active={isActive}
                      onClick={() => setLang(item.code)}
                      className={`lang-switcher-item ${isActive ? "is-active" : ""}`}
                      aria-label={item.fullName}
                    >
                      <span className="lang-item-text">
                        <span className="lang-code">{item.label}</span>
                        <span className="lang-name">{item.fullName}</span>
                      </span>
                      {isActive && <Check size={14} aria-hidden="true" />}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            </div>
            <button className="mobile-toggle d-lg-none" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} className="text-white"/> : <Menu size={24} className="text-dark"/>}
            </button>
          </div>
        </div>
      </Container>

      <div
        className={`nav-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      <div className={`mobile-menu d-lg-none ${showSidebar ? "open" : ""}`}>
        <NavSidebar setIsMenuOpen={closeMenu} />
      </div>
    </header>
  );
};
export default Navbar;
