import React from "react";
import NavBar from "./NavBar";
import profile4 from "../assets/Property 1=Variant2 (1).png";
import profile2 from "../assets/Property 1=Hover (1).png";
import profile1 from "../assets/Property 1=Hover.png";
import profile3 from "../assets/Property 1=Variant2.png";

const Team = () => {
  return (
    <div>
      <NavBar />
      <div className="my-5">
        <h2>MEET OUR TEAM</h2>
        <div className="prof-grid">
          <div>
            <img src={profile1} alt="" />
            <div className="prof">
              <h4>Gritty Grammar</h4>
              <p>Investor</p>
            </div>
          </div>
          <div>
            <img src={profile2} alt="" />
            <div className="prof">
              <h4>Peter Grifin</h4>
              <p>Photographer</p>
            </div>
          </div>
          <div>
            <img src={profile3} alt="" />
            <div className="prof">
              <h4>Sarah Sobowale</h4>
              <p>Product Manager</p>
            </div>
          </div>
          <div>
            <img src={profile4} alt="" />
            <div className="prof">
              <h4>Stephen Essien</h4>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
