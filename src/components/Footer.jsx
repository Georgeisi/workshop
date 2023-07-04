import React from "react";
import logo from "../assets/Group 45.png";
import socialIcons from "../assets/Frame 33.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark my-5 d-flex flex-column align-items-center py-5  footer ">
      <img className=" pb-3" src={logo} alt="" />

      <img src={socialIcons} alt="" />
      <ul className="text-white d-flex pt-3  gap-3 lst">
        <Link className="text-white" to={"/"}><li>Home</li></Link>
        <Link className="text-white" to={"/about"}>
          <li>About</li>
        </Link>

        <Link className="text-white" to={"/contact"}>
          <li>Contact</li>
        </Link>
        <Link className="text-white" to={"/our-method"}>
          <li>Our Method</li>
        </Link>
        <Link className="text-white" to={'/team'}><li>Team</li></Link>
        <Link className="text-white" to={'/stories'}><li>Stories</li></Link>
      </ul>
    </div>
  );
};

export default Footer;
