import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team";
// import { Charts } from "./components/Charts/Charts";
// import { AnimatePresence } from "framer-motion";
import NavDrop from "./components/NavDrop";

function App() {
  

  return (
    <>
      <Router>
          {/* <NavDrop/> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
<<<<<<< HEAD
          {/* <Route path="/port" element={<Charts />} />
           */}
          <Route path="/our-method" element={<Method />} />
=======
          {/* <Route path="/port" element={<Charts />} /> */}
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
