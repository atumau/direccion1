import React from "react";
import "../ArtificialIntelligence/artificialintelligence.css";
import Speaktous from "../Common/Speaktous/speaktous";
const artificialintelligence = () => {
  return (
    <>
      <section id="ai" className="ai-section">
        <div className="ai-poster">
          <h1 className="ai-poster-head"data-aos="fade-down">
            Revolutionizing Advertising: Empowering Businesses with Artificial
            Intelligence - Direccion's Cutting-Edge Solutions
          </h1>
          <p className="ai-poster-para"data-aos="fade-down">
            Elevate your advertising game with Direccion's AI-powered solutions,
            reshaping strategies for maximum impact. Our innovative platform
            delivers actionable insights, optimizing targeting and
            personalization for unparalleled results. Harness the power of AI to
            engage audiences with precision and relevance, driving measurable
            success. Stay ahead in the dynamic advertising landscape with our
            cutting-edge technology and expertise. Experience the future of
            marketing with Direccion, where AI transforms possibilities into
            realities. Unlock your business's full potential and thrive in the
            era of intelligent advertising.
          </p>
        </div>
        <div className="custom-shape-divider-bottom-1713428901">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
              className="shape-fill"
            />
          </svg>
        </div>
        <div className="ai-black-poster">
          <h1 className="ai-black-poster-head text-center"data-aos="flip-up">
            Transforming Advertising Dynamics: Amplify Your Strategy with{" "}
            <span className="ai-black-poster-span">
              Artificial Intelligence
            </span>
            -Powered Innovations
          </h1>
        </div>

        <div className="ai-main container">
          <div className="container ai-container">
            <div className="left-div">
              <h2 className="left-head-text"data-aos="fade-down">
                Are you prepared for the future of{" "}
                <span className="left-head-text-span">
                  Artificial Intelligence?
                </span>
              </h2>
              <p className="left-head-para"data-aos="fade-down">
                Decreccion AI’s extensive range of AI & Analytics services
                empowers your organization to harness the complete
                transformative potential of Data & AI on a large scale. By
                integrating data and insights into the core of your business,
                influencing your daily decisions and operations, you enhance
                your organization’s intelligence and magnify the business
                results you anticipate from Data & AI.
              </p>
              <button className="ai-button">Speak to us</button>
            </div>
            <div className="right-div"data-aos="flip-up">
              <img src="ai.jpg" alt="AI Image" className="image-ai" />
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1713355841">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            />
          </svg>
        </div>
      </section>
      <section id="ml" className="ml-section">
        <div className="ml-main container">
          <div className="container ml-container">
            <div className="right-div-ml"data-aos="flip-up">
              <img src="ml.jpg" alt="AI Image" className="image-ml" />
            </div>
            <div className="left-div-ml">
              <h2 className="left-head-text-ml"data-aos="fade-down">
                <span className="left-head-text-ml-span">
                  Machine Learning:
                </span>{" "}
                Constructing models to boost your revenue
              </h2>
              <p className="left-head-para-ml"data-aos="fade-down">
                At Decreccion, we equip you with the latest advancements in
                machine learning technology sourced from industry leaders like
                Google, AWS, and Azure. Our comprehensive suite of tools enables
                you to efficiently build, train, and deploy machine learning
                models. With a focus on optimization and acceleration, we
                streamline ML inferencing and training processes. Leveraging
                automated machine learning, we facilitate faster model
                development, while ensuring seamless deployment at scale through
                Kubernetes. Trust Decreccion to manage your ML models across
                diverse cloud and edge computing landscapes.
              </p>
              <button className="ml-button">Chat with Sales</button>
            </div>
          </div>
        </div>
        <div className="container-divider-ml">
          <div className="divider-ml">
            <div className="line-ml horizontal-ml top-ml" />
            <div className="square-ml" />
            <div className="square-ml second-ml" />
            <div className="line-ml horizontal-ml bottom-ml" />
          </div>
        </div>
      </section>

      <section id="aibots" className="ai-section">
        <div className="ai-main-bot container">
          <div className="container ai-container-bot">
            <div className="left-div-bot">
              <h2 className="left-head-text-bot"data-aos="fade-down">
                Automations via{" "}
                <span className="left-head-text-span-bot">BOTS</span>
              </h2>
              <h2 className="left-head-text-bot"data-aos="fade-down">
                Save cost, bring efficiencies
              </h2>
              <p className="left-head-para-bot"data-aos="fade-down">
                At Decreccion, we specialize in delivering transformative
                experiences within your applications through our Cognitive
                Services and Bot Service offerings. Leveraging industry-leading
                AI models already trusted by millions worldwide, we empower you
                to access cutting-edge technology that enhances user engagement
                and functionality. Tailor these models to suit your specific
                needs by incorporating your own data, ensuring a personalized
                touch that resonates with your audience. With our proven track
                record, rest assured that you're equipped with battle-tested AI
                capabilities ready to excel in any environment.
              </p>
              <button className="ai-button-bot">Speak to us</button>
            </div>
            <div className="right-div-bot"data-aos="flip-up">
              <img src="bot.jpg" alt="AI Image" className="image-ai-bot" />
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1713425454">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              className="shape-fill"
            />
          </svg>
        </div>
      </section>
      <Speaktous />
    </>
  );
};

export default artificialintelligence;
