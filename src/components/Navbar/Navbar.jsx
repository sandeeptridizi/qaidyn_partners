import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import LOGO from "../../assets/LOGO.png";
import { useEditMode } from "../context/EditModeContext.jsx";

const Navbar = ({ openContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // ✅ SINGLE SUBMENU STATE
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const { isEditMode, toggleEditMode } = useEditMode();
  const servicesRef = useRef(null);
  const resourcesRef = useRef(null);

  const closeAllMenus = () => {
    setResourcesDropdownOpen(false);
    setServicesDropdownOpen(false);
    setActiveSubmenu(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "industries", "blogs", "promotions"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", closeAllMenus, { passive: true });
    return () => window.removeEventListener("scroll", closeAllMenus);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
        setActiveSubmenu(null);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) {
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(p => !p);

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(p => !p);
    setServicesDropdownOpen(false);
    setActiveSubmenu(null);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(p => !p);
    setResourcesDropdownOpen(false);
    setActiveSubmenu(null);
  };

  // ✅ CORE LOGIC (accordion behavior)
  const handleSubmenuToggle = (key) => {
    setActiveSubmenu(prev => (prev === key ? null : key));
  };

  return (
    <header className="header">
      <div className="container-full">
        <div className="nav-wrapper">
          <div className="logo">
            <img src={LOGO} alt="Qaidyn Partners Logo" className="logo-image" />
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
              <span /><span /><span />
            </span>
          </button>

          <nav className={`nav-menu ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About Us</a>

            {/* SERVICES */}
            <div className="nav-dropdown" ref={servicesRef}>
              <button className="nav-link dropdown-toggle" onClick={toggleServicesDropdown}>
                Services
                <span className={`dropdown-arrow ${servicesDropdownOpen ? "open" : ""}`}>▼</span>
              </button>

              <div className={`dropdown-menu ${servicesDropdownOpen ? "show" : ""}`}>

                {/* Managed IT */}
                <div className="dropdown-item-wrapper">
                  <div className="dropdown-item has-submenu" onClick={() => handleSubmenuToggle("managedIT")}>
                    Managed IT Services <span className="submenu-arrow">›</span>
                  </div>
                  <div className={`submenu ${activeSubmenu === "managedIT" ? "show" : ""}`}>
                    <a href="/services/managed-it/helpdesk" className="submenu-item">Helpdesk</a>
                    <a href="/services/managed-it/devices-setup" className="submenu-item">Devices Setup</a>
                    <a href="/services/managed-it/patch-management" className="submenu-item">Patch Management</a>
                    <a href="/services/managed-it/network-management" className="submenu-item">Network Management</a>
                    <a href="/services/managed-it/backup" className="submenu-item">Backup</a>
                    <a href="/services/managed-it/vendor-coordination" className="submenu-item">Vendor Coordination</a>
                  </div>
                </div>

                {/* Managed Security */}
                <div className="dropdown-item-wrapper">
                  <div className="dropdown-item has-submenu" onClick={() => handleSubmenuToggle("managedSecurity")}>
                    Managed Security Services <span className="submenu-arrow">›</span>
                  </div>
                  <div className={`submenu ${activeSubmenu === "managedSecurity" ? "show" : ""}`}>
                    <a href="/services/managed-security/threat-detection" className="submenu-item">Threat Detection</a>
                    <a href="/services/managed-security/endpoint-protection" className="submenu-item">Endpoint Protection</a>
                    <a href="/services/managed-security/incident-response" className="submenu-item">Incident Response</a>
                    <a href="/services/managed-security/security-monitoring" className="submenu-item">Security Monitoring</a>
                  </div>
                </div>

                {/* Cloud */}
                <div className="dropdown-item-wrapper">
                  <div className="dropdown-item has-submenu" onClick={() => handleSubmenuToggle("cloud")}>
                    Cloud & Infrastructure <span className="submenu-arrow">›</span>
                  </div>
                  <div className={`submenu ${activeSubmenu === "cloud" ? "show" : ""}`}>
                    <a href="/services/cloud-infrastructure/cloud-setup" className="submenu-item">Cloud Setup</a>
                    <a href="/services/cloud-infrastructure/virtual-servers" className="submenu-item">Virtual Servers</a>
                    <a href="/services/cloud-infrastructure/virtual-desktops" className="submenu-item">Virtual Desktops</a>
                    <a href="/services/cloud-infrastructure/it-infrastructure" className="submenu-item">IT Planning</a>
                  </div>
                </div>

                {/* Security Assessment */}
                <div className="dropdown-item-wrapper">
                  <div className="dropdown-item has-submenu" onClick={() => handleSubmenuToggle("assessment")}>
                    Security Assessment & Compliance <span className="submenu-arrow">›</span>
                  </div>
                  <div className={`submenu ${activeSubmenu === "assessment" ? "show" : ""}`}>
                    <a href="/services/security-assessment/iso27001" className="submenu-item">ISO 27001</a>
                    <a href="/services/security-assessment/irap" className="submenu-item">iRAP</a>
                    <a href="/services/security-assessment/soc2" className="submenu-item">SOC 2</a>
                    <a href="/services/security-assessment/risk-management" className="submenu-item">Risk Management</a>
                  </div>
                </div>

                {/* Data Protection */}
                <div className="dropdown-item-wrapper">
                  <div className="dropdown-item has-submenu" onClick={() => handleSubmenuToggle("data")}>
                    Data Protection & Recovery <span className="submenu-arrow">›</span>
                  </div>
                  <div className={`submenu ${activeSubmenu === "data" ? "show" : ""}`}>
                    <a href="/services/data-protection/backup" className="submenu-item">Backup</a>
                    <a href="/services/data-protection/disaster-recovery" className="submenu-item">Disaster Recovery</a>
                    <a href="/services/data-protection/ransomware-recovery" className="submenu-item">Ransomware Recovery</a>
                    <a href="/services/data-protection/encryption" className="submenu-item">Encryption</a>
                  </div>
                </div>

              </div>
            </div>

            <a href="/industries" className="nav-link">Industries</a>

            {/* RESOURCES */}
            <div className="nav-dropdown" ref={resourcesRef}>
              <button className="nav-link dropdown-toggle" onClick={toggleResourcesDropdown}>
                Resources
                <span className={`dropdown-arrow ${resourcesDropdownOpen ? "open" : ""}`}>▼</span>
              </button>
              <div className={`dropdown-menu ${resourcesDropdownOpen ? "show" : ""}`}>
                <a href="/blogs" className="dropdown-item">Blogs</a>
                <a href="/guidelines" className="dropdown-item">Guidelines</a>
                <a href="/case-studies" className="dropdown-item">Case Studies</a>
              </div>
            </div>

            <a href="/promotions" className="nav-link">Promotions</a>
            <a href="/contact" className="btn-contact mobile-contact">Contact Us</a>
          </nav>

          <div className="navbar-right-actions">
            <a href="/contact" className="btn-contact desktop-contact">Contact Us</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
