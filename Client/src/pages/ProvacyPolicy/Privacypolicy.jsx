import React, { useEffect } from "react";
import "./PrivacyPolicy.css"; // create or import into your main css
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/Navbar";
import semiCircle from "../../assets/privacypolicy/Vector.png";
import semiCircle2 from "../../assets/privacypolicy/whitelines.png";

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

const PrivacyPolicy = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <div className="privacy-page" role="main" aria-label="Privacy Policy">
        <div className="privacy-container">
          <header className="privacy-hero">
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-sub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </header>

          {/* policy card 1 */}
          <section className="policy-card" aria-labelledby="policy-1">
            <h2 id="policy-1" className="policy-heading">
              Lorem ipsum dolor
            </h2>

            <p className="policy-paragraph">{lorem}</p>
            <p className="policy-paragraph">
              {lorem} Lorem ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>

            <h3 className="policy-subheading">Lorem ipsum dolor sit amet</h3>
            <p className="policy-paragraph">{lorem}</p>

            <ul className="policy-list">
              <li>Non magni quisquam</li>
              <li>Eum aperiam facilis</li>
              <li>Id quibusdam corporis et voluptate minus</li>
              <li>Qui internos impedit vel unde</li>
            </ul>

            <h3 className="policy-subheading">Lorem ipsum dolor</h3>
            <p className="policy-paragraph">{lorem}</p>
          </section>

          {/* policy card 2 */}
          <section className="policy-card" aria-labelledby="policy-2">
            <h2 id="policy-2" className="policy-heading">
              Lorem ipsum dolor
            </h2>

            <p className="policy-paragraph">{lorem}</p>
            <p className="policy-paragraph">{lorem}</p>

            <h3 className="policy-subheading">Lorem ipsum dolor sit amet</h3>
            <p className="policy-paragraph">{lorem}</p>
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
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
