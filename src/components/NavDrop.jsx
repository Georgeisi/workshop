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
      }}
    >
      <div className="w-100 h-100 d-flex justify-content-center">
        <AnimatePresence>
          <motion.div
            variants={DropVariant}
            initial="hidden"
            animate="vissible"
            exit={{ y: "-100vw", transition: 0.5, delay: 0.25 }}
            className="d-flex justify-content-center position-relative py-5 modalBox"
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

            <ul className="d-flex flex-column gap-3 text-center text-white">
              <Link to={"/"}>
                <li className="text-dark">Home</li>
              </Link>
              <Link to="/about">
                <li className="text-dark">About</li>
              </Link>
              <Link to="/our-method">
                <li className="text-dark">Our Method</li>
              </Link>
              <Link to="/contact">
                <li className="text-dark">Contact</li>
              </Link>
              <Link to="/team">
                <li className="text-dark">Team</li>
              </Link>
              <Link to="/stories">
                <li className="text-dark">Stories</li>
              </Link>
            </ul>
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
            <Link className=" text-decoration-none" to={'/'}><li className="text-decoration-none">Home</li></Link>
            <Link to={'/about'}><li>About</li></Link>
            <Link to={'/our-method'}><li>Our Method</li></Link>
            <Link to={'/contact'}><li>Contact</li></Link>
            <Link to={'/team'}><li>Team</li></Link>
            <Link to={'/stories'}><li>Stories</li></Link>
          </ul>
        </motion.div>
      </AnimatePresence> */}
    </div>
  );
};

export default NavDrop;
