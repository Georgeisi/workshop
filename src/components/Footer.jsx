import React from "react";
import logo from "../assets/Group 45.png";
import socialIcons from "../assets/Frame 33.png";

const Footer = () => {
  return (
    <div className="bg-dark my-5 d-flex flex-column align-items-center py-5  footer ">
      <img className=" pb-3" src={logo} alt="" />

      <img src={socialIcons} alt="" />
      <ul className="text-white d-flex pt-3  gap-3 lst">
        <li>Home</li>
        <li>About</li>
        <li>Our Method</li>
        <li>Contact</li>
        <li>Team</li>
        <li>Stories</li>
      </ul>
    </div>
  );
};

export default Footer;
