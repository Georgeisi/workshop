import React from "react";
import "../../src/App.css";
import RootLayout from "../DefaultLayout/RootLayout";
import Union from "../assets/Group 154  (4).png";
import Shop1 from "../assets/shop1.png";
import frame from "../assets/Frame 52 (1).png";
import framee from "../assets/Group 154  (7).png";
import frammee from "../assets/Group 154  (2).png";
import frameee from "../assets/Group 154  (13).png";
import frameeee from "../assets/Group 154  (3).png";
import Unionn from "../assets/Group 154  (5).png";
import frame2 from "../assets/Group 153 (1).png"
import frame1 from "../assets/Group 154  (1).png"
const Stories = () => {
  return (
    <RootLayout>
      <section className="sec1">
        <div className="stories-header">
          <h3>The Method of WorkshopApp </h3>
          <p className="">
            Below is a step by step representation of the hiring process of
            WorkshopApp
          </p>
        </div>
        <div className="stories-overview">
          <h2 className="text-start">Overview</h2>
          <p className="text-start">
            We are a virtual studio that only aims at hiring only the best
            qualified people, hence to achieve this process, candidates are made
            to go through a series of task with already set requirements, this
            is done in order to test as well as bring out the best. Only
            qualified candidats gets hired. The steps include:
          </p>
        </div>
      </section>

      <div className="process">
        <h2>Selection Process</h2>
      </div>
      <p className="text-start">
        There are three various steps in this stage, and they are as follow:
      </p>

      <div className="d-flex justify-content-around align-items-center">
        <div className="col-md-2">
        <img src={Union} alt="" height="450px" />
        </div>
        
          <div className="flex flex-column col-md-10">
          <div className="d-flex py-4 justify-content-between">
            <div className="bg-dark text-white col-md-6 p-4">
              <h3>The Hiring Process</h3>
              <p>
                Applicants are hired in their numbers as long as their
                application is before the deadline of the company.
              </p>
            </div>
            <div className="frame-img col-md-6">
            <img src={frammee} alt="" />
            </div>     
          </div>
  
          <div className="d-flex py-4 justify-content-between">
            <div className="bg-dark text-white col-md-6 p-4">
              <h3>The Test Process</h3>
              <p>
                Applicants are then put through a number of test through
                competions.This process is done to first reduce the number of
                candidates as well as challenge them into bringing out the best
                in them.
              </p>
            </div>
            <div className="frame-img col-md-6">
            <img src={frameee} alt="" />
            </div>  
          </div>

          <div className="d-flex py-4 justify-content-between">
            <div className="bg-dark text-white col-md-6 p-4">
              <h3>The Elimination Process</h3>
              <p>
                Applicants who dont meet up to the task requirements /
                deadlines, get eliminated. This process continues until we are
                left with our desired number / the “Best”
              </p>
            </div>
            <div className="frame-img col-md-6">
            <img src={frameeee} alt="" />
            </div>
          </div>
          </div>
      </div>

      <div className="Happens">
        <h2>What Happens After Selection</h2>
      </div>
      <p className="text-start">There are two various steps in this stage, and they are as follow:</p>
      <div className="d-flex justify-content-around align-items-center">
        <div className="col-md-2">
      <img src={Unionn} alt="" height="300px"/>
        </div>
<div className="flex flex-column col-md-10">
<div className="d-flex py-4 justify-content-between">
        <div className="bg-dark text-white col-md-6 p-4">
          <h3>The Victorious</h3>
          <p>
            Applicants who have emerges victorious are then merged into teams of
            competent individuals.
          </p>
        </div>
       <div className="frame-img col-md-6">
       <img src={frame1} alt="" />
       </div>
      </div>

      <div className="d-flex py-4 justify-content-between">
        <div className="bg-dark text-white col-md-6 p-4">
          <h3>The Victorious</h3>
          <p>
            Applicants who have emerges victorious are then merged into teams of
            competent individuals.
          </p>
        </div>
        <div className="frame-img col-md-6">
       <img src={frame2} alt="" />
       </div>
    </div>
      </div>
</div>
 </RootLayout>
  );
};

export default Stories;
