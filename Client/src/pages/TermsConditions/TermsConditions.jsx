import React, { useEffect } from "react";
import "./TermsConditions.css"; // create or import into your main css
import "../ProvacyPolicy/Privacypolicy.css"
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/Navbar";
import semiCircle from "../../assets/privacypolicy/Vector.png";
import semiCircle2 from "../../assets/privacypolicy/whitelines.png";

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

const TermsAndConditions = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <div className="termsandconditions-page" role="main" aria-label="termsandconditions">
        <div className="termsandconditions-container">
          <header className="termsandconditions-hero">
            <h1 className="termsandconditions-title">Terms & Conditions </h1>
            <p className="termsandconditions-sub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </header>

          {/* condition card 1 */}
          <section className="condition-card" aria-labelledby="condition-1">
            <h2 id="condition-1" className="condition-heading">
              Lorem ipsum dolor
            </h2>

            <p className="condition-paragraph">{lorem}</p>
            <p className="condition-paragraph">
              {lorem} Lorem ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>

            <h3 className="condition-subheading">Lorem ipsum dolor sit amet</h3>
            <p className="condition-paragraph">{lorem}</p>

            <ul className="condition-list">
              <li>Non magni quisquam</li>
              <li>Eum aperiam facilis</li>
              <li>Id quibusdam corporis et voluptate minus</li>
              <li>Qui internos impedit vel unde</li>
            </ul>

            <h3 className="condition-subheading">Lorem ipsum dolor</h3>
            <p className="condition-paragraph">{lorem}</p>
          </section>

          {/* condition card 2 */}
          <section className="condition-card" aria-labelledby="condition-2">
            <h2 id="condition-2" className="condition-heading">
              Lorem ipsum dolor
            </h2>

            <p className="condition-paragraph">{lorem}</p>
            <p className="condition-paragraph">{lorem}</p>

            <h3 className="condition-subheading">Lorem ipsum dolor sit amet</h3>
            <p className="condition-paragraph">{lorem}</p>
          </section>

          <section
            className="policy_last_container"
            role="region"
            aria-label="Let's work together call to action"
          >
            <img
              src={semiCircle}
              alt=""
              aria-hidden="true"
              className="decor-left"
            />

            <div className="policy_last_inner">
              <h2 className="work-title">Let's Work Together</h2>
              <p className="work-sub">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pulvinar, sapien ac facilisis gravida, velit arcu consequat
              </p>

              <button
                className="ask-btn"
                type="button"
                aria-label="Ask us any questions"
              >
                Ask us any Questions
              </button>
            </div>
            <img
              src={semiCircle2}
              alt=""
              aria-hidden="true"
              className="decor-right"
            />
          </section>
        </div>
      </div>
              <Footer />
    </>
  );
};

export default TermsAndConditions;
