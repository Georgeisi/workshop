import React from "react";
import NavBar from "./NavBar";
import profile4 from "../assets/Property 1=Variant2 (1).png";
import profile2 from "../assets/Property 1=Hover (1).png";
import profile1 from "../assets/Property 1=Hover.png";
import profile3 from "../assets/Property 1=Variant2.png";
import {  motion, stagger } from "framer-motion";


const Team = () => {
  const staggerVariant={
    hidden: {
      opacity:0,
      y:-100
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren: 0.5},
        y:0,
        delay:15,
        duration: 5
      
      
    }
    
  }

  const item ={
    hidden: {opacity:0},
    visible: {opacity:1}
  }
  return (
    <div>
      <NavBar />
      <motion.div className="my-5"
        variants={staggerVariant}
        initial='hidden'
        animate='visible'
      >
        <h2>MEET OUR TEAM</h2>
        <div className="prof-grid">
          <motion.div
              variants={item}
          >
            <img src={profile1} alt="" />
            <div className="prof">
              <h4>Gritty Grammar</h4>
              <p>Investor</p>
            </div>
          </motion.div>
          <motion.div
              variants={item}
          >
            <img src={profile2} alt="" />
            <div className="prof">
              <h4>Peter Grifin</h4>
              <p>Photographer</p>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <img src={profile3} alt="" />
            <div className="prof">
              <h4>Sarah Sobowale</h4>
              <p>Product Manager</p>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <img src={profile4} alt="" />
            <div className="prof">
              <h4>Stephen Essien</h4>
              <p>Developer</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
