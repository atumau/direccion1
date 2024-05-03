import React from "react";
import "../ContactUs/contactus.css";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
const contactus = () => {
  return (
    <>
      <section id="contact" className="contactus-section">
        <div className="contact-poster">
          <h1 className="contact-poster-head"data-aos="fade-down">
            Media & Press Inquiries: Get in Touch with Our Communications Team
          </h1>
          <p className="contact-poster-para"data-aos="fade-down">
            At Direccion, we value open communication and welcome your
            inquiries, feedback, and collaboration opportunities. Whether you
            have questions about our services, need assistance with a project,
            or want to explore partnership possibilities, our dedicated team is
            here to assist you every step of the way. Feel free to reach out to
            us using the contact form below or directly via email or phone. We
            look forward to hearing from you and building a successful
            partnership together!
          </p>
        </div>

        <div className="image-contactus">
          <div className="contact-us-container">
            <div className="contact-left">
              <div className="content">
                <h2 className="content-text"data-aos="fade-right">
                  Reach out today for inquiries, support, or collaborations.
                  We're here to assist you every step of the way
                </h2>
                <p className="content-text-2"data-aos="fade-left">
                  Contact us now and let's start a conversation. We're here to
                  help!
                </p>
              </div>
              <div className="image-overlay"></div>
            </div>
            <div className="contact-right">
              <img src="bac.jpg" alt="Contact" />
            </div>
          </div>
        </div>

        <div className="contact-black-poster">
          <h1 className="contact-black-poster-head text-center"data-aos="flip-down">
            Connect with Direccion{" "}
            <span className="contact-black-poster-span">
              Reach Out to Us Today!
            </span>
          </h1>
        </div>

        <div className="contactus-main container-fluid">
          <div className="container-3 contact-container">
            <div className="left-div-contact">
              <h2 className="contactus-heading-form"data-aos="zoom-in">Get in Touch</h2>
              <div className="contactus-section">
                <div className="contactus-info">
                  <div className="contactus-info-main">
                    <div className="contactus-info-logo">
                      <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <MdEmail className="icon-contactus" />
                      </p>
                    </div>
                    <div className="contactus-item">
                      <h4 className="text-connect-all">Email</h4>
                      <p className="text-connect-all-para">
                        info@direccion.com
                      </p>
                    </div>
                  </div>
                  <div className="contactus-info-main">
                    <div className="contactus-info-logo">
                      <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <FaAddressCard className="icon-contactus" />
                      </p>
                    </div>
                    <div className="contactus-info-main">
                      <div className="contactus-item">
                        <h4 className="text-connect-all">Address</h4>
                        <p className="text-connect-all-para">
                          502 New Victoria Building 103 Corporation Street
                          Manchester M4 4DZ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contactus-info-main">
                    <div className="contactus-info-logo">
                      <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <FaPhoneVolume className="icon-contactus" />
                      </p>
                    </div>
                    <div className="contactus-item">
                      <h4 className="text-connect-all">Phone</h4>
                      <p className="text-connect-all-para">+91 1234567890</p>
                    </div>
                  </div>
                  <div className="contactus-info-main">
                    <div className="contactus-info-logo">
                      <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <FaLocationDot className="icon-contactus" />
                      </p>
                    </div>
                    <div className="contactus-item">
                      <h4 className="text-connect-all">Location</h4>
                      <p className="text-connect-all-para">United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-div-contact">
              <h2 className="contactus-heading-form"data-aos="zoom-in">Write to us</h2>
              <div className="contactus-form">
                <p className="contactus-heading-text"> Start a conversation</p>
                <form>
                  <div className="horizontal-contactus">
                    <div className="form-group-contactus">
                      <label className="label-contactus" htmlFor="firstName">
                        First Name:
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="contactus-input"
                        required
                      />
                    </div>
                    <div className="form-group-contactus">
                      <label className="label-contactus" htmlFor="lastName">
                        Last Name:
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                      />
                    </div>
                  </div>
                  <div className="horizontal-contactus">
                    <div className="form-group-contactus">
                      <label className="label-contactus" htmlFor="email">
                        Email:
                      </label>
                      <input
                        className="contactus-input"
                        type="email"
                        id="email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form-group-contactus">
                      <label className="label-contactus" htmlFor="mobileNumber">
                        Mobile Number:
                      </label>
                      <input
                        type="tel"
                        id="mobileNumber"
                        className="contactus-input"
                        name="mobileNumber"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group-contactus">
                    <label className="label-contactus" htmlFor="city">
                      City:
                    </label>
                    <input
                      type="text"
                      className="contactus-input"
                      id="city"
                      name="city"
                      required
                    />
                  </div>
                  <div className="form-group-contactus">
                    <label className="label-contactus" htmlFor="message">
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="contactus-textarea"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <button className="contactus-submit" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contactus;
