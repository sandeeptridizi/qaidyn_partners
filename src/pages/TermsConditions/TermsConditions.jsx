import React, { useEffect } from "react";
import "./TermsConditions.css";
import "../ProvacyPolicy/Privacypolicy.css";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import Navbar from "../../components/Navbar/Navbar";
import semiCircle2 from "../../assets/privacypolicy/whitelines.png";
import { useEditMode } from "../../components/context/EditModeContext.jsx";

const TermsAndConditions = ({ onOpenContact }) => {
  const { isEditMode } = useEditMode();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <main className="termsandconditions-page">
        <div className="termsandconditions-container">
          {/* HERO */}
          <section
            className="termsandconditions-hero"
            contentEditable={isEditMode}
            suppressContentEditableWarning
          >
            <h1 className="termsandconditions-title">Terms & Conditions</h1>
            <p className="termsandconditions-sub">
              Understand the rules that guide your use of our services.
            </p>
          </section>
          <section
            className="terms-document"
            contentEditable={isEditMode}
            suppressContentEditableWarning
          >
            <p>
              Welcome to Qaidyn Partners. These Terms & Conditions ("Terms") govern
              your access to and use of our website, services, products, and any
              related platforms (collectively, "Services"). By accessing or using
              our Services, you agree to comply with these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing our website or using any of our Services, you
              acknowledge that you have read, understood, and agreed to be bound
              by these Terms.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              You must be at least 18 years old to use our Services. By using our
              platform, you confirm that you meet this requirement.
            </p>

            <h2>3. Use of Services</h2>
            <p>You agree to use our Services only for lawful purposes and in a way that does not:</p>
            <ul>
              <li>Violate applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Attempt unauthorized access or disruption</li>
            </ul>
            <p>
              We reserve the right to suspend or block access to users who misuse
              the platform.
            </p>

            <h2>4. Account Responsibilities</h2>
            <p>If you create an account, you are responsible for:</p>
            <ul>
              <li>Providing accurate information</li>
              <li>Maintaining account confidentiality</li>
              <li>Accepting responsibility for account activity</li>
            </ul>

            <h2>5. Intellectual Property Rights</h2>
            <p>
              All content, designs, graphics, trademarks, logos, and software
              available through our Services are the exclusive property of Qaidyn
              Partners or its licensors. You may not reproduce, modify,
              distribute, or use any content without written permission.
            </p>

            <h2>6. Service Modifications</h2>
            <p>
              We may update, modify, or discontinue parts of our Services at any
              time. We are not liable for any impact this may cause.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We do not
              control or take responsibility for their content or policies.
            </p>

            <h2>8. Payments & Billing</h2>
            <ul>
              <li>Payments must be made on time</li>
              <li>Fees may be non-refundable</li>
              <li>Pricing may change with notice</li>
            </ul>

            <h2>9. Data & Privacy</h2>
            <p>
              Your privacy is important to us. Personal information is handled
              according to our Privacy Policy.
            </p>

            <h2>10. Limitation of Liability</h2>
            <ul>
              <li>No liability for data or profit loss</li>
              <li>No responsibility for service interruptions</li>
            </ul>

            <h2>11. Indemnification</h2>
            <ul>
              <li>Misuse of services</li>
              <li>Violation of terms</li>
              <li>Legal non-compliance</li>
            </ul>

            <h2>12. Termination</h2>
            <p>
              We may terminate access if these Terms are violated. You may stop
              using our Services at any time.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Australia.
            </p>

            <h2>14. Changes to Terms</h2>
            <p>
              Continued use of our Services after updates means you accept the
              revised Terms.
            </p>

            <h2>15. Contact Us</h2>
            <p>Qaidyn Partners</p>
            <p>Email: info@qaidyn.com</p>
            <p>Phone: +61 XXXXXXXX</p>
            <p>Address: Australia</p>
          </section>

          {/* CTA */}
          <section className="policy_last_container">
            <div className="policy_last_inner terms-cta">
              <h2 className="work-title">Let's Work Together</h2>
              <p className="work-sub">
                Have questions about our terms or services? Our team is here to help.
              </p>
              <button
                className="ask-btn"
                type="button"
                onClick={() => onOpenContact && onOpenContact()}
              >
                Ask us any Questions
              </button>
            </div>

            <img src={semiCircle2} alt="" className="decor-right" />
          </section>
        </div>
      </main>

      <HomeFooter />
    </>
  );
};

export default TermsAndConditions;