import "./footerHome.css";
import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/LOGO.png";
import EditableText from "../Editable/EditableText.jsx";
import EditableImage from "../Editable/EditableImage.jsx";
import { useAdmin } from "../context/AdminContext";
import facebookIcon from "../../assets/Frame.png";
import instagramIcon from "../../assets/Frame (1).png";
import twitterIcon from "../../assets/Frame (2).png";

const HomeFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer1">
      <div className="footer1-container">

        <div className="footer1-content">


          <div className="footer1-logo">
            <EditableImage contentKey="footer.logo" defaultValue={LOGO} alt="Qaidyn Partners Logo" />
          </div>


          <div className="footer1-links">
            <div className="footer1-column">
              <p onClick={() => navigate("/about")}><EditableText as="span" contentKey="footer.link.about" defaultValue="About Us" /></p>
              <p onClick={() => navigate("/blogs")}><EditableText as="span" contentKey="footer.link.blogs" defaultValue="Blogs" /></p>
            </div>

            <div className="footer1-column">
              <p onClick={() => navigate("/promotions")}><EditableText as="span" contentKey="footer.link.promotions" defaultValue="Promotions" /></p>
              <p onClick={() => navigate("/guidelines")}><EditableText as="span" contentKey="footer.link.guidelines" defaultValue="Guidelines" /></p>
            </div>

            <div className="footer1-column">
              <p onClick={() => navigate("/industries")}><EditableText as="span" contentKey="footer.link.industries" defaultValue="Industries" /></p>
              <p onClick={() => navigate("/case-studies")}><EditableText as="span" contentKey="footer.link.caseStudies" defaultValue="Case Studies" /></p>
            </div>

            <div className="footer1-column">
              <p onClick={() => navigate("/careers")}><EditableText as="span" contentKey="footer.link.careers" defaultValue="Careers" /></p>
            </div>
          </div>

          <div className="footer1-location">
            <EditableText as="h4" contentKey="footer.location.title" defaultValue="Location" />
            <EditableText as="p" contentKey="footer.location.address" defaultValue="470 St Kilda Road, Melbourne, Vic 3004" />
            <EditableText as="p" className="footer1-email" contentKey="footer.location.email" defaultValue="info@qaidyn.com" />
          </div>

        </div>

        <div className="footer1-bottom">

          <EditableText as="p" className="footer1-copyright" contentKey="footer.copyright" defaultValue="© 2025 Qaidyn Partners. All rights reserved" />

          <div className="footer1-bottom-links">
            <span onClick={() => navigate("/privacypolicy")}>
              <EditableText as="span" contentKey="footer.link.privacy" defaultValue="Privacy Policy" />
            </span>
            <span>|</span>
            <span onClick={() => navigate("/TermsAndConditions")}>
              <EditableText as="span" contentKey="footer.link.terms" defaultValue="Terms & Conditions" />
            </span>
          </div>

          <div className="footer1-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon1"
            >
              <EditableImage contentKey="footer.social.facebook" defaultValue={facebookIcon} alt="Facebook" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon1"
            >
              <EditableImage contentKey="footer.social.instagram" defaultValue={instagramIcon} alt="Instagram" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon1"
            >
              <EditableImage contentKey="footer.social.twitter" defaultValue={twitterIcon} alt="Twitter" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default HomeFooter;
