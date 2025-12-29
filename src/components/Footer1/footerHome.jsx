import "./footerHome.css";
import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/LOGO.png";
import facebookIcon from "../../assets/Frame.png";
import instagramIcon from "../../assets/Frame (1).png";
import twitterIcon from "../../assets/Frame (2).png";

const HomeFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer1">
      <div className="footer1-container">

        {/* ================= TOP CONTENT ================= */}
        <div className="footer1-content">

          {/* LOGO */}
          <div className="footer1-logo">
            <img src={LOGO} alt="Qaidyn Partners Logo" />
          </div>

          {/* LINKS */}
          <div className="footer1-links">
            <div className="footer1-column">
              <p onClick={() => navigate("/about")}>About Us</p>
              <p onClick={() => navigate("/blogs")}>Blogs</p>
            </div>

            <div className="footer1-column">
              <p onClick={() => navigate("/promotions")}>Promotions</p>
              <p onClick={() => navigate("/guidelines")}>Guidelines</p>
            </div>

            <div className="footer1-column">
              <p onClick={() => navigate("/industries")}>Industries</p>
              <p onClick={() => navigate("/case-studies")}>Case Studies</p>
            </div>

            <div className="footer1-column">
              <p onClick={() => navigate("/careers")}>Careers</p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="footer1-location">
            <h4>Location</h4>
            <p>
              470 St Kilda Road, Melbourne,<br />
              Vic 3004
            </p>
            <p className="footer1-email">info@qaidyn.com</p>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="footer1-bottom">

          <p className="footer1-copyright">
            © 2025 Qaidyn Partners. All rights reserved
          </p>

          <div className="footer1-bottom-links">
            <span onClick={() => navigate("/privacypolicy")}>
              Privacy Policy
            </span>
            <span>|</span>
            <span onClick={() => navigate("/TermsAndConditions")}>
              Terms & Conditions
            </span>
          </div>

          {/* SOCIAL */}
          <div className="footer1-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon1"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon1"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon1"
            >
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
