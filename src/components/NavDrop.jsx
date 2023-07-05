import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          <ul className="d-flex flex-column gap-3">
            <li>Home</li>
            <li>About</li>
            <li>Our Method</li>
            <li>Contact</li>
            <li>Team</li>
            <li>Stories</li>
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NavDrop;
