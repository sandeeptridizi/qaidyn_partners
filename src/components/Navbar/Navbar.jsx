import React, { useState, useEffect } from 'react';
import './Navbar.css';
import LOGO from '../../assets/LOGO.png';

const Navbar = ({ openContactModal }) => {  // Add this prop
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

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
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, 'home')}
            >
              Home
            </a>
            {/* <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, 'about')}
            >
              About Us
            </a>*/}
            <a 
              href="#services" 
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, 'services')}
            >
              Services
            </a>
            <a 
              href="#industries" 
              className={`nav-link ${activeSection === 'industries' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, 'industries')}
            >
              Industries
            </a>
            
            {/* Resources Dropdown */}
            <div className="nav-dropdown">
              <button 
                className={`nav-link dropdown-toggle ${activeSection === 'blogs' ? 'active' : ''}`}
                onClick={toggleResourcesDropdown}
              >
                Resources
                <span className={`dropdown-arrow ${resourcesDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>
              <div className={`dropdown-menu ${resourcesDropdownOpen ? 'show' : ''}`}>
                <a href="#blogs" className="dropdown-item" onClick={(e) => scrollToSection(e, 'blogs')}>
                  Blogs
                </a>
                <a href="#guidelines" className="dropdown-item" onClick={(e) => scrollToSection(e, 'guidelines')}>
                  Guidelines
                </a>
                <a href="#casestudies" className="dropdown-item" onClick={(e) => scrollToSection(e, 'casestudies')}>
                  Case Studies
                </a>
              </div>
            </div>

           {/*  <a 
              href="#promotions" 
              className={`nav-link ${activeSection === 'promotions' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, 'promotions')}
            >
              Promotions
            </a>*/}
            <button className="btn-contact mobile-contact" onClick={openContactModal}>Contact Us</button>
          </nav>
          <button className="btn-contact desktop-contact" onClick={openContactModal}>Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;