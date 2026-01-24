import React, { useEffect } from "react";
import "./Privacypolicy.css";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import Navbar from "../../components/Navbar/Navbar";
import EditableText from "../../components/Editable/EditableText.jsx";
import EditableImage from "../../components/Editable/EditableImage.jsx";
import EditableButton from "../../components/Editable/EditableButton.jsx";
import { HomeContentProvider } from "../../hooks/useHomeContent.jsx";
import semiCircle from "../../assets/privacypolicy/Vector.png";
import semiCircle2 from "../../assets/privacypolicy/whitelines.png";

const PrivacyPolicy = ({ onOpenContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <main className="privacy-page">
        <div className="privacy-container">
          <section className="privacy-hero">
            <EditableText
              as="h1"
              className="privacy-title"
              contentKey="privacy.hero.title"
              defaultValue="Privacy Policy"
            />
            <EditableText
              as="p"
              className="privacy-sub"
              contentKey="privacy.hero.description"
              defaultValue="Transparent policies to keep your information safe and secure."
            />
          </section>

          <section className="privacy-document">
            <EditableText
              as="p"
              contentKey="privacy.intro"
              defaultValue="At Qaidyn, we are committed to protecting your personal information with the highest standards of security and transparency. Our Privacy Policy outlines how we collect, use, store, and safeguard your data while providing our IT services. By using our website or services, you agree to the practices described in this policy."
            />

            <EditableText
              as="h2"
              contentKey="privacy.section1.title"
              defaultValue="1. Introduction"
            />
            <EditableText
              as="p"
              contentKey="privacy.section1.p1"
              defaultValue='Qaidyn ("we", "our", or "us") is committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you interact with our website, services, or communications.'
            />
            <EditableText
              as="p"
              contentKey="privacy.section1.p2"
              defaultValue="We comply with the Australian Privacy Principles (APPs) under the Privacy Act 1988. By using our services, you consent to the terms outlined in this policy."
            />

            <EditableText
              as="h2"
              contentKey="privacy.section2.title"
              defaultValue="2. Information We Collect"
            />
            <EditableText
              as="p"
              contentKey="privacy.section2.intro"
              defaultValue="We may collect the following types of information:"
            />

            <EditableText
              as="p"
              contentKey="privacy.section2.typeA"
              defaultValue="A. Personal Information"
            />
            <ul>
              <li><EditableText as="span" contentKey="privacy.section2.personal.item1" defaultValue="Full name" /></li>
              <li><EditableText as="span" contentKey="privacy.section2.personal.item2" defaultValue="Email address" /></li>
              <li><EditableText as="span" contentKey="privacy.section2.personal.item3" defaultValue="Phone number" /></li>
              <li><EditableText as="span" contentKey="privacy.section2.personal.item4" defaultValue="Company details" /></li>
              <li><EditableText as="span" contentKey="privacy.section2.personal.item5" defaultValue="Job title" /></li>
              <li><EditableText as="span" contentKey="privacy.section2.personal.item6" defaultValue="Service-related communication or project details" /></li>
            </ul>

            <EditableText
              as="p"
              contentKey="privacy.section2.typeB"
              defaultValue="B. Technical Information"
            />
            <ul>
              <li><EditableText as="span" contentKey="privacy.section2.technical.item1" defaultValue="IP address" /></li>
              <li><EditableText as="span" contentKey="privacy.section2.technical.item2" defaultValue="Browser type and version" /></li>
              <li><EditableText as="span" contentKey="privacy.section2.technical.item3" defaultValue="Device information" /></li>
              <li><EditableText as="span" contentKey="privacy.section2.technical.item4" defaultValue="Pages visited" /></li>
              <li><EditableText as="span" contentKey="privacy.section2.technical.item5" defaultValue="Interaction patterns" /></li>
            </ul>

            <EditableText
              as="p"
              contentKey="privacy.section2.typeC"
              defaultValue="C. Service Usage Information"
            />
            <ul>
              <li><EditableText as="span" contentKey="privacy.section2.service.item1" defaultValue="Support requests" /></li>
              <li><EditableText as="span" contentKey="privacy.section2.service.item2" defaultValue="Subscription details" /></li>
              <li><EditableText as="span" contentKey="privacy.section2.service.item3" defaultValue="Project documentation" /></li>
              <li><EditableText as="span" contentKey="privacy.section2.service.item4" defaultValue="Communication records" /></li>
            </ul>

            <EditableText
              as="p"
              contentKey="privacy.section2.closing"
              defaultValue="We collect information only when necessary for delivering our IT services and improving your experience."
            />

            <EditableText
              as="h2"
              contentKey="privacy.section3.title"
              defaultValue="3. How We Collect Your Information"
            />
            <EditableText
              as="p"
              contentKey="privacy.section3.intro"
              defaultValue="We collect data through:"
            />
            <ul>
              <li><EditableText as="span" contentKey="privacy.section3.item1" defaultValue="Website forms (contact or inquiry forms)" /></li>
              <li><EditableText as="span" contentKey="privacy.section3.item2" defaultValue="Direct communication (calls, emails, meetings)" /></li>
              <li><EditableText as="span" contentKey="privacy.section3.item3" defaultValue="Service usage and onboarding processes" /></li>
              <li><EditableText as="span" contentKey="privacy.section3.item4" defaultValue="Cookies and tracking technologies" /></li>
              <li><EditableText as="span" contentKey="privacy.section3.item5" defaultValue="Third-party service providers for analytics or hosting" /></li>
            </ul>

            <EditableText
              as="h2"
              contentKey="privacy.section4.title"
              defaultValue="4. How We Use Your Information"
            />
            <EditableText
              as="p"
              contentKey="privacy.section4.intro"
              defaultValue="We use your information to:"
            />
            <ul>
              <li><EditableText as="span" contentKey="privacy.section4.item1" defaultValue="Provide, manage, and support IT services" /></li>
              <li><EditableText as="span" contentKey="privacy.section4.item2" defaultValue="Respond to inquiries and customer requests" /></li>
              <li><EditableText as="span" contentKey="privacy.section4.item3" defaultValue="Improve service quality and customer experience" /></li>
              <li><EditableText as="span" contentKey="privacy.section4.item4" defaultValue="Send updates, alerts, and service notifications" /></li>
              <li><EditableText as="span" contentKey="privacy.section4.item5" defaultValue="Billing and account management" /></li>
              <li><EditableText as="span" contentKey="privacy.section4.item6" defaultValue="Ensure legal and regulatory compliance" /></li>
            </ul>

            <EditableText
              as="p"
              contentKey="privacy.section4.closing"
              defaultValue="We only use your data for legitimate business purposes and do not sell your information to third parties."
            />

            <EditableText
              as="h2"
              contentKey="privacy.section5.title"
              defaultValue="5. Disclosure of Information"
            />
            <EditableText
              as="p"
              contentKey="privacy.section5.intro"
              defaultValue="We may share your information with:"
            />
            <ul>
              <li><EditableText as="span" contentKey="privacy.section5.item1" defaultValue="Service providers assisting with IT operations or analytics" /></li>
              <li><EditableText as="span" contentKey="privacy.section5.item2" defaultValue="Professional advisors (legal, financial, compliance)" /></li>
              <li><EditableText as="span" contentKey="privacy.section5.item3" defaultValue="Authorities if required by law or court order" /></li>
            </ul>

            <EditableText
              as="p"
              contentKey="privacy.section5.closing"
              defaultValue="All third-party partners are required to follow strict confidentiality and security obligations."
            />

            <EditableText
              as="h2"
              contentKey="privacy.section6.title"
              defaultValue="6. Data Security"
            />
            <EditableText
              as="p"
              contentKey="privacy.section6.intro"
              defaultValue="We take data protection seriously and use multiple safeguards, including:"
            />
            <ul>
              <li><EditableText as="span" contentKey="privacy.section6.item1" defaultValue="Encrypted data storage and transfers" /></li>
              <li><EditableText as="span" contentKey="privacy.section6.item2" defaultValue="Secure server environments" /></li>
              <li><EditableText as="span" contentKey="privacy.section6.item3" defaultValue="Access controls and authentication" /></li>
              <li><EditableText as="span" contentKey="privacy.section6.item4" defaultValue="Regular security reviews and risk assessments" /></li>
            </ul>

            <EditableText
              as="p"
              contentKey="privacy.section6.closing"
              defaultValue="Although we follow industry best practices, no system is 100% secure."
            />

            <EditableText
              as="h2"
              contentKey="privacy.section7.title"
              defaultValue="7. Data Retention"
            />
            <EditableText
              as="p"
              contentKey="privacy.section7.intro"
              defaultValue="We retain your information only for as long as required to:"
            />
            <ul>
              <li><EditableText as="span" contentKey="privacy.section7.item1" defaultValue="Deliver services" /></li>
              <li><EditableText as="span" contentKey="privacy.section7.item2" defaultValue="Meet legal obligations" /></li>
              <li><EditableText as="span" contentKey="privacy.section7.item3" defaultValue="Resolve disputes" /></li>
              <li><EditableText as="span" contentKey="privacy.section7.item4" defaultValue="Maintain operational records" /></li>
            </ul>

            <EditableText
              as="p"
              contentKey="privacy.section7.closing"
              defaultValue="Once data is no longer required, it is securely deleted or anonymized."
            />

            <EditableText
              as="h2"
              contentKey="privacy.section8.title"
              defaultValue="8. Your Rights"
            />
            <EditableText
              as="p"
              contentKey="privacy.section8.intro"
              defaultValue="Under Australian privacy laws, you have the right to:"
            />
            <ul>
              <li><EditableText as="span" contentKey="privacy.section8.item1" defaultValue="Access your personal information" /></li>
              <li><EditableText as="span" contentKey="privacy.section8.item2" defaultValue="Correct inaccurate or outdated data" /></li>
              <li><EditableText as="span" contentKey="privacy.section8.item3" defaultValue="Request deletion where applicable" /></li>
              <li><EditableText as="span" contentKey="privacy.section8.item4" defaultValue="Opt out of marketing communications" /></li>
              <li><EditableText as="span" contentKey="privacy.section8.item5" defaultValue="Withdraw consent at any time" /></li>
            </ul>
            <EditableText
              as="p"
              contentKey="privacy.section8.closing"
              defaultValue="You can exercise your rights by contacting us directly."
            />

            <EditableText
              as="h2"
              contentKey="privacy.section9.title"
              defaultValue="9. Cookies & Tracking Technologies"
            />
            <EditableText
              as="p"
              contentKey="privacy.section9.intro"
              defaultValue="Our website uses cookies to:"
            />
            <ul>
              <li><EditableText as="span" contentKey="privacy.section9.item1" defaultValue="Improve site functionality" /></li>
              <li><EditableText as="span" contentKey="privacy.section9.item2" defaultValue="Personalize user experience" /></li>
              <li><EditableText as="span" contentKey="privacy.section9.item3" defaultValue="Analyze website performance" /></li>
              <li><EditableText as="span" contentKey="privacy.section9.item4" defaultValue="Support security and fraud prevention" /></li>
            </ul>
            <EditableText
              as="p"
              contentKey="privacy.section9.closing"
              defaultValue="You may disable cookies in your browser settings, but some features may not function correctly."
            />

            <EditableText
              as="h2"
              contentKey="privacy.section10.title"
              defaultValue="10. Third-Party Links"
            />
            <EditableText
              as="p"
              contentKey="privacy.section10.content"
              defaultValue="Our website may contain links to external websites or tools. We are not responsible for the privacy practices or content of those sites. We advise reviewing their policies before sharing any personal information."
            />

            <EditableText
              as="h2"
              contentKey="privacy.section11.title"
              defaultValue="11. Updates to This Policy"
            />
            <EditableText
              as="p"
              contentKey="privacy.section11.content"
              defaultValue='We may update this Privacy Policy to reflect changes in our practices or legal obligations. Updates will be posted on this page with a revised "Last Updated" date.'
            />

            <EditableText
              as="h2"
              contentKey="privacy.section12.title"
              defaultValue="12. Contact Us"
            />
            <EditableText
              as="p"
              contentKey="privacy.section12.intro"
              defaultValue="If you have questions or concerns about this Privacy Policy or your personal information, please contact us at: Qaidyn"
            />
            <EditableText
              as="p"
              contentKey="privacy.section12.email"
              defaultValue="Email: support@qaidyn.com"
            />
          </section>

          <section
            className="policy_last_container"
            role="region"
            aria-label="Let's work together call to action"
          >
            <div className="policy_last_inner">
              <EditableImage
                contentKey="privacy.cta.decorLeft"
                defaultValue={semiCircle}
                alt="Decoration"
                className="decor-left"
              />

              <EditableText
                as="h2"
                className="work-title"
                contentKey="privacy.cta.title"
                defaultValue="Let's Work Together"
              />
              <EditableText
                as="p"
                className="work-sub"
                contentKey="privacy.cta.subtitle"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida, velit arcu consequat"
              />

              <EditableButton
                contentKey="privacy.cta.askQuestions.button"
                defaultValue="Ask us any Questions"
                className="ask-btn"
                onClick={() => onOpenContact && onOpenContact()}
              />
            </div>

            <EditableImage
              contentKey="privacy.cta.decorRight"
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

const PrivacyPolicyWrapper = ({ onOpenContact }) => {
  return (
    <HomeContentProvider>
      <PrivacyPolicy onOpenContact={onOpenContact} />
    </HomeContentProvider>
  );
};

export default PrivacyPolicyWrapper;
