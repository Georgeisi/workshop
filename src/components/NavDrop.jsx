import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { TbLetterX } from "react-icons/tb";

const DropVariant = {
  hidden: { y: "-100vh" },
  vissible: {
    y: 0,
    transition: {
      delay: 0.25,
    },
  },
};

// eslint-disable-next-line react/prop-types
const NavDrop = ({ setShow }) => {
  return (
    <div
      className="position-fixed start-0"
      style={{
        top: "6.5rem",
        height: "calc(100vh - 6.5rem)",
        width: "100%",
        background: "rgb(0,0,0,0.4)",
        zIndex: "10",
      }}
    >
      <div className="w-100 h-100 d-flex justify-content-center">
        <AnimatePresence>
          <motion.div
            variants={DropVariant}
            initial="hidden"
            animate="vissible"
            exit={{ y: "-100vh", transition: 0.5, delay: 0.25 }}
            className="d-flex flex-column justify-content-center align-items-center position-relative py-5 py-lg-2 modalBox"
          >
            <div
              className="position-absolute d-flex justify-content-center align-items-center cursor"
              style={{
                top: "10px",
                right: "10px",
                width: "20px",
                height: "20px",
                borderRadius: "5px",
                border: "2px solid black",
              }}
              onClick={() => setShow(false)}
            >
              <TbLetterX />
            </div>
            <Link to="/">
              <p className="text-dark">Home</p>
            </Link>
            <Link to="/about">
              <p className="text-dark">About</p>
            </Link>
            <Link to="/our-method">
              <p className="text-dark">Our Method</p>
            </Link>
            <Link to="/contact">
              <p className="text-dark">Contact</p>
            </Link>
            <Link to="/team">
              <p className="text-dark">Team</p>
            </Link>
            <Link to="/stories">
              <p className="text-dark">Stories</p>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* <AnimatePresence>
        <motion.div
          variants={DropVariant}
          initial="hidden"
          animate="vissible"
          exit={{ y: "-100vw", transition: 0.5, delay: 0.25 }}
          className="w-50 mx-auto mt-5 bg-white py-5 d-flex flex-column gap-3 rounded-2"
        >
          <ul className="d-flex flex-column gap-3 text-center text-white">
            <Link className=" text-decoration-none" to={'/'}><p className="text-decoration-none">Home</p></Link>
            <Link to={'/about'}><p>About</p></Link>
            <Link to={'/our-method'}><p>Our Method</p></Link>
            <Link to={'/contact'}><p>Contact</p></Link>
            <Link to={'/team'}><p>Team</p></Link>
            <Link to={'/stories'}><p>Stories</p></Link>
          </ul>
        </motion.div>
      </AnimatePresence> */}
    </div>
  );
};

export default NavDrop;
