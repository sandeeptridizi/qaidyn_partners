import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import LOGO from "../../assets/LOGO.png";
import { useEditMode } from "../context/EditModeContext.jsx";
import EditableText from "../Editable/EditableText.jsx";
import EditableImage from "../Editable/EditableImage.jsx";

const Navbar = ({ openContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

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

  const handleSubmenuToggle = (key) => {
    setActiveSubmenu(prev => (prev === key ? null : key));
  };

  return (
    <header className="header">
      <div className="container-full">
        <div className="nav-wrapper">
          <div className="logo">
            <EditableImage contentKey="nav.logo" defaultValue={LOGO} alt="Qaidyn Partners Logo" className="logo-image" />
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
              <span /><span /><span />
            </span>
          </button>

          <nav className={`nav-menu ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <a href="/" className="nav-link"><EditableText as="span" contentKey="nav.home" defaultValue="Home" /></a>
            <a href="/about" className="nav-link"><EditableText as="span" contentKey="nav.about" defaultValue="About Us" /></a>

            <div className="nav-dropdown" ref={servicesRef}>
              <button className="nav-link dropdown-toggle" onClick={toggleServicesDropdown}>
                <EditableText as="span" contentKey="nav.services" defaultValue="Services" />
                <span className={`dropdown-arrow ${servicesDropdownOpen ? "open" : ""}`}>▼</span>
              </button>

              <div className={`dropdown-menu ${servicesDropdownOpen ? "show" : ""}`}>

                <div className="dropdown-item-wrapper">
                  <div className="dropdown-item has-submenu" onClick={() => handleSubmenuToggle("managedIT")}>
                    <EditableText as="span" contentKey="nav.services.managedIT.title" defaultValue="Managed IT Services" /> <span className="submenu-arrow">›</span>
                  </div>
                  <div className={`submenu ${activeSubmenu === "managedIT" ? "show" : ""}`}>
                    <a href="/services/managed-it/helpdesk" className="submenu-item"><EditableText as="span" contentKey="nav.services.managedIT.helpdesk" defaultValue="Helpdesk" /></a>
                    <a href="/services/managed-it/devices-setup" className="submenu-item"><EditableText as="span" contentKey="nav.services.managedIT.devices" defaultValue="Devices Setup" /></a>
                    <a href="/services/managed-it/patch-management" className="submenu-item"><EditableText as="span" contentKey="nav.services.managedIT.patch" defaultValue="Patch Management" /></a>
                    <a href="/services/managed-it/network-management" className="submenu-item"><EditableText as="span" contentKey="nav.services.managedIT.network" defaultValue="Network Management" /></a>
                    <a href="/services/managed-it/backup" className="submenu-item"><EditableText as="span" contentKey="nav.services.managedIT.backup" defaultValue="Backup" /></a>
                    <a href="/services/managed-it/vendor-coordination" className="submenu-item"><EditableText as="span" contentKey="nav.services.managedIT.vendor" defaultValue="Vendor Coordination" /></a>
                  </div>
                </div>

                <div className="dropdown-item-wrapper">
                  <div className="dropdown-item has-submenu" onClick={() => handleSubmenuToggle("managedSecurity")}>
                    <EditableText as="span" contentKey="nav.services.managedSecurity.title" defaultValue="Managed Security Services" /> <span className="submenu-arrow">›</span>
                  </div>
                  <div className={`submenu ${activeSubmenu === "managedSecurity" ? "show" : ""}`}>
                    <a href="/services/managed-security/threat-detection" className="submenu-item"><EditableText as="span" contentKey="nav.services.managedSecurity.threat" defaultValue="Threat Detection" /></a>
                    <a href="/services/managed-security/endpoint-protection" className="submenu-item"><EditableText as="span" contentKey="nav.services.managedSecurity.endpoint" defaultValue="Endpoint Protection" /></a>
                    <a href="/services/managed-security/incident-response" className="submenu-item"><EditableText as="span" contentKey="nav.services.managedSecurity.incident" defaultValue="Incident Response" /></a>
                    <a href="/services/managed-security/security-monitoring" className="submenu-item"><EditableText as="span" contentKey="nav.services.managedSecurity.monitoring" defaultValue="Security Monitoring" /></a>
                  </div>
                </div>

                <div className="dropdown-item-wrapper">
                  <div className="dropdown-item has-submenu" onClick={() => handleSubmenuToggle("cloud")}>
                    <EditableText as="span" contentKey="nav.services.cloud.title" defaultValue="Cloud & Infrastructure" /> <span className="submenu-arrow">›</span>
                  </div>
                  <div className={`submenu ${activeSubmenu === "cloud" ? "show" : ""}`}>
                    <a href="/services/cloud-infrastructure/cloud-setup" className="submenu-item"><EditableText as="span" contentKey="nav.services.cloud.setup" defaultValue="Cloud Setup" /></a>
                    <a href="/services/cloud-infrastructure/virtual-servers" className="submenu-item"><EditableText as="span" contentKey="nav.services.cloud.servers" defaultValue="Virtual Servers" /></a>
                    <a href="/services/cloud-infrastructure/virtual-desktops" className="submenu-item"><EditableText as="span" contentKey="nav.services.cloud.desktops" defaultValue="Virtual Desktops" /></a>
                    <a href="/services/cloud-infrastructure/it-infrastructure" className="submenu-item"><EditableText as="span" contentKey="nav.services.cloud.planning" defaultValue="IT Planning" /></a>
                  </div>
                </div>

                <div className="dropdown-item-wrapper">
                  <div className="dropdown-item has-submenu" onClick={() => handleSubmenuToggle("assessment")}>
                    <EditableText as="span" contentKey="nav.services.assessment.title" defaultValue="Security Assessment & Compliance" /> <span className="submenu-arrow">›</span>
                  </div>
                  <div className={`submenu ${activeSubmenu === "assessment" ? "show" : ""}`}>
                    <a href="/services/security-assessment/iso27001" className="submenu-item"><EditableText as="span" contentKey="nav.services.assessment.iso" defaultValue="ISO 27001" /></a>
                    <a href="/services/security-assessment/irap" className="submenu-item"><EditableText as="span" contentKey="nav.services.assessment.irap" defaultValue="iRAP" /></a>
                    <a href="/services/security-assessment/soc2" className="submenu-item"><EditableText as="span" contentKey="nav.services.assessment.soc2" defaultValue="SOC 2" /></a>
                    <a href="/services/security-assessment/risk-management" className="submenu-item"><EditableText as="span" contentKey="nav.services.assessment.risk" defaultValue="Risk Management" /></a>
                  </div>
                </div>

                <div className="dropdown-item-wrapper">
                  <div className="dropdown-item has-submenu" onClick={() => handleSubmenuToggle("data")}>
                    <EditableText as="span" contentKey="nav.services.data.title" defaultValue="Data Protection & Recovery" /> <span className="submenu-arrow">›</span>
                  </div>
                  <div className={`submenu ${activeSubmenu === "data" ? "show" : ""}`}>
                    <a href="/services/data-protection/backup" className="submenu-item"><EditableText as="span" contentKey="nav.services.data.backup" defaultValue="Backup" /></a>
                    <a href="/services/data-protection/disaster-recovery" className="submenu-item"><EditableText as="span" contentKey="nav.services.data.disaster" defaultValue="Disaster Recovery" /></a>
                    <a href="/services/data-protection/ransomware-recovery" className="submenu-item"><EditableText as="span" contentKey="nav.services.data.ransomware" defaultValue="Ransomware Recovery" /></a>
                    <a href="/services/data-protection/encryption" className="submenu-item"><EditableText as="span" contentKey="nav.services.data.encryption" defaultValue="Encryption" /></a>
                  </div>
                </div>

              </div>
            </div>

            <a href="/industries" className="nav-link"><EditableText as="span" contentKey="nav.industries" defaultValue="Industries" /></a>

            <div className="nav-dropdown" ref={resourcesRef}>
              <button className="nav-link dropdown-toggle" onClick={toggleResourcesDropdown}>
                <EditableText as="span" contentKey="nav.resources" defaultValue="Resources" />
                <span className={`dropdown-arrow ${resourcesDropdownOpen ? "open" : ""}`}>▼</span>
              </button>
              <div className={`dropdown-menu ${resourcesDropdownOpen ? "show" : ""}`}>
                <a href="/blogs" className="dropdown-item"><EditableText as="span" contentKey="nav.resources.blogs" defaultValue="Blogs" /></a>
                <a href="/guidelines" className="dropdown-item"><EditableText as="span" contentKey="nav.resources.guidelines" defaultValue="Guidelines" /></a>
                <a href="/case-studies" className="dropdown-item"><EditableText as="span" contentKey="nav.resources.caseStudies" defaultValue="Case Studies" /></a>
              </div>
            </div>

            <a href="/promotions" className="nav-link"><EditableText as="span" contentKey="nav.promotions" defaultValue="Promotions" /></a>
            <a href="/contact" className="btn-contact mobile-contact"><EditableText as="span" contentKey="nav.contact" defaultValue="Contact Us" /></a>
          </nav>

          <div className="navbar-right-actions">
            <a href="/contact" className="btn-contact desktop-contact"><EditableText as="span" contentKey="nav.contact" defaultValue="Contact Us" /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
