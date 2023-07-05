import React from "react";
import logo from "../assets/Group 45.png";
import socialIcons from "../assets/Frame 33.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-100 bg-dark d-flex flex-column align-items-center py-5  footer ">
      <img className=" pb-3" src={logo} alt="" />

      <img src={socialIcons} alt="" />
      {/* < className="text-white d-flex flex-column flex-md-row mx-auto pt-3  gap-3 lst"> */}
        <div className="links d-flex flex-column flex-md-row gap-3 py-4 text-center">
        <Link className="text-white" to={"/"}>Home</Link>
        <Link className="text-white" to={"/about"}>
          About
        </Link>

        <Link className="text-white" to={"/contact"}>
          Contact
        </Link>
        <Link className="text-white" to={"/our-method"}>
          Our Method
        </Link>
        <Link className="text-white" to={'/team'}>Team</Link>
        <Link className="text-white" to={'/stories'}>Stories</Link>
        </div>
        
      
    </div>
  );
};

export default Footer;
