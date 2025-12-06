// Guidelines.jsx
import React, { useEffect, useState } from "react";
import "./Guidelines.css";
import "../casestudies/CaseStudies.css"
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/Navbar";
import timelineImg from "../../assets/casestudies/Vector 2.png";
import step2Img from "../../assets/casestudies/Frame 47.png";
import step3Img from "../../assets/casestudies/Frame 48.png";
import step4Img from "../../assets/casestudies/Frame 49.png";

const guidelinesData = [
  {
    id: 1,
    title: "Full Stack Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases, and APIs using Node.js, Python, or Ruby...",
  },
  {
    id: 2,
    title: "React Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining reusable UI components...",
  },
  {
    id: 3,
    title: "Flutter Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Designing and implementing cross-platform mobile applications using Flutter. Building beautiful, natively compiled apps for mobile, web, and desktop...",
  },
  {
    id: 4,
    title: "Php Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Building and maintaining backend systems using PHP and frameworks like Laravel or Symfony. Developing RESTful APIs and server-side logic...",
  },
  {
    id: 5,
    title: "Mern Stack Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Building full-stack applications using MongoDB, Express.js, React, and Node.js (MERN). End-to-end development from frontend to backend...",
  },
];

const Guidelines = () => {
  const [activeId, setActiveId] = useState(1); // First card active by default

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (id) => {
    setActiveId(id);
  };

  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <div className="guidelines-container">
        <div className="guidelinesheading">
          <h1>Lorem ipsum dolor</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="guidelines_timeline">
          {guidelinesData.map((item, index) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`guidelines_timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                } ${isActive ? "active" : ""}`}
                onClick={() => handleCardClick(item.id)}
              >
                <div
                  className={`guidelines_timeline-marker ${
                    isActive ? "active-marker" : ""
                  }`}
                >
                  <span className="guidelines_number">
                    {String(item.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="guidelines_timeline-content">
                  {/* {isActive ? "" : ""} */}
                  <h3>{item.title}</h3>
                  <div className="guidelines_tags">
                    <span className="guidelines_tag level">{item.level}</span>
                    <span className="guidelines_tag channel">
                      {item.channel}
                    </span>
                    <span className="guidelines_tag medium">{item.medium}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <section className="cs-how">
        <h2>How It Works</h2>

        <div className="cs-timeline">
          {/* blue rectangle line image */}
          <img src={timelineImg} alt="" className="cs-timeline-bg" />

          <div className="cs-steps">
            {/* STEP 1 – keep as is (text + pill + dot) */}
            <div className="cs-step cs-step-1">
              <div className="cs-num">1</div>

              <p className="cs-step-desc-top">
                Cyber safety, crime prevention,
                <br />
                defense, or enterprise security.
              </p>

              <div className="cs-pill cs-pill-top">Select Your Focus</div>

              <div className="cs-dot" />
            </div>

            {/* STEP 2 – use Frame 47.png */}
            <div className="cs-step cs-step-2">
              <div className="cs-num">2</div>
              <img
                src={step2Img}
                alt="Get connected with cybersecurity & defense experts"
                className="cs-step-img"
              />
            </div>

            {/* STEP 3 – use Frame 48.png */}
            <div className="cs-step cs-step-3">
              <div className="cs-num">3</div>
              <img
                src={step3Img}
                alt="Book Advisory – chat, video consultation, or workshops"
                className="cs-step-img"
              />
            </div>

            {/* STEP 4 – use Frame 49.png */}
            <div className="cs-step cs-step-4">
              <img
                src={step4Img}
                alt="Stay Protected – apply strategies for safety"
                className="cs-step-img"
              />
              <div className="cs-num cs-num-bottom">4</div>
            </div>
          </div>
        </div>
      </section>
      <section className="core-services-section">
        <div className="core-services-container">
          <h2 className="core-services-title">
            Our Core Services & Industries
          </h2>

          <div className="core-services-grid">
            {/* Service 1 */}
            <div className="service-card">
              {/* <div className="service-icon">
                <span className="icon-monitor">Monitor</span>
              </div> */}
              <h3>Managed IT Services</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pulvinar, sapien ac facilisis gravida, velit arcu consequat
              </p>
              <a href="#" className="learn-more">
                Learn More <span>→</span>
              </a>
            </div>

            {/* Service 2 */}
            <div className="service-card highlighted">
              {/* <div className="service-icon">
                <span className="icon-shield">Shield</span>
              </div> */}
              <h3>Managed Security Services</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pulvinar, sapien ac facilisis gravida, velit arcu consequat
              </p>
              <a href="#" className="learn-more">
                Learn More <span>→</span>
              </a>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              {/* <div className="service-icon">
                <span className="icon-cloud">Cloud</span>
              </div> */}
              <h3>Cloud and Infrastructure services</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pulvinar, sapien ac facilisis gravida, velit arcu consequat
              </p>
              <a href="#" className="learn-more">
                Learn More <span>→</span>
              </a>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              {/* <div className="service-icon">
                <span className="icon-check">Check</span>
              </div> */}
              <h3>Security Assessments and compliance</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pulvinar, sapien ac facilisis gravida, velit arcu consequat
              </p>
              <a href="#" className="learn-more">
                Learn More <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Guidelines;
