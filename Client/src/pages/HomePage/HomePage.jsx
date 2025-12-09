import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar.jsx";

// Hero & CTA images
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.jfif";
import walmartLogo from "../../assets/walmart.png";
// Icons
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";
import icon8 from "../../assets/icon8.png";
import icon9 from "../../assets/icon9.png";
import icon10 from "../../assets/icon10.png";
import icon11 from "../../assets/icon11.png";
import icon12 from "../../assets/icon12.png";
import icon13 from "../../assets/icon13.png";

import icon14 from "../../assets/icon14.png";
import icon15 from "../../assets/icon15.png";

import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";

import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.webp";
import blog3 from "../../assets/blog3.jfif";
import blogimage1 from "../../assets/blogimage1.avif";
import blogimage2 from "../../assets/blogimage2.jfif";
import blogimage3 from "../../assets/blogimage3.avif";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [activeIndustryModal, setActiveIndustryModal] = useState(null);
  const [activeBlogModal, setActiveBlogModal] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navigate = useNavigate();

  const navigateMap = {
    // Modal title → route
    Helpdesk: "/services/managed-it/helpdesk",
    "Devices Setup and Configuration": "/services/managed-it/devices-setup",
    "patch Management": "/services/managed-it/patch-management",
    "Network Management": "/services/managed-it/network-management",
    Backup: "/services/managed-it/backup",
    "Vendor Co-ordination": "/services/managed-it/vendor-coordination",

    "Threat Detection": "/services/managed-security/threat-detection",
    "End Point and Network protection":
      "/services/managed-security/endpoint-protection",
    "Incident Response": "/services/managed-security/incident-response",
    "Continuous Security Monitoring":
      "/services/managed-security/security-monitoring",

    "Cloud Setup and Migration": "/services/cloud-infrastructure/cloud-setup",
    "Virtual Private Servers": "/services/cloud-infrastructure/virtual-servers",
    "Virtual Desktops": "/services/cloud-infrastructure/virtual-desktops",
    "IT Infrastructure and planning":
      "/services/cloud-infrastructure/it-infrastructure",

    "ISO 27001 Assessment and Audit": "/services/security-assessment/iso27001",
    "iRAP Assessment and Audit": "/services/security-assessment/irap",
    "SOC2 Assessment and Audit": "/services/security-assessment/soc2",
    "Risk Management": "/services/security-assessment/risk-management",
    "Policy Development": "/services/security-assessment/policy-development",
    "Security Awareness Training":
      "/services/security-assessment/security-training",

    Backup: "/services/data-protection/backup",
    "Disaster Recovery": "/services/data-protection/disaster-recovery",
    "Ransomware Recovery": "/services/data-protection/ransomware-recovery",
    Encryption: "/services/data-protection/encryption",
  };

  const serviceDetails = {
    0: [
      "Helpdesk",
      "Devices setup and configuration",
      "Patch Management",
      "Network Management",
      "Backup",
      "Vendor Co-ordination",
    ],
    1: [
      "Threat Detection",
      "End Point and Network protection",
      "Incident Response",
      "Continuous Security Monitoring",
    ],
    2: [
      "Cloud Setup and Migration",
      "Virtual Private Servers",
      "Virtual Desktops",
      "IT Infrastructure and planning",
    ],
    3: [
      "ISO 27001 Assessment and Audit",
      "iRAP Assessment and Audit",
      "SOC2 Assessment and Audit",
      "Risk Management",
      "Policy Development",
      "Security Awareness Training",
    ],
    4: ["Backup", "Disaster Recovery", "Ransomware Recovery", "Encryption"],
  };

  const services = [
    {
      title: "Managed IT Services",
      icon: service1,
      description:
        "Comprehensive IT management solutions to streamline your operations and boost productivity.",
    },
    {
      title: "Managed Security Services",
      icon: service2,
      description:
        "Advanced security solutions to protect your digital assets and ensure business continuity.",
    },

    {
      title: "Cloud and Infrastructure Services",
      icon: service3,
      description:
        "Scalable cloud infrastructure designed to grow with your business needs.",
    },

    {
      title: "Security Assessments and compliance",
      icon: service4,
      description:
        "Thorough security audits and compliance management for regulatory peace of mind.",
    },
    {
      title: "Data Protection and Recovery",
      icon: service5,
      description:
        "Robust backup and disaster recovery solutions to safeguard your critical data.",
    },
  ];

  const openServiceModal = (index) => {
    setActiveServiceModal(index);
    document.body.style.overflow = "hidden";
  };

  const closeServiceModal = () => {
    setActiveServiceModal(null);
    document.body.style.overflow = "unset";
  };

  const openIndustryModal = (index) => {
    setActiveIndustryModal(index);
    document.body.style.overflow = "hidden";
  };

  const closeIndustryModal = () => {
    setActiveIndustryModal(null);
    document.body.style.overflow = "unset";
  };

  const openBlogModal = (index) => {
    setActiveBlogModal(index);
    document.body.style.overflow = "hidden";
  };

  const closeBlogModal = () => {
    setActiveBlogModal(null);
    document.body.style.overflow = "unset";
  };

  const openContactModal = () => {
    setContactModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const industries = [
    {
      name: "Healthcare",
      icon: icon1,
      description:
        "Secure and compliant IT solutions tailored for healthcare providers and medical facilities",
      details: [
        "HIPAA-compliant cloud infrastructure and data management",
        "Electronic Health Records (EHR) system integration",
        "Telemedicine platform development and support",
        "Medical device connectivity and IoT solutions",
        "Patient data security and encrypted communication",
        "Healthcare analytics and reporting dashboards",
        "24/7 critical system monitoring and support",
      ],
    },
    {
      name: "Finance and Professional Services",
      icon: icon2,
      description:
        "Reliable technology infrastructure for financial institutions and professional service firms",
      details: [
        "PCI DSS compliant payment processing systems",
        "Secure banking application development",
        "Real-time fraud detection and prevention",
        "Automated compliance and regulatory reporting",
        "High-frequency trading system infrastructure",
        "Client portal and wealth management platforms",
        "Advanced encryption and multi-factor authentication",
      ],
    },
    {
      name: "Education",
      icon: icon3,
      description:
        "Innovative digital solutions empowering educational institutions and e-learning platforms",
      details: [
        "Learning Management System (LMS) implementation",
        "Virtual classroom and video conferencing solutions",
        "Student information system integration",
        "Campus-wide WiFi and network infrastructure",
        "Cloud-based collaboration tools for students and faculty",
        "Cybersecurity awareness training programs",
        "Digital library and resource management systems",
      ],
    },
    {
      name: "Manufacturing",
      icon: icon4,
      description:
        "Smart manufacturing solutions with IoT integration and operational efficiency",
      details: [
        "Industrial IoT sensor deployment and monitoring",
        "Predictive maintenance systems using AI/ML",
        "Supply chain management and tracking solutions",
        "Quality control automation and analytics",
        "Manufacturing Execution Systems (MES) integration",
        "Real-time production monitoring dashboards",
        "Inventory management and warehouse optimization",
      ],
    },
    {
      name: "Logistics",
      icon: icon5,
      description:
        "Advanced supply chain and logistics management systems for seamless operations",
      details: [
        "Real-time fleet tracking and route optimization",
        "Warehouse management system (WMS) implementation",
        "Automated inventory forecasting and replenishment",
        "Last-mile delivery optimization solutions",
        "Transportation management system (TMS) integration",
        "Cross-border compliance and documentation automation",
        "GPS and telematics integration for fleet management",
      ],
    },
    {
      name: "Retail",
      icon: icon6,
      description:
        "Modern retail technology solutions for enhanced customer experience and sales",
      details: [
        "Omnichannel retail platform development",
        "Point of Sale (POS) system integration",
        "Customer relationship management (CRM) solutions",
        "Inventory management across multiple locations",
        "AI-powered personalized recommendation engines",
        "Mobile app development for retail businesses",
        "Customer analytics and shopping behavior insights",
      ],
    },
    {
      name: "Software Companies",
      icon: icon7,
      description:
        "Enterprise-grade infrastructure and DevOps solutions for software development teams",
      details: [
        "CI/CD pipeline setup and automation",
        "Cloud infrastructure management (AWS, Azure, GCP)",
        "Kubernetes and containerization solutions",
        "Development environment standardization",
        "Code quality and security scanning tools",
        "Scalable microservices architecture design",
        "DevSecOps implementation and monitoring",
      ],
    },
    {
      name: "E-Commerce",
      icon: icon8,
      description:
        "Scalable e-commerce platforms with secure payment and inventory management",
      details: [
        "Custom e-commerce platform development",
        "Payment gateway integration and PCI compliance",
        "Shopping cart optimization and checkout flow",
        "Product catalog management systems",
        "Order fulfillment and shipping integration",
        "Customer review and rating systems",
        "Performance optimization for high-traffic sales events",
      ],
    },
  ];

  const blogs = [
    {
      title: "The Future of Cloud Computing in 2025",
      author: "Ranold Jeff",
      authorImage: blogimage1,
      date: "May 4th, 2025",
      image: blog1,
      content: `
        <h3>Introduction</h3>
        <p>Cloud computing continues to revolutionize how businesses operate, and 2025 promises even more exciting developments. As organizations increasingly migrate to cloud-based solutions, understanding the emerging trends becomes crucial for staying competitive.</p>
        
        <h3>Key Trends Shaping Cloud Computing</h3>
        <p><strong>1. Multi-Cloud Strategies:</strong> Businesses are no longer relying on a single cloud provider. Instead, they're adopting multi-cloud approaches to avoid vendor lock-in and optimize costs across different platforms.</p>
        
        <p><strong>2. Edge Computing Integration:</strong> The convergence of cloud and edge computing is enabling faster data processing and reduced latency, particularly beneficial for IoT applications and real-time analytics.</p>
        
        <p><strong>3. AI-Powered Cloud Services:</strong> Artificial Intelligence is being deeply integrated into cloud platforms, offering automated optimization, predictive maintenance, and intelligent resource allocation.</p>
        
        <h3>Security and Compliance</h3>
        <p>With increased cloud adoption comes heightened focus on security. Zero-trust architecture, advanced encryption methods, and automated compliance monitoring are becoming standard practices.</p>
        
        <h3>Conclusion</h3>
        <p>The cloud computing landscape of 2025 offers unprecedented opportunities for businesses willing to embrace these innovations. Organizations that adapt quickly will gain significant competitive advantages in efficiency, scalability, and innovation.</p>
      `,
    },
    {
      title: "Cybersecurity Best Practices for Modern Enterprises",
      author: "Patricia Anderson",
      authorImage: blogimage2,
      date: "Apr 27th, 2025",
      image: blog2,
      content: `
        <h3>The Evolving Threat Landscape</h3>
        <p>Cyber threats are becoming increasingly sophisticated, targeting businesses of all sizes. From ransomware attacks to social engineering scams, organizations must stay vigilant and proactive in their security measures.</p>
        
        <h3>Essential Security Practices</h3>
        <p><strong>1. Multi-Factor Authentication (MFA):</strong> Implementing MFA across all systems is no longer optional. This simple step can prevent up to 99.9% of account compromise attacks.</p>
        
        <p><strong>2. Regular Security Audits:</strong> Conduct quarterly security assessments to identify vulnerabilities before attackers do. Penetration testing and vulnerability scanning should be routine practices.</p>
        
        <p><strong>3. Employee Training:</strong> Human error remains the weakest link in cybersecurity. Regular training sessions help employees recognize phishing attempts and follow security protocols.</p>
        
        <h3>Incident Response Planning</h3>
        <p>Every organization needs a comprehensive incident response plan. This includes clear procedures for detecting, containing, and recovering from security breaches, as well as communication protocols for stakeholders.</p>
        
        <h3>Data Backup and Recovery</h3>
        <p>Implement the 3-2-1 backup rule: three copies of your data, on two different media, with one copy off-site. Regular backup testing ensures you can recover quickly from ransomware or data loss incidents.</p>
        
        <h3>Final Thoughts</h3>
        <p>Cybersecurity is an ongoing journey, not a destination. By implementing these best practices and maintaining a security-first mindset, enterprises can significantly reduce their risk exposure and protect their valuable assets.</p>
      `,
    },
    {
      title: "Digital Transformation: A Comprehensive Guide for Businesses",
      author: "Elaine Luna",
      authorImage: blogimage3,
      date: "Apr 20th, 2025",
      image: blog3,
      content: `
        <h3>Understanding Digital Transformation</h3>
        <p>Digital transformation goes beyond simply adopting new technologies. It's a fundamental reimagining of how organizations deliver value to customers, involving cultural change, operational improvements, and strategic innovation.</p>
        
        <h3>The Four Pillars of Successful Transformation</h3>
        <p><strong>1. Customer-Centric Approach:</strong> Start by understanding your customers' digital expectations. Use data analytics and customer feedback to drive technology decisions that enhance user experience.</p>
        
        <p><strong>2. Agile Processes:</strong> Traditional waterfall approaches don't work in digital transformation. Adopt agile methodologies that allow for rapid iteration, testing, and adaptation based on real-world results.</p>
        
        <p><strong>3. Data-Driven Decision Making:</strong> Leverage analytics and business intelligence tools to make informed decisions. Real-time data insights enable faster responses to market changes and customer needs.</p>
        
        <p><strong>4. Cultural Evolution:</strong> Technology alone won't drive transformation. Foster a culture that embraces change, encourages innovation, and empowers employees to experiment with new approaches.</p>
        
        <h3>Common Pitfalls to Avoid</h3>
        <p>Many digital transformation initiatives fail due to lack of clear vision, insufficient change management, or trying to do too much at once. Start with pilot projects, measure results, and scale successful initiatives gradually.</p>
        
        <h3>Measuring Success</h3>
        <p>Define clear KPIs before starting your transformation journey. These might include customer satisfaction scores, operational efficiency metrics, revenue growth, or employee engagement levels.</p>
        
        <h3>Looking Ahead</h3>
        <p>Digital transformation is not a one-time project but a continuous evolution. Organizations that embrace this mindset and remain flexible in their approach will thrive in the digital economy.</p>
      `,
    },
  ];

  // Define logos array for auto-scroll
  const companyLogos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
      alt: "Airbnb",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
      alt: "HubSpot",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      alt: "Google",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      alt: "Microsoft",
    },
    { src: walmartLogo, alt: "Walmart" },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg",
      alt: "FedEx",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="website-container">
      {/* Header */}
      <header className="header">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="container-full">
          <div className="hero-content">
            <div className="hero-text animate-on-scroll" id="hero-text">
              <h1 className="hero-title">
                Empowering Your Business with Innovative IT Solutions
              </h1>
              <p className="hero-description">
                Transform your digital infrastructure with cutting-edge
                technology solutions designed for modern enterprises. We deliver
                excellence in every project.
              </p>
              <button className="btn-primary" onClick={openContactModal}>
                Discover More
              </button>
            </div>
            <div className="hero-image animate-on-scroll" id="hero-image">
              <img
                src={image1}
                alt="Cloud Computing Illustration"
                className="hero-illustration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section - Auto-scrolling */}
      <section className="logos-section">
        <div className="container-full">
          <div className="logos-container">
            {/* Duplicate logos for infinite scroll effect */}
            {[...companyLogos, ...companyLogos].map((logo, index) => (
              <div key={index} className="logo-item">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section animate-on-scroll" id="services">
        <div className="container-full">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Comprehensive IT solutions designed to elevate your business
            operations and drive sustainable growth
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card-home"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openServiceModal(index)}
              >
                <div className="service-icon-wrapper">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="service-icon-img"
                  />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {activeServiceModal !== null && (
        <div className="service-modal-overlay" onClick={closeServiceModal}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeServiceModal}>
              ×
            </button>
            <div className="modal-header">
              <div className="modal-icon-wrapper">
                <img
                  src={services[activeServiceModal].icon}
                  alt={services[activeServiceModal].title}
                  className="modal-icon-img"
                />
              </div>
              <h3
                className="modal-title"
                onClick={() =>
                  navigate(navigateMap[services[activeServiceModal].title])
                }
              >
                {services[activeServiceModal].title}
              </h3>
              <p className="modal-description">
                {services[activeServiceModal].description}
              </p>
            </div>
            <div className="modal-content">
              <ul className="modal-details-list">
                {serviceDetails[activeServiceModal].map((detail, i) => (
                  <li
                    key={i}
                    className="modal-detail-item"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      backgroundColor: i === 0 ? "#E0F7FA" : "transparent",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(navigateMap[detail])}
                  >
                    <span className="detail-bullet">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Industries Section */}
      <section className="industries-section animate-on-scroll" id="industries">
        <div className="container-full">
          <div className="industries-header">
            <span className="quote-mark">,,</span>
            <h2 className="section-title">Industries we Expertise into</h2>
          </div>
          <p className="section-subtitle">
            Delivering specialized solutions across diverse sectors
          </p>
          <div
            className="industries-grid"
            onClick={() => navigate("/industries")}
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="industry-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="industry-icon-wrapper">
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    className="industry-icon-img"
                  />
                </div>
                <h3 className="industry-title">{industry.name}</h3>
                <p className="industry-description">{industry.description}</p>
                <a
                  href="#"
                  className="industry-link"
                  onClick={(e) => {
                    e.preventDefault();
                    openIndustryModal(index);
                  }}
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Details Modal */}
      {activeIndustryModal !== null && (
        <div className="service-modal-overlay" onClick={closeIndustryModal}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeIndustryModal}>
              ×
            </button>
            <div className="modal-header">
              <div className="modal-icon-wrapper">
                <img
                  src={industries[activeIndustryModal].icon}
                  alt={industries[activeIndustryModal].name}
                  className="modal-icon-img"
                />
              </div>
              <h3 className="modal-title">
                {industries[activeIndustryModal].name}
              </h3>
              <p className="modal-description">
                {industries[activeIndustryModal].description}
              </p>
            </div>
            <div className="modal-content">
              <ul className="modal-details-list">
                {industries[activeIndustryModal].details.map((detail, i) => (
                  <li
                    key={i}
                    className="modal-detail-item"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      backgroundColor: i === 0 ? "#E0F7FA" : "transparent",
                    }}
                  >
                    <span className="detail-bullet">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Success Stats Section */}
      <section className="stats-section animate-on-scroll" id="stats">
        <div className="container-full">
          <div className="stats-content">
            <div className="stats-left">
              <h2 className="stats-title">Our 10 years of Success</h2>
              <p className="stats-subtitle">
                Building trust through excellence and innovation
              </p>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon-wrapper">
                  <img src={icon12} alt="Employees" className="stat-icon-img" />
                </div>
                <div className="stat-value">100+</div>
                <div className="stat-label">Employees working</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon-wrapper">
                  <img
                    src={icon13}
                    alt="Data Storage"
                    className="stat-icon-img"
                  />
                </div>
                <div className="stat-value">2 Million</div>
                <div className="stat-label">Data Stored in Cloud</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon-wrapper">
                  <img src={icon14} alt="Countries" className="stat-icon-img" />
                </div>
                <div className="stat-value">50+</div>
                <div className="stat-label">Countries</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon-wrapper">
                  <img src={icon15} alt="Clients" className="stat-icon-img" />
                </div>
                <div className="stat-value">100+</div>
                <div className="stat-label">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section animate-on-scroll" id="process">
        <div className="container-full">
          <div className="process-content">
            <div className="process-left">
              <h2 className="process-title">Our Process</h2>
              <p className="process-description">
                A streamlined approach to delivering exceptional IT solutions.
                From initial consultation to full implementation, we're with you
                every step of the way.
              </p>
              <a href="/contact" className="btn-primary">
                Get Started
              </a>
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-icon-wrapper">
                  <img
                    src={icon9}
                    alt="Consultation"
                    className="step-icon-img"
                  />
                </div>
                <div className="step-content">
                  <h3 className="step-title">Get consultation</h3>
                  <p className="step-description">
                    Schedule a free consultation to discuss your unique business
                    needs and challenges
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-icon-wrapper">
                  <img
                    src={icon10}
                    alt="Evaluation"
                    className="step-icon-img"
                  />
                </div>
                <div className="step-content">
                  <h3 className="step-title">Service Evaluation</h3>
                  <p className="step-description">
                    Comprehensive assessment of your current infrastructure and
                    tailored solution design
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-icon-wrapper">
                  <img
                    src={icon11}
                    alt="Implementation"
                    className="step-icon-img"
                  />
                </div>
                <div className="step-content">
                  <h3 className="step-title">Start Working</h3>
                  <p className="step-description">
                    Seamless implementation with ongoing support and continuous
                    optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="blogs-section animate-on-scroll" id="blogs">
        <div className="container-full">
          <h2 className="section-title blue-title">Our Blogs</h2>
          <h3 className="section-subtitle-large">Latest Post</h3>
          <div className="blogs-grid">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="blog-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openBlogModal(index)}
              >
                <div className="blog-image">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-image-img"
                  />
                </div>
                <h4 className="blog-title">{blog.title}</h4>
                <div className="blog-meta">
                  <div className="blog-author">
                    <div className="author-avatar">
                      <img
                        src={blog.authorImage}
                        alt={blog.author}
                        className="author-avatar-img"
                      />
                    </div>
                    <span className="author-name">{blog.author}</span>
                  </div>
                  <span className="blog-date">{blog.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      {activeBlogModal !== null && (
        <div className="service-modal-overlay" onClick={closeBlogModal}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeBlogModal}>
              ×
            </button>
            <div className="blog-modal-header">
              <div className="blog-modal-image">
                <img
                  src={blogs[activeBlogModal].image}
                  alt={blogs[activeBlogModal].title}
                  className="blog-modal-image-img"
                />
              </div>
              <h2 className="blog-modal-title">
                {blogs[activeBlogModal].title}
              </h2>
              <div className="blog-modal-meta">
                <div className="blog-modal-author-info">
                  <img
                    src={blogs[activeBlogModal].authorImage}
                    alt={blogs[activeBlogModal].author}
                    className="blog-modal-author-img"
                  />
                  <span className="blog-modal-author">
                    By {blogs[activeBlogModal].author}
                  </span>
                  <span className="blog-modal-date">
                    {blogs[activeBlogModal].date}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="blog-modal-content"
              dangerouslySetInnerHTML={{
                __html: blogs[activeBlogModal].content,
              }}
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="cta-section animate-on-scroll" id="cta">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Partner with us to unlock the full potential of your digital
              infrastructure. Let's build something amazing together.
            </p>

            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
          <div className="cta-image">
            <img
              src={image2}
              alt="Team Collaboration"
              className="cta-illustration-img"
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {contactModalOpen && (
        <div className="service-modal-overlay" onClick={closeContactModal}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeContactModal}>
              ×
            </button>
            <div className="contact-modal-header">
              <h2 className="contact-modal-title">Get in Touch</h2>
              <p className="contact-modal-subtitle">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
            </div>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted! (This is a demo)");
                closeContactModal();
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Acme Corp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interest</label>
                <select id="service" name="service" required>
                  <option value="">Select a service</option>
                  <option value="managed-it">Managed IT Services</option>
                  <option value="security">Managed Security Services</option>
                  <option value="cloud">
                    Cloud and Infrastructure Services
                  </option>
                  <option value="compliance">
                    Security Assessments and Compliance
                  </option>
                  <option value="data-protection">
                    Data Protection and Recovery
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary contact-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <HomeFooter />
    </div>
  );
};

export default HomePage;
