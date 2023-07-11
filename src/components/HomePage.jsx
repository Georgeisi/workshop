import RootLayout from "../DefaultLayout/RootLayout";
import bulb from "../assets/Light bulb-bro (1) 1.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const HomePage = () => {
  return (
    <div>
      <RootLayout>
        <div className="mx-auto container">
          <h2>A Venture Studio With A </h2>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2>'Unique' Twist</h2>
          <p className="w-75 mx-auto py-2">
            Explore the 24 apps with unique solutions and their metrics
          </p>
          {/* <div className="my-5 bulb" style={{ position: "relative" }}> */}
          {/* <img className="circle" src={circle} alt="" /> */}
          {/* </div> */}
          <div className="bulb-bg">
            <img className="bulb p-5 w-50 mx-auto" src={bulb} alt="" />
          </div>
          .
          <div className="d-flex justify-content-center mb-4">
            <div className="bg-dark py-2 px-4 d-flex gap-2 align-items-center">
              <p className="text-white mb-0">Our Portfolio</p>
              <AiOutlineArrowRight color="white" size="1.3rem" />
            </div>
          </div>
          <p className="w-50 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            voluptates suscipit incidunt nostrum, amet, placeat assumenda nam
            dicta ipsa
          </p>
        </div>
        {/* <NavDrop/> */}
      </RootLayout>
    </div>
  );
};

export default HomePage;
