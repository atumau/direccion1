import React from "react";
import "../Navbar/navbar.css";
import { BsRobot } from "react-icons/bs";
import { GiRobotGolem } from "react-icons/gi";
import { TbDeviceImacUp } from "react-icons/tb";
import { FaBattleNet } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { GrInternetExplorer } from "react-icons/gr";
import { GiPlatform } from "react-icons/gi";
import { SiBmcsoftware } from "react-icons/si";
import { FaSalesforce } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { FaCodeMerge } from "react-icons/fa6";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { SiPaloaltosoftware } from "react-icons/si";
import { FaGopuram } from "react-icons/fa6";
import { SiVala } from "react-icons/si";
import { FaWalkieTalkie } from "react-icons/fa6";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaDirections } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="logo-img" src="logon.jpeg" alt="Logo" />
      </div>
      <div className="navbar-links">
        <ul className="navbar-ul">
          <li>
            <a className="link-text" href="/">
              Home
            </a>
          </li>

          <li className="dropdown">
            <a href="/aboutus" className="dropbtn no-underline">
              About Us
            </a>
            <div className="dropdown-content-2">
              <div className="dropdown-all-1">
                <a className="dropdown-text" href="#purpose">
                  <FaGopuram className="nav-icon" />
                  Purpose
                </a>
                <a className="dropdown-text" href="#value">
                  <SiVala className="nav-icon" />
                  Value
                </a>
                <a className="dropdown-text" href="#team">
                  <BsMicrosoftTeams className="nav-icon" />
                  Team
                </a>
                <a className="dropdown-text" href="#why">
                  <FaDirections className="nav-icon" />
                  Why Direccion
                </a>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn no-underline">
              Services
            </a>
            <div className="dropdown-content">
              <div className="dropdown-all">
                <div className="dropdown-one">
                  <a
                    className="dropdown-text-main"
                    href="/artificialintelligence"
                  >
                    <BsRobot className="nav-icon" /> ARTIFICIAL INTELLIGENCE
                  </a>

                  <a className="dropdown-subtext" href="#ml">
                    <TbDeviceImacUp className="nav-icon" /> Machine Learning
                  </a>

                  <a className="dropdown-subtext" href="#aibots">
                    <FaBattleNet className="nav-icon" /> AI Bots
                  </a>
                </div>
                <div className="dropdown-one">
                  <a className="dropdown-text-main" href="/cloudservices">
                    <IoMdCloudUpload className="nav-icon" /> CLOUD SERVICES
                  </a>
                  <a className="dropdown-subtext" href="#sapsupport">
                    <GrInternetExplorer className="nav-icon" />
                    SAP Support
                  </a>
                  <a className="dropdown-subtext" href="#wds">
                    <GiPlatform className="nav-icon" />
                    Workday Support
                  </a>
                  <a className="dropdown-subtext" href="#os">
                    <SiBmcsoftware className="nav-icon" />
                    Oracle Support
                  </a>
                  <a className="dropdown-subtext" href="#sfs">
                    <FaSalesforce className="nav-icon" />
                    Salesforce Support
                  </a>
                </div>
                <div className="dropdown-one">
                  <a
                    className="dropdown-text-main"
                    href="/technologyconsulting"
                  >
                    <GrTechnology className="nav-icon" /> TECHNOLOGY CONSULTING
                  </a>
                  <a className="dropdown-subtext" href="#dt">
                    <FaCodeMerge className="nav-icon" />
                    Digital Transformation
                  </a>
                  <a className="dropdown-subtext" href="#cs">
                    <CgArrowsExchangeAlt className="nav-icon" />
                    Cyber Security
                  </a>
                  <a className="dropdown-subtext" href="#as">
                    <FaWalkieTalkie className="nav-icon" />
                    Advisory Services
                  </a>
                  <a className="dropdown-subtext" href="#pci">
                    <SiPaloaltosoftware className="nav-icon" />
                    Process Consulting & Implementation
                  </a>
                  <a className="dropdown-subtext" href="#mso">
                    <MdManageHistory className="nav-icon" />
                    Managed Services & Outsourcing
                  </a>
                  <a className="dropdown-subtext" href="#tce">
                    <GiRobotGolem className="nav-icon" />
                    Training & Center of Excellence
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a className="link-text" href="/deliverymodel">
              Delivery Model
            </a>
          </li>
          <li>
            <a className="link-text" href="/contactus">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
