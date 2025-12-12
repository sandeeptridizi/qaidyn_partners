// Guidelines.jsx
import React, { useEffect, useState } from "react";
import "./Guidelines.css";
import "../casestudies/CaseStudies.css";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/Navbar";
import timelineImgFile from "../../assets/casestudies/Vector 2.png";
import step2ImgFile from "../../assets/casestudies/Frame 47.png";
import step3ImgFile from "../../assets/casestudies/Frame 48.png";
import step4ImgFile from "../../assets/casestudies/Frame 49.png";

// ⭐ EDIT MODE
import { useEditMode } from "../../components/context/EditModeContext.jsx";

const guidelinesDataDefault = [
  {
    id: 1,
    title: "Full Stack Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic...",
  },
  {
    id: 2,
    title: "React Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React. Building reusable UI components...",
  },
  {
    id: 3,
    title: "Flutter Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Designing and implementing cross-platform mobile applications using Flutter. Building beautiful, natively compiled apps...",
  },
  {
    id: 4,
    title: "Php Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Building and maintaining backend systems using PHP and frameworks like Laravel or Symfony. Developing RESTful APIs...",
  },
  {
    id: 5,
    title: "Mern Stack Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Building full-stack applications using MongoDB, Express.js, React, and Node.js (MERN). End-to-end development...",
  },
];

const Guidelines = () => {
  const { isEditMode } = useEditMode();

  const [activeId, setActiveId] = useState(1);

  // ⭐ Editable text content
  const [guidelinesData, setGuidelinesData] = useState(guidelinesDataDefault);

  const handleTextChange = (id, field, value) => {
    setGuidelinesData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // ⭐ Editable images
  const [timelineImage, setTimelineImage] = useState(timelineImgFile);
  const [step2Image, setStep2Image] = useState(step2ImgFile);
  const [step3Image, setStep3Image] = useState(step3ImgFile);
  const [step4Image, setStep4Image] = useState(step4ImgFile);

  const handleImageChange = (setter) => (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setter(url);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      {/* PAGE WRAPPER */}
      <div className="guidelines-container">
        {/* TOP HEADING */}
        <div
          className="guidelinesheading"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <h1>Lorem ipsum dolor</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s...
          </p>
        </div>

        {/* TIMELINE SECTION */}
        <div className="guidelines_timeline">
          {guidelinesData.map((item, index) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`guidelines_timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                } ${isActive ? "active" : ""}`}
                onClick={() => setActiveId(item.id)}
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

                <div
                  className="guidelines_timeline-content"
                  contentEditable={isEditMode}
                  suppressContentEditableWarning={true}
                  onInput={(e) =>
                    handleTextChange(item.id, "description", e.target.innerText)
                  }
                >
                  <h3
                    onInput={(e) =>
                      handleTextChange(item.id, "title", e.target.innerText)
                    }
                  >
                    {item.title}
                  </h3>

                  <div className="guidelines_tags">
                    <span className="guidelines_tag level">{item.level}</span>
                    <span className="guidelines_tag channel">{item.channel}</span>
                    <span className="guidelines_tag medium">{item.medium}</span>
                  </div>

                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="cs-how">
        <h2 contentEditable={isEditMode} suppressContentEditableWarning={true}>
          How It Works
        </h2>

        <div className="cs-timeline">
          <img src={timelineImage} alt="" className="cs-timeline-bg" />

          {isEditMode && (
            <label className="cs-upload-label">
              Change Timeline Image
              <input type="file" accept="image/*" onChange={handleImageChange(setTimelineImage)} />
            </label>
          )}

          <div className="cs-steps">
            {/* STEP 1 */}
            <div
              className="cs-step cs-step-1"
              contentEditable={isEditMode}
              suppressContentEditableWarning={true}
            >
              <div className="cs-num">1</div>
              <p className="cs-step-desc-top">
                Cyber safety, crime prevention,
                <br />
                defense, or enterprise security.
              </p>
              <div className="cs-pill cs-pill-top">Select Your Focus</div>
              <div className="cs-dot" />
            </div>

            {/* STEP 2 */}
            <div className="cs-step cs-step-2">
              <div className="cs-num">2</div>
              <img src={step2Image} className="cs-step-img" alt="" />

              {isEditMode && (
                <label className="cs-upload-label">
                  Change Step 2 Image
                  <input type="file" accept="image/*" onChange={handleImageChange(setStep2Image)} />
                </label>
              )}
            </div>

            {/* STEP 3 */}
            <div className="cs-step cs-step-3">
              <div className="cs-num">3</div>
              <img src={step3Image} className="cs-step-img" alt="" />

              {isEditMode && (
                <label className="cs-upload-label">
                  Change Step 3 Image
                  <input type="file" accept="image/*" onChange={handleImageChange(setStep3Image)} />
                </label>
              )}
            </div>

            {/* STEP 4 */}
            <div className="cs-step cs-step-4">
              <img src={step4Image} className="cs-step-img" alt="" />
              <div className="cs-num cs-num-bottom">4</div>

              {isEditMode && (
                <label className="cs-upload-label">
                  Change Step 4 Image
                  <input type="file" accept="image/*" onChange={handleImageChange(setStep4Image)} />
                </label>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES (editable) */}
      <section className="core-services-section">
        <div
          className="core-services-container"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <h2 className="core-services-title">
            Our Core Services & Industries
          </h2>

          <div className="core-services-grid">
            <div className="service-card">
              <h3>Managed IT Services</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pulvinar, sapien ac facilisis gravida.
              </p>
              <a href="#" className="learn-more">
                Learn More → 
              </a>
            </div>

            <div className="service-card highlighted">
              <h3>Managed Security Services</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pulvinar, sapien ac facilisis gravida.
              </p>
              <a href="#" className="learn-more">
                Learn More →
              </a>
            </div>

            <div className="service-card">
              <h3>Cloud and Infrastructure services</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pulvinar, sapien ac facilisis gravida.
              </p>
              <a href="#" className="learn-more">
                Learn More →
              </a>
            </div>

            <div className="service-card">
              <h3>Security Assessments and compliance</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pulvinar, sapien ac facilisis gravida.
              </p>
              <a href="#" className="learn-more">
                Learn More →
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
