import NavBar from "./NavBar";
import profile4 from "../assets/Property 1=Variant2 (1).png";
import profile2 from "../assets/Property 1=Hover (1).png";
import profile1 from "../assets/Property 1=Hover.png";
import profile3 from "../assets/Property 1=Variant2.png";
import {  motion, } from "framer-motion";


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
        <h2 className="text-center py-4">MEET OUR TEAM</h2>
        <div className="prof-grid d-flex flex-sm-column flex-md-row gap-5 mx-auto">
          <motion.div
              variants={item}
          >
            <img className="w-100" src={profile1} alt="" />
            <div className="prof w-100 py-1 mt-3 mx-auto">
              <h4 className="text-center ">Gritty Grammar</h4>
              <p className="text-center ">Investor</p>
            </div>
          </motion.div>
          <motion.div
              variants={item}
          >
            <img className="w-100" src={profile2} alt="" />
            <div className="prof w-100 py-1 mt-3 mx-auto">
              <h4 className="text-center ">Peter Grifin</h4>
              <p className="text-center ">Photographer</p>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <img className="w-100" src={profile3} alt="" />
            <div className="prof w-100 py-1 mt-3 mx-auto">
              <h4 className="text-center ">Sarah Sobowale</h4>
              <p className="text-center ">Product Manager</p>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <img className="w-100" src={profile4} alt="" />
            <div className="prof w-100 py-1 mt-3  mx-auto">
              <h4 className="text-center ">Stephen Essien</h4>
              <p className="text-center ">Developer</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
