import React, { useEffect, useState } from "react";
import "./Privacypolicy.css";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import Navbar from "../../components/Navbar/Navbar";
import semiCircle from "../../assets/privacypolicy/Vector.png";
import semiCircle2 from "../../assets/privacypolicy/whitelines.png";
import { useEditMode } from "../../components/context/EditModeContext.jsx";

const PrivacyPolicy = ({ onOpenContact }) => {
  const { isEditMode } = useEditMode();

  const [leftDecor, setLeftDecor] = useState(semiCircle);
  const [rightDecor, setRightDecor] = useState(semiCircle2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <main className="privacy-page">
        <div className="privacy-container">

          {/* ===== HERO ===== */}
          <section
            className="privacy-hero"
            contentEditable={isEditMode}
            suppressContentEditableWarning
          >
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-sub">
              Transparent policies to keep your information safe and secure.
            </p>
          </section>

          {/* ===== DOCUMENT CONTENT (SINGLE SECTION LIKE PDF) ===== */}
          <section
            className="privacy-document"
            contentEditable={isEditMode}
            suppressContentEditableWarning
          >
            <p>
              At Qaidyn, we are committed to protecting your personal information
              with the highest standards of security and transparency. Our
              Privacy Policy outlines how we collect, use, store, and safeguard
              your data while providing our IT services. By using our website or
              services, you agree to the practices described in this policy.
            </p>

            <h2>1. Introduction</h2>
            <p>
              Qaidyn (“we”, “our”, or “us”) is committed to safeguarding your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and protect your personal information when you interact
              with our website, services, or communications.
            </p>
            <p>
              We comply with the Australian Privacy Principles (APPs) under the
              Privacy Act 1988. By using our services, you consent to the terms
              outlined in this policy.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>

            <p>A. Personal Information</p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company details</li>
              <li>Job title</li>
              <li>Service-related communication or project details</li>
            </ul>

            <p>B. Technical Information</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Interaction patterns</li>
            </ul>

            <p>C. Service Usage Information</p>
            <ul>
              <li>Support requests</li>
              <li>Subscription details</li>
              <li>Project documentation</li>
              <li>Communication records</li>
            </ul>

            <p>
              We collect information only when necessary for delivering our IT
              services and improving your experience.
            </p>

            <h2>3. How We Collect Your Information</h2>
            <p>We collect data through:</p>
            <ul>
              <li>Website forms (contact or inquiry forms)</li>
              <li>Direct communication (calls, emails, meetings)</li>
              <li>Service usage and onboarding processes</li>
              <li>Cookies and tracking technologies</li>
              <li>Third-party service providers for analytics or hosting</li>
            </ul>

            <h2>4. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide, manage, and support IT services</li>
              <li>Respond to inquiries and customer requests</li>
              <li>Improve service quality and customer experience</li>
              <li>Send updates, alerts, and service notifications</li>
              <li>Billing and account management</li>
              <li>Ensure legal and regulatory compliance</li>
            </ul>

            <p>
              We only use your data for legitimate business purposes and do not
              sell your information to third parties.
            </p>

            <h2>5. Disclosure of Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers assisting with IT operations or analytics</li>
              <li>Professional advisors (legal, financial, compliance)</li>
              <li>Authorities if required by law or court order</li>
            </ul>

            <p>
              All third-party partners are required to follow strict
              confidentiality and security obligations.
            </p>

            <h2>6. Data Security</h2>
            <p>We take data protection seriously and use multiple safeguards, including:</p>
            <ul>
              <li>Encrypted data storage and transfers</li>
              <li>Secure server environments</li>
              <li>Access controls and authentication</li>
              <li>Regular security reviews and risk assessments</li>
            </ul>

            <p>
              Although we follow industry best practices, no system is 100%
              secure.
            </p>

            <h2>7. Data Retention</h2>
            <p>We retain your information only for as long as required to:</p>
            <ul>
              <li>Deliver services</li>
              <li>Meet legal obligations</li>
              <li>Resolve disputes</li>
              <li>Maintain operational records</li>
            </ul>

            <p>
              Once data is no longer required, it is securely deleted or
              anonymized.
            </p>

            <h2>8. Your Rights</h2>
            <p>Under Australian privacy laws, you have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate or outdated data</li>
              <li>Request deletion where applicable</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>You can exercise your rights by contacting us directly.</p>

            <h2>9. Cookies & Tracking Technologies</h2>
            <p>Our website uses cookies to:</p>
            <ul>
              <li>Improve site functionality</li>
              <li>Personalize user experience</li>
              <li>Analyze website performance</li>
              <li>Support security and fraud prevention</li>
            </ul>
            <p>You may disable cookies in your browser settings, but some features may not function correctly.</p>

            <h2>10. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites or tools. We are not responsible for the privacy practices or content of those sites. We advise reviewing their policies before sharing any personal information.
            </p>

            <h2>11. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes in our practices or legal obligations. Updates will be posted on this page with a revised “Last Updated” date
            </p>

            <h2>12. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy or your personal information, please contact us at:
Qaidyn – </p>
            <p>
              Email: <strong>support@qaidyn.com</strong>
            </p>
          </section>

          {/* ===== CTA SECTION (BOTTOM ONLY) ===== */}
           <section
  className="policy_last_container"
  role="region"
  aria-label="Let's work together call to action"
>
  <div
    className="policy_last_inner"
    contentEditable={isEditMode}
    suppressContentEditableWarning={true}
  >
    {/* ✅ LEFT DECOR – INSIDE GREEN BANNER */}
    <img
      src={leftDecor}
      alt=""
      aria-hidden="true"
      className="decor-left"
    />

    <h2 className="work-title">Let's Work Together</h2>
    <p className="work-sub">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
      pulvinar, sapien ac facilisis gravida, velit arcu consequat
    </p>

    <button
      className="ask-btn"
      type="button"
      aria-label="Ask us any questions"
      onClick={() => onOpenContact && onOpenContact()}
    >
      Ask us any Questions
    </button>
  </div>

  {/* RIGHT DECOR – OUTSIDE IS OK */}
  <img
    src={rightDecor}
    alt=""
    aria-hidden="true"
    className="decor-right"
  />

  {/* image upload controls only visible in edit mode */}
  {isEditMode && (
    <div className="policy-image-upload-controls">
      <div className="hero-image-upload">
        <label className="hero-upload-label">
          Change Left Shape:
          <input
            type="file"
            accept="image/*"
            onChange={handleLeftDecorChange}
          />
        </label>
      </div>
      <div className="hero-image-upload">
        <label className="hero-upload-label">
          Change Right Shape:
          <input
            type="file"
            accept="image/*"
            onChange={handleRightDecorChange}
          />
        </label>
      </div>
    </div>
  )}
</section>

        </div>
      </main>

      <HomeFooter />
    </>
  );
};

export default PrivacyPolicy;
