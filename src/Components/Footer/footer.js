import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import "../Footer/footer.css";
import Chat from "../Chatbox/Chat";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <footer>
        <div className="container-2 grid">
          <div className="box">
            <h2 className="footer-head">ABOUT US</h2>
            <p>
              At Direccion, we seamlessly merge finance and cutting-edge
              technology, leveraging our team of skilled professionals to
              provide consistent, value-added services.
            </p>

            <p>
              Our focus lies in implementing resilient finance technologies,
              driving efficiency and trust through top-notch insights and
              solutions, ensuring rapid and competitive returns on investment
              for our clients.
            </p>
            <div className="icon flex_space2">
              <FaFacebook className="icon-socio" />
              <AiFillTwitterCircle className="icon-socio" />
              <FaLinkedin className="icon-socio" />
              <FaInstagram className="icon-socio" />
              <FaYoutube className="icon-socio" />
            </div>
          </div>
          <div className="box">
            <h2 className="footer-head">NAVIGATION</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About us</Link>
              </li>
              <li>
                <Link to="/artificialintelligence">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/cloudservices">Cloud Services</Link>
              </li>
              <li>
                <Link to="/technologyconsulting">Technology Consulting</Link>
              </li>
              <li>
                <Link to="/deliverymodel">Delivery Model</Link>
              </li>
              <li>
                <Link to="/contactus">Contact us</Link>
              </li>
            </ul>
          </div>

          <div className="box post">
            <h2 className="footer-head">RECENT POSTS</h2>
            <ul>
              <li>
                <p>
                  Exciting launch: Our new finance tech solution boosts
                  efficiency and accuracy, empowering businesses for greater
                  success. Stay tuned!
                </p>
                <div className="div-span-post">
                  <label>
                    <SlCalender />
                  </label>
                  <span>23 Apr 2024</span>
                </div>
              </li>
              <li>
                <p>
                  Latest insights: Discover how Direccion's strategies leverage
                  tech for business growth and resilience. Read now and stay
                  ahead!
                </p>
                <div className="div-span-post">
                  <label>
                    <SlCalender />
                  </label>
                  <span>20 Apr 2024</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="box">
            <h2 className="footer-head">NEWSLETTER</h2>
            <p>
              Stay Ahead with Direccion: Your Gateway to Future-Ready Finance
              Solutions!
            </p>
            <form className="down-subs">
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="primary-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright © 2024 - direccion.in</p>
      </div>
      <Chat/>
    </>
  );
};

export default Footer;
