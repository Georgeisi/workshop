import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team";
import OurMethod from "./components/OurMethod";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/stories" element={<OurMethod />} />
          <Route path="/stories" element={<Stories />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
