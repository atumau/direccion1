import React from "react";
import "../DeliveryModel/Deliverymodel.css";
const Deliverymodel = () => {
  return (
    <>
      <section id="dm" className="delivery-model-section">
        <div className="dm-poster">
          <h1 className="dm-poster-head">
            Direccion's Delivery model is tailored to meet the unique
            requirements of customers' EPM, Automation, and Analytics project
            life cycles
          </h1>
          <p className="dm-poster-para">
            Discover Direccion's tailored Delivery model, meticulously crafted
            to cater to the diverse needs of our customers' EPM, Automation, and
            Analytics project life cycles. At Direccion, we understand that
            every project is unique, requiring a personalized approach to ensure
            success. Our Delivery model is designed to adapt seamlessly to your
            specific requirements, providing comprehensive support and guidance
            every step of the way. Whether you're embarking on a new venture or
            seeking to optimize existing processes, our experienced team is here
            to streamline your journey towards excellence. Explore the
            difference with Direccion and unlock the full potential of your
            projects today
          </p>
        </div>
        <div className="quote-section">
          <div className="quote-div-dm">
            <h3 className="quote-dm-text text-center">
              "Unrivaled Global Delivery Excellence: Tailored to Customers,
              All-Encompassing, and Unbeatable"
            </h3>
          </div>
        </div>
        <div className="deliverymodel-image">
          <img className="dm-image" src="dm.jpg" alt="image" />
        </div>
        <div className="dm-black-poster">
          <h1 className="dm-black-poster-head text-center">
            What is Direccion Delivery Model?{" "}
          </h1>
          <p className="dm-black-poster-para text-center">
            Direccion's Delivery Model is the most efficient, Hybrid Global
            Delivery Model conceptualized adopting a pragmatic and egile
            approach
          </p>
        </div>

        <div className="dm-main container">
          <div className="container dm-container">
            <div className="left-div-dm">
              <h2 className="left-head-text-dm">
                Direccion's Offshore :{" "}
                <span className="left-head-text-span-dm">
                  Remote Delivery Model
                </span>{" "}
                Maximizing Efficiency and Cost-Effectiveness
              </h2>

              <p className="left-head-para-dm">
                At Direccion, our Offshore Remote Delivery Model is crafted to
                provide clients with unmatched efficiency and cost-effectiveness
                in project deployment. Leveraging offshore resources, we extend
                working hours and offer competitive pricing, optimizing resource
                usage and expediting project timelines. Through strategic
                collaboration and seamless communication, our team ensures
                flawless project execution, tapping into offshore talent while
                upholding top-notch quality and reliability standards. With
                Direccion's Remote Delivery Model, clients can attain heightened
                productivity, cost savings, and a competitive edge in today's
                ever-evolving business environment.
              </p>
              <button className="ai-button-dm">Lets Talk</button>
            </div>
            <div className="right-div-dm">
              <img src="rdm1.jpg" alt="AI Image" className="image-ai-dm" />
            </div>
          </div>
        </div>
      </section>

      <section id="ddm" className="deploy-dm-section">
        <div className="deploy-main container">
          <div className="container deploy-container">
            <div className="left-div-deploy">
              <h2 className="left-head-text-deploy">
                Direccion's{" "}
                <span className="left-head-text-span-deploy">
                  Fusion Delivery Model:
                </span>{" "}
                Seamlessly Integrating Onsite and Offshore Project Delivery
              </h2>

              <p className="left-head-para-deploy">
                In our Fusion Delivery Model, onsite and offshore teams
                collaborate seamlessly, maximizing efficiency and
                cost-effectiveness. By leveraging local expertise and global
                resources, we accelerate project timelines and maintain
                competitive pricing. This integrated approach ensures
                high-quality results while meeting diverse client needs. With
                clear communication and strategic coordination, we deliver
                projects with precision and reliability. Direccion's Fusion
                Delivery Model offers the perfect blend of onsite presence and
                offshore advantages for unparalleled project success.
              </p>
              <button className="ai-button-deploy">Get Support</button>
            </div>
            <div className="right-div-deploy">
              <img src="fdm.jpg" alt="AI Image" className="image-ai-deploy" />
            </div>
          </div>
        </div>
      </section>

      <section id="fdm" className="fussion-dm-section">
        <div className="fussion-main container">
          <div className="container fussion-container">
            <div className="right-div-fussion">
              <img src="ddm.jpg" alt="AI Image" className="image-fussion" />
            </div>
            <div className="left-div-fussion">
              <h2 className="left-head-text-fussion">
                Direccion's{" "}
                <span className="left-head-text-span-fussion">
                  Deploy Delivery Model:
                </span>{" "}
                Balancing Onsite Support with Offshore Efficiency
              </h2>

              <p className="left-head-para-fussion">
                In our Deploy Delivery Model, we combine onsite support for
                critical project phases with offshore handling of build and
                deployment tasks. This mixed deployment approach ensures
                continuous onsite presence during crucial stages while
                capitalizing on offshore resources for efficient execution. By
                blending local expertise with offshore efficiency, we strike the
                right balance to meet project demands effectively. Direccion's
                Deploy Delivery Model guarantees seamless coordination and
                cost-effective project delivery, catering to the diverse needs
                of our clients.
              </p>
              <button className="fussion-button">Connect</button>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1713435677">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              className="shape-fill"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Deliverymodel;
