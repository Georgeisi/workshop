import { useState } from "react";
import logo from "../assets/Group 45.png";
import { BiChevronDown } from "react-icons/bi";
import { Image } from "react-bootstrap";
import NavDrop from "./NavDrop";

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        style={{
          height: "6.5rem",
          boxShadow: "0px 2px 2px rgba(0,0,0,0.2)",
          zIndex: 10,
        }}
        className="bg-white position-fixed top-0 left-0 w-100 d-flex align-items-center justify-content-center"
      >
        <div className="d-flex gap-2 align-items-center">
          <div style={{ width: "250px", height: "4.5rem" }}>
            <Image
              className="w-100 h-100"
              style={{ objectFit: "fill" }}
              src={logo}
            />
          </div>
          <div
            className="d-flex align-items-center justiofy-content-center cursor"
            style={{
              marginTop: "12%",
              width: "20px",
              height: "20px",
              borderRadius: "5px",
              border: "2px solid black",
            }}
            onClick={() => setShow(true)}
          >
            <BiChevronDown color="black" />
          </div>
        </div>
      </div>
      {show && <NavDrop setShow={setShow} />}
    </>
  );
};

export default NavBar;
