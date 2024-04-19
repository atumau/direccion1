import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/home.css";
import { SiMarketo } from "react-icons/si";
import { CgRemote } from "react-icons/cg";
import { FaShareFromSquare } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsChatRightTextFill } from "react-icons/bs";
import { MdGraphicEq } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdEmergencyShare } from "react-icons/md";
import { MdSettingsVoice } from "react-icons/md";
import { IoCameraReverseSharp } from "react-icons/io5";
import { IoMdMailOpen } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
const home = () => {
  return (
    <>
      <div className="slider-div">
        <Slider autoplay autoplaySpeed={2000}>
          <div className="slide fade-in">
            <section className="react-home-section">
              <div className="home-full">
                <div className="home-left">
                  <img className="img-home" src="home-ban.svg" alt="image" />
                </div>
                <div className="content-home">
                  <h2 className="content-heading">
                    Explore the Support from System Accountants by
                  </h2>
                  <h2 className="content-heading-2">Direccion Team!</h2>
                  <h3 className="content-subheading text-center">
                    BRIDGING THE TALENT GAP BETWEEN FINANCE & TECHNOLOGY !
                  </h3>
                </div>
              </div>
            </section>
          </div>
          <div className="slide">
            <section className="react-home-section">
              <div className="home-full">
                <div className="home-left">
                  <img className="img-home" src="home-ban3.svg" alt="image" />
                </div>
                <div className="content-home">
                  <h2 className="content-heading">
                    Empowering Finance through Innovation by
                  </h2>
                  <h2 className="content-heading-2">Direccion Team!</h2>
                  <h3 className="content-subheading text-center">
                    "Connecting Finance and Technology to Close the Talent Gap!"
                  </h3>
                </div>
              </div>
            </section>
          </div>
          <div className="slide">
            <section className="react-home-section">
              <div className="home-full">
                <div className="home-left">
                  <img className="img-home" src="home-ban2.svg" alt="image" />
                </div>
                <div className="content-home">
                  <h2 className="content-heading">
                    Synergizing Finance with Technology! by
                  </h2>
                  <h2 className="content-heading-2">Direccion Team!</h2>
                  <h3 className="content-subheading text-center">
                    "Fostering Talent Integration Across Finance and
                    Technology!"
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </Slider>
      </div>

      <section className="key-offering-section">
        <div class="custom-shape-divider-top-1713179195">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container-key">
          <button className="button-keyofferings">Contact Now</button>
          <h2 className="key-offering-subheading text-center">
            Revolutionize your organization!
          </h2>
          <h2 className="key-offering-subheading-2 text-center">
            We're driven by solving business challenges.
          </h2>
        </div>
      </section>

      <section className="see-our-works">
        <h1 className="text-center p-4 see-works-head">See Our Works</h1>
        <p className="text-center text-different-model">
          Our Different Delivery Model
        </p>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card home-see-work">
                <div className="card-body text-center">
                  {" "}
                  {/* Added text-center class here */}
                  <SiMarketo className="logo-home" />
                  <div className="see-work-text">
                    <h5 className="card-title-see">Delivery Model</h5>
                    <p className="card-text-see">
                      A streamlined delivery model optimizes efficiency and
                      customer satisfaction. Clear communication and prompt
                      service are key elements for success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card home-see-work">
                <div className="card-body text-center">
                  {" "}
                  {/* Added text-center class here */}
                  <CgRemote className="logo-home" />
                  <div className="see-work-text">
                    <h5 className="card-title-see">Remote Delivery Model</h5>
                    <p className="card-text-see">
                      Our Remote Delivery Model offers full offshore project
                      deployment, giving clients the advantage of extended
                      working hours and competitive pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card home-see-work">
                <div className="card-body text-center">
                  {" "}
                  {/* Added text-center class here */}
                  <FaShareFromSquare className="logo-home" />
                  <div className="see-work-text">
                    <h5 className="card-title-see">Fusion Delivery Model</h5>
                    <p className="card-text-see">
                      Our Fusion Delivery Model combines Onsite and Offshore
                      project delivery seamlessly across all project phases and
                      cover all things.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card home-see-work">
                <div className="card-body text-center">
                  {" "}
                  {/* Added text-center class here */}
                  <TfiMenuAlt className="logo-home" />
                  <div className="see-work-text">
                    <h5 className="card-title-see">Deploy Delivery Model</h5>
                    <p className="card-text-see">
                      Our Deploy Delivery Model offers a mixed deployment
                      approach with continuous onsite support for critical
                      project phases with offshore handling of deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1713249901">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="about-company">
        <div className="container-fluid bg-black">
          <div className="row">
            <div className="col-md-12">
              <h2 className="about-head text-center">
                <span className="span-about-head">About</span> Our Company
              </h2>
            </div>
          </div>
          <div className=" container para-group">
            <p className="about-para text-center">
              Our impact is driven by the harmonious integration of finance and
              cutting-edge technology, utilizing a team of highly skilled and
              motivated finance professionals deeply versed in leading
              technologies. Our primary goal is to deliver consistent
              value-added services, ensuring the success of our customers.
            </p>

            <p className="about-para text-center">
              Our expertise in providing top-notch insights, advisory, and
              technology services empowers us to implement resilient, automated,
              and scalable finance technologies. This, in turn, achieves
              efficiencies in finance processes, reporting, and analytics for
              our clients, fostering strong trust and confidence with both
              internal and external stakeholders.
            </p>

            <p className="about-para text-center">
              We excel in delivering services with profound expertise in the
              subject matter, deploying high-quality solutions rapidly,
              guaranteeing swift and competitive returns on investment for our
              clients.
            </p>
          </div>
          <div className="group-icon-about">
            <p className="about-para">
              <IoShieldCheckmarkSharp className="logo-icon-about" /> Superfast &
              Reliable
            </p>
            <p className="about-para">
              <BsChatRightTextFill className="logo-icon-about" /> 24 Hour
              Support
            </p>
            <p className="about-para">
              <MdGraphicEq className="logo-icon-about" /> We Get the Results
            </p>
          </div>
          <div className="image-group-about">
            <img src="home-ban.svg" className="image-about" alt="image" />
            <img src="home-ban2.svg" className="image-about" alt="image" />
            <img src="home-ban3.svg" className="image-about" alt="image" />
          </div>
        </div>
      </section>
      <section className="key-offer">
        <div className="key-offer-all">
          <p className="key-offering-heading text-center">KEY OFFERINGS</p>
          <h1 className="key-offer-head text-center">
            "Navigating Business Disruptions with
          </h1>
          <h1 className="key-offer-head2 text-center">
            Flexibility , Expertise, and Inventiveness"
          </h1>
        </div>

        <div className="container-divider-home">
          <div className="divider-home">
            <div className="line-home horizontal-home top-home" />
            <div className="square-home" />
            <div className="square-home second-home" />
            <div className="line-home horizontal-home bottom-home" />
          </div>
        </div>
      </section>

      <section className="what-we-do">
        <h2 className="what-we-do-head text-center">
          What We do, We do <strong className="strong-head">Best!</strong>
        </h2>
        <p className="what-we-do-subhead text-center">
          Our modest list of services to suit all your digital needs
        </p>

        <div className="what-we-do-container container">
          <div className="what-we-do-row row">
            <div className="what-we-do-first">
              <div className="col-md-6">
                <div className="what-we-do-item">
                  <FaEdit className="what-we-do-icon" />
                  <h2>Advisory Services</h2>
                  <p>
                    Advisory services encompass a range of consultative
                    offerings designed to guide organizations in the effective
                    utilization, implementation, and optimization. These
                    services aim to enhance the overall efficiency,
                    functionality, and strategic alignment within a business
                    context.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="what-we-do-item">
                  <MdEmergencyShare className="what-we-do-icon" />
                  <h2>Process Consulting & Implementation</h2>
                  <p>
                    Process consulting and implementation involves a
                    comprehensive approach to analyze, design,and implement
                    business processes within an organization. This service
                    focuses on objectives to enhance efficiency, productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-ban">
            <img
              src="home-ban.svg"
              alt="Image Between Divs"
              className="image-between-divs"
            />
          </div>

          <div className="what-we-do-row row">
            <div className="what-we-do-first">
              <div className="col-md-6">
                <div className="what-we-do-item">
                  <IoCameraReverseSharp className="what-we-do-icon" />
                  <h2>Managed Services & Outsourcing</h2>
                  <p>
                    Managed services and outsourcing provide organizations with
                    the opportunity to streamline operations, reduce costs, and
                    enhance overall efficiency. This allows businesses to focus
                    on their core competencies.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="what-we-do-item">
                  <MdSettingsVoice className="what-we-do-icon" />
                  <h2>Training & Centre of Excellence</h2>
                  <p>
                    Establishing a Training & Centre of Excellence is a
                    strategic initiative that underscores an organization's
                    commitment to optimizing its investment and fostering
                    continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1713272872">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </section>
      <section className="progress-bar-main">
        <h2 className="progress-head text-center">
          LET <span className="progress-head-span">OUR SKILLS</span> SPEAK FOR
          US
        </h2>
        <p className="progress-para text-center">Our Solutions</p>
        <div className="progress-bar-div">
          <div className="progress-bar-item">
            <span className="progress-label">DIGITAL TRANSFORMATION</span>
            <div className="progress-bar-container">
              <progress max="100" value="80"></progress>
              <span className="progress-value">80%</span>
            </div>
          </div>
          <div className="progress-bar-item">
            <span className="progress-label">CYBER SECURITY</span>
            <div className="progress-bar-container">
              <progress max="100" value="60"></progress>
              <span className="progress-value">60%</span>
            </div>
          </div>
          <div className="progress-bar-item">
            <span className="progress-label">ACCOUNTING ADVISORY</span>
            <div className="progress-bar-container">
              <progress max="100" value="90"></progress>
              <span className="progress-value">90%</span>
            </div>
          </div>
          <div className="progress-bar-item">
            <span className="progress-label">
              MANAGED SERVICES & OUTSOURCING
            </span>
            <div className="progress-bar-container">
              <progress max="100" value="75"></progress>
              <span className="progress-value">75%</span>
            </div>
          </div>
          <div className="progress-bar-item">
            <span className="progress-label">SAP SUPPORT</span>
            <div className="progress-bar-container">
              <progress max="100" value="85"></progress>
              <span className="progress-value">85%</span>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-detail-main">
        <h1 className="contact-section-head text-center">
          Let's <span className="contact-section-head-span">Connect</span>
        </h1>
        <p className="contact-section-para text-center">
          Unlock solutions, contact us today for personalized assistance
          tailored to your needs
        </p>
        <div className="contact-detail">
          <div className="contact-section">
            <div className="contact-info">
              <h3 className="contact-info-head">
                Our office <span className="contact-info-head-span">info</span>
              </h3>
              <div className="contact-info-div">
                <p className="contact-info-detail">
                  <IoMdMailOpen className="logo-contact" />
                  info@Direccion.com
                </p>
                <p className="contact-info-detail">
                  <IoCall className="logo-contact" />
                  +91 1234567890
                </p>
                <p className="contact-info-detail">
                  <BsFillBuildingsFill className="logo-contact" />
                  502 New Victoria Building 103 Corporation Street Manchester M4
                  4DZ
                </p>
                <p className="contact-info-detail">
                  <FaLocationDot className="logo-contact" />
                  United Kingdom
                </p>
              </div>
              <p className="contact-info-detail2">
                We require the contact information you share with us to reach
                out regarding our products and services
              </p>
            </div>
            <div className="contact-form">
              <h3 className="contact-form-head">
                Send us a{" "}
                <span className="contact-form-head-span">Message</span>
              </h3>
              <div className="form-div">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      required
                    />
                  </div>
                  <button className="send-button" type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1713336216">
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
    </>
  );
};

export default home;
