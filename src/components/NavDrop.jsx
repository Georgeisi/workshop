import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from 'react-router-dom'

const DropVariant = {
  hidden: { y: "-100vw" },
  vissible: {
    y: 0,
    transition: {
      delay: 0.25,
    },
  },
};
const NavDrop = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 7rem)",
        marginTop: "7rem",
        zIndex: "1000",
        left: "0",
        top: 0,
        backgroundColor: "black",
        opacity: 0.9,
      }}
      className="  position-absolute py-5  "
    >
      <AnimatePresence>
        <motion.div
          variants={DropVariant}
          initial="hidden"
          animate="vissible"
          exit={{ y: "-100vw", transition: 0.5, delay: 0.25 }}
          className="w-50 mx-auto mt-5 bg-white py-5 d-flex flex-column gap-3 rounded-2"
        >
          <ul className="d-flex flex-column gap-3 text-center text-white">
            <Link className=" text-decoration-none" to={'/'}><li className="text-decoration-none">Home</li></Link>
            <Link to={'/about'}><li>About</li></Link>
            <Link to={'/our-method'}><li>Our Method</li></Link>
            <Link to={'/contact'}><li>Contact</li></Link>
            <Link to={'/team'}><li>Team</li></Link>
            <Link to={'/stories'}><li>Stories</li></Link>
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NavDrop;
