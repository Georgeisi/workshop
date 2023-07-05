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
<<<<<<< HEAD


=======
// import { Charts } from "./components/Charts/Charts";
>>>>>>> a13c0fa54b9bc613b334c19093204fe16d55e80f
import { AnimatePresence } from "framer-motion";
import Method from "./components/Method";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
<<<<<<< HEAD
          <Route path="/port" element={<Charts/>} />
          {/* <Route path="/our-method" element={<Our-method/>} /> */}
=======
<<<<<<< HEAD
          {/* <Route path="/port" element={<Charts />} />
           */}
          <Route path="/our-method" element={<Method />} />
=======
          {/* <Route path="/port" element={<Charts />} /> */}
>>>>>>> f7b527f8c8e67337e279ce8b5f38e76598dea9d6
>>>>>>> a13c0fa54b9bc613b334c19093204fe16d55e80f
        </Routes>
      </Router>
    </>
  );
}

export default App;
