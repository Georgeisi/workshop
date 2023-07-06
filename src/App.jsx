import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team";
<<<<<<< HEAD
import OurMethod from "./components/OurMethod";
=======
// import { Charts } from "./components/Charts/Charts";
import { AnimatePresence } from "framer-motion";
>>>>>>> f7b527f8c8e67337e279ce8b5f38e76598dea9d6

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
<<<<<<< HEAD
          <Route path="/our-method" element={<OurMethod />} />
=======
          {/* <Route path="/port" element={<Charts />} /> */}
>>>>>>> f7b527f8c8e67337e279ce8b5f38e76598dea9d6
        </Routes>
      </Router>
    </>
  );
}

export default App;
