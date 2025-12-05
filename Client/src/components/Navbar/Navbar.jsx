import React, { useState, useEffect } from 'react';
import './Navbar.css';
import LOGO from '../../assets/LOGO.png';

const Navbar = ({ openContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  
  // State for each service submenu
  const [managedITSubmenuOpen, setManagedITSubmenuOpen] = useState(false);
  const [cloudInfraSubmenuOpen, setCloudInfraSubmenuOpen] = useState(false);
  const [dataProtectionSubmenuOpen, setDataProtectionSubmenuOpen] = useState(false);
  const [managedSecuritySubmenuOpen, setManagedSecuritySubmenuOpen] = useState(false);
  const [securityAssessmentSubmenuOpen, setSecurityAssessmentSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'industries', 'blogs', 'promotions'];
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
      setResourcesDropdownOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!resourcesDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <header className="header">
      <div className="container-full">
        <div className="nav-wrapper">
          <div className="logo">
            <img src={LOGO} alt="Qaidyn Partners Logo" className="logo-image" />
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <nav className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="/" className="nav-link">
              Home
            </a>

            <a href="/about" className="nav-link">
              About Us
            </a>
            
            {/* Services Dropdown with Submenus */}
            <div className="nav-dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={toggleServicesDropdown}
              >
                Services
                <span className={`dropdown-arrow ${servicesDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>
              <div className={`dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
                
                {/* Managed IT Services with Submenu */}
                <div className="dropdown-item-wrapper">
                  <div 
                    className="dropdown-item has-submenu"
                    onClick={() => setManagedITSubmenuOpen(!managedITSubmenuOpen)}
                  >
                    Managed IT Services
                    <span className={`submenu-arrow ${managedITSubmenuOpen ? 'open' : ''}`}>›</span>
                  </div>
                  <div className={`submenu ${managedITSubmenuOpen ? 'show' : ''}`}>
                    <a href="/services/managed-it/helpdesk" className="submenu-item">
                      Helpdesk
                    </a>
                    <a href="/services/managed-it/devices-setup" className="submenu-item">
                      Devices Setup and Configuration
                    </a>
                    <a href="/services/managed-it/patch-management" className="submenu-item">
                      Patch Management
                    </a>
                    <a href="/services/managed-it/network-management" className="submenu-item">
                      Network Management
                    </a>
                    <a href="/services/managed-it/backup" className="submenu-item">
                      Backup
                    </a>
                    <a href="/services/managed-it/vendor-coordination" className="submenu-item">
                      Vendor Co-ordination
                    </a>
                  </div>
                </div>

                {/* Managed Security Services with Submenu */}
                <div className="dropdown-item-wrapper">
                  <div 
                    className="dropdown-item has-submenu"
                    onClick={() => setManagedSecuritySubmenuOpen(!managedSecuritySubmenuOpen)}
                  >
                    Managed Security Services
                    <span className={`submenu-arrow ${managedSecuritySubmenuOpen ? 'open' : ''}`}>›</span>
                  </div>
                  <div className={`submenu ${managedSecuritySubmenuOpen ? 'show' : ''}`}>
                    <a href="/services/managed-security/threat-detection" className="submenu-item">
                      Threat Detection
                    </a>
                    <a href="/services/managed-security/endpoint-protection" className="submenu-item">
                      End Point and Network Protection
                    </a>
                    <a href="/services/managed-security/incident-response" className="submenu-item">
                      Incident Response
                    </a>
                    <a href="/services/managed-security/security-monitoring" className="submenu-item">
                      Continuous Security Monitoring
                    </a>
                  </div>
                </div>

                {/* Cloud and Infrastructure Services with Submenu */}
                <div className="dropdown-item-wrapper">
                  <div 
                    className="dropdown-item has-submenu"
                    onClick={() => setCloudInfraSubmenuOpen(!cloudInfraSubmenuOpen)}
                  >
                    Cloud and Infrastructure Services
                    <span className={`submenu-arrow ${cloudInfraSubmenuOpen ? 'open' : ''}`}>›</span>
                  </div>
                  <div className={`submenu ${cloudInfraSubmenuOpen ? 'show' : ''}`}>
                    <a href="/services/cloud-infrastructure/cloud-setup" className="submenu-item">
                      Cloud Setup and Migration
                    </a>
                    <a href="/services/cloud-infrastructure/virtual-servers" className="submenu-item">
                      Virtual Private Servers
                    </a>
                    <a href="/services/cloud-infrastructure/virtual-desktops" className="submenu-item">
                      Virtual Desktops
                    </a>
                    <a href="/services/cloud-infrastructure/it-infrastructure" className="submenu-item">
                      IT Infrastructure and Planning
                    </a>
                  </div>
                </div>

                {/* Security Assessments with Submenu */}
                <div className="dropdown-item-wrapper">
                  <div 
                    className="dropdown-item has-submenu"
                    onClick={() => setSecurityAssessmentSubmenuOpen(!securityAssessmentSubmenuOpen)}
                  >
                    Security Assessments and Compliance
                    <span className={`submenu-arrow ${securityAssessmentSubmenuOpen ? 'open' : ''}`}>›</span>
                  </div>
                  <div className={`submenu ${securityAssessmentSubmenuOpen ? 'show' : ''}`}>
                    <a href="/services/security-assessment/iso27001" className="submenu-item">
                      ISO 27001 Assessment and Audit
                    </a>
                    <a href="/services/security-assessment/irap" className="submenu-item">
                      iRAP Assessment and Audit
                    </a>
                    <a href="/services/security-assessment/soc2" className="submenu-item">
                      SOC2 Assessment and Audit
                    </a>
                    <a href="/services/security-assessment/risk-management" className="submenu-item">
                      Risk Management
                    </a>
                    <a href="/services/security-assessment/policy-development" className="submenu-item">
                      Policy Development
                    </a>
                    <a href="/services/security-assessment/security-training" className="submenu-item">
                      Security Awareness Training
                    </a>
                  </div>
                </div>

                {/* Data Protection with Submenu */}
                <div className="dropdown-item-wrapper">
                  <div 
                    className="dropdown-item has-submenu"
                    onClick={() => setDataProtectionSubmenuOpen(!dataProtectionSubmenuOpen)}
                  >
                    Data Protection and Recovery
                    <span className={`submenu-arrow ${dataProtectionSubmenuOpen ? 'open' : ''}`}>›</span>
                  </div>
                  <div className={`submenu ${dataProtectionSubmenuOpen ? 'show' : ''}`}>
                    <a href="/services/data-protection/backup" className="submenu-item">
                      Backup
                    </a>
                    <a href="/services/data-protection/disaster-recovery" className="submenu-item">
                      Disaster Recovery
                    </a>
                    <a href="/services/data-protection/ransomware-recovery" className="submenu-item">
                      Ransomware Recovery
                    </a>
                    <a href="/services/data-protection/encryption" className="submenu-item">
                      Encryption
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a href="/industries" className="nav-link">
              Industries
            </a>
            
            {/* Resources Dropdown */}
            <div className="nav-dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={toggleResourcesDropdown}
              >
                Resources
                <span className={`dropdown-arrow ${resourcesDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>
              <div className={`dropdown-menu ${resourcesDropdownOpen ? 'show' : ''}`}>
                <a href="/blogs" className="dropdown-item">
                  Blogs
                </a>
                <a href="/guidelines" className="dropdown-item">
                  Guidelines
                </a>
                <a href="/case-studies" className="dropdown-item">
                  Case Studies
                </a>
              </div>
            </div>
            <a href="/promotions" className="nav-link">
              Promotions
            </a>
<a href="/contact" className="btn-contact mobile-contact">
  Contact Us
</a>
          </nav>
          
          <a href="/contact" className="btn-contact desktop-contact">
  Contact Us
</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;