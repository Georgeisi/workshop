import { useState } from 'react'
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import HomePage from './components/HomePage'
import AboutUs from './components/AboutUs';
import Contact from './components/Contact/Contact';
import Team from './components/Team';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/team' element={<Team/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
