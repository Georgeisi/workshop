import React from 'react'
import logo from '../assets/Group 45.png';
import Navbardrop from '../components/Navbardrop';

const NavBar = () => {
  return (
    <div className='bg-white d-flex flex-row align-items-center  my-auto navy'>
        <img className='mx-auto my-auto'  src={logo} alt="" />
        <Navbardrop/>
    </div>
  )
}

export default NavBar