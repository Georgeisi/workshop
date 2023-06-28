import React from "react";
import RootLayout from "../DefaultLayout/RootLayout";
import circle from "../assets/Ellipse 1.png";
import arrow from "../assets/material-symbols_arrow-forward.png";

const HomePage = () => {
  return (
    <div>
      <RootLayout>
        <div className="my-3 mx-auto">
          <h2>A Venture Studio With A </h2>
          <h2>'Unique' Twist</h2>
          <p>Explore the 24 apps with unique solutions and their metrics</p>
          <div className="my-5 bulb" style={{ position: "relative" }}>
            <img className="circle" src={circle} alt="" />
          </div>
          <div className="d-flex bg-dark arrow mx-auto">
            <button className="bg-dark text-white">Our Portfolio</button>
            <img src={arrow} alt="" />
          </div>
          <p className="w-50 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            voluptates suscipit incidunt nostrum, amet, placeat assumenda nam
            dicta ipsa
          </p>
        </div>
      </RootLayout>
    </div>
  );
};

export default HomePage;
