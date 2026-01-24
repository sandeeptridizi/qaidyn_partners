import React, { useEffect } from "react";
import "./TermsConditions.css";
import "../ProvacyPolicy/Privacypolicy.css";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import Navbar from "../../components/Navbar/Navbar";
import EditableText from "../../components/Editable/EditableText.jsx";
import EditableImage from "../../components/Editable/EditableImage.jsx";
import EditableButton from "../../components/Editable/EditableButton.jsx";
import { HomeContentProvider } from "../../hooks/useHomeContent.jsx";
import semiCircle2 from "../../assets/privacypolicy/whitelines.png";

const TermsAndConditions = ({ onOpenContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <main className="termsandconditions-page">
        <div className="termsandconditions-container">

          <section className="termsandconditions-hero">
            <EditableText
              as="h1"
              className="termsandconditions-title"
              contentKey="terms.hero.title"
              defaultValue="Terms & Conditions"
            />
            <EditableText
              as="p"
              className="termsandconditions-sub"
              contentKey="terms.hero.subtitle"
              defaultValue="Understand the rules that guide your use of our services."
            />
          </section>

          <section className="terms-document">
            <EditableText
              as="p"
              contentKey="terms.intro"
              defaultValue='Welcome to Qaidyn Partners. These Terms & Conditions ("Terms") govern your access to and use of our website, services, products, and any related platforms (collectively, "Services"). By accessing or using our Services, you agree to comply with these Terms.'
            />

            <EditableText
              as="h2"
              contentKey="terms.section1.title"
              defaultValue="1. Acceptance of Terms"
            />
            <EditableText
              as="p"
              contentKey="terms.section1.content"
              defaultValue="By accessing our website or using any of our Services, you acknowledge that you have read, understood, and agreed to be bound by these Terms."
            />

            <EditableText
              as="h2"
              contentKey="terms.section2.title"
              defaultValue="2. Eligibility"
            />
            <EditableText
              as="p"
              contentKey="terms.section2.content"
              defaultValue="You must be at least 18 years old to use our Services. By using our platform, you confirm that you meet this requirement."
            />

            <EditableText
              as="h2"
              contentKey="terms.section3.title"
              defaultValue="3. Use of Services"
            />
            <EditableText
              as="p"
              contentKey="terms.section3.intro"
              defaultValue="You agree to use our Services only for lawful purposes and in a way that does not:"
            />
            <ul>
              <li><EditableText as="span" contentKey="terms.section3.item1" defaultValue="Violate applicable laws or regulations" /></li>
              <li><EditableText as="span" contentKey="terms.section3.item2" defaultValue="Infringe on the rights of others" /></li>
              <li><EditableText as="span" contentKey="terms.section3.item3" defaultValue="Attempt unauthorized access or disruption" /></li>
            </ul>
            <EditableText
              as="p"
              contentKey="terms.section3.closing"
              defaultValue="We reserve the right to suspend or block access to users who misuse the platform."
            />

            <EditableText
              as="h2"
              contentKey="terms.section4.title"
              defaultValue="4. Account Responsibilities"
            />
            <EditableText
              as="p"
              contentKey="terms.section4.intro"
              defaultValue="If you create an account, you are responsible for:"
            />
            <ul>
              <li><EditableText as="span" contentKey="terms.section4.item1" defaultValue="Providing accurate information" /></li>
              <li><EditableText as="span" contentKey="terms.section4.item2" defaultValue="Maintaining account confidentiality" /></li>
              <li><EditableText as="span" contentKey="terms.section4.item3" defaultValue="Accepting responsibility for account activity" /></li>
            </ul>

            <EditableText
              as="h2"
              contentKey="terms.section5.title"
              defaultValue="5. Intellectual Property Rights"
            />
            <EditableText
              as="p"
              contentKey="terms.section5.content"
              defaultValue="All content, designs, graphics, trademarks, logos, and software available through our Services are the exclusive property of Qaidyn Partners or its licensors. You may not reproduce, modify, distribute, or use any content without written permission."
            />

            <EditableText
              as="h2"
              contentKey="terms.section6.title"
              defaultValue="6. Service Modifications"
            />
            <EditableText
              as="p"
              contentKey="terms.section6.content"
              defaultValue="We may update, modify, or discontinue parts of our Services at any time. We are not liable for any impact this may cause."
            />

            <EditableText
              as="h2"
              contentKey="terms.section7.title"
              defaultValue="7. Third-Party Links"
            />
            <EditableText
              as="p"
              contentKey="terms.section7.content"
              defaultValue="Our website may contain links to third-party websites. We do not control or take responsibility for their content or policies."
            />

            <EditableText
              as="h2"
              contentKey="terms.section8.title"
              defaultValue="8. Payments & Billing"
            />
            <ul>
              <li><EditableText as="span" contentKey="terms.section8.item1" defaultValue="Payments must be made on time" /></li>
              <li><EditableText as="span" contentKey="terms.section8.item2" defaultValue="Fees may be non-refundable" /></li>
              <li><EditableText as="span" contentKey="terms.section8.item3" defaultValue="Pricing may change with notice" /></li>
            </ul>

            <EditableText
              as="h2"
              contentKey="terms.section9.title"
              defaultValue="9. Data & Privacy"
            />
            <EditableText
              as="p"
              contentKey="terms.section9.content"
              defaultValue="Your privacy is important to us. Personal information is handled according to our Privacy Policy."
            />

            <EditableText
              as="h2"
              contentKey="terms.section10.title"
              defaultValue="10. Limitation of Liability"
            />
            <ul>
              <li><EditableText as="span" contentKey="terms.section10.item1" defaultValue="No liability for data or profit loss" /></li>
              <li><EditableText as="span" contentKey="terms.section10.item2" defaultValue="No responsibility for service interruptions" /></li>
            </ul>

            <EditableText
              as="h2"
              contentKey="terms.section11.title"
              defaultValue="11. Indemnification"
            />
            <ul>
              <li><EditableText as="span" contentKey="terms.section11.item1" defaultValue="Misuse of services" /></li>
              <li><EditableText as="span" contentKey="terms.section11.item2" defaultValue="Violation of terms" /></li>
              <li><EditableText as="span" contentKey="terms.section11.item3" defaultValue="Legal non-compliance" /></li>
            </ul>

            <EditableText
              as="h2"
              contentKey="terms.section12.title"
              defaultValue="12. Termination"
            />
            <EditableText
              as="p"
              contentKey="terms.section12.content"
              defaultValue="We may terminate access if these Terms are violated. You may stop using our Services at any time."
            />

            <EditableText
              as="h2"
              contentKey="terms.section13.title"
              defaultValue="13. Governing Law"
            />
            <EditableText
              as="p"
              contentKey="terms.section13.content"
              defaultValue="These Terms are governed by the laws of Australia."
            />

            <EditableText
              as="h2"
              contentKey="terms.section14.title"
              defaultValue="14. Changes to Terms"
            />
            <EditableText
              as="p"
              contentKey="terms.section14.content"
              defaultValue="Continued use of our Services after updates means you accept the revised Terms."
            />

            <EditableText
              as="h2"
              contentKey="terms.section15.title"
              defaultValue="15. Contact Us"
            />
            <EditableText
              as="p"
              contentKey="terms.section15.company"
              defaultValue="Qaidyn Partners"
            />
            <EditableText
              as="p"
              contentKey="terms.section15.email"
              defaultValue="Email: info@qaidyn.com"
            />
            <EditableText
              as="p"
              contentKey="terms.section15.phone"
              defaultValue="Phone: +61 XXXXXXXX"
            />
            <EditableText
              as="p"
              contentKey="terms.section15.address"
              defaultValue="Address: Australia"
            />
          </section>

          <section className="policy_last_container">
            <div className="policy_last_inner terms-cta">
              <EditableText
                as="h2"
                className="work-title"
                contentKey="terms.cta.title"
                defaultValue="Let's Work Together"
              />
              <EditableText
                as="p"
                className="work-sub"
                contentKey="terms.cta.subtitle"
                defaultValue="Have questions about our terms or services? Our team is here to help."
              />
              <EditableButton
                contentKey="terms.cta.askQuestions.button"
                defaultValue="Ask us any Questions"
                className="ask-btn"
                onClick={() => onOpenContact && onOpenContact()}
              />
            </div>

            <EditableImage
              contentKey="terms.cta.decorRight"
              defaultValue={semiCircle2}
              alt="Decoration"
              className="decor-right"
            />
          </section>
        </div>
      </main>

      <HomeFooter />
    </>
  );
};

const TermsAndConditionsWrapper = ({ onOpenContact }) => {
  return (
    <HomeContentProvider>
      <TermsAndConditions onOpenContact={onOpenContact} />
    </HomeContentProvider>
  );
};

export default TermsAndConditionsWrapper;
