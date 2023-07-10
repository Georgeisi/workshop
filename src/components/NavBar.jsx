import { useEffect, useState } from 'react'
import logo from '../assets/Group 45.png'
import NavDrop from './NavDrop'
// import  dropdown from '../assets/arrow-square-down.png'


const NavBar = () => {
  const [show,setShow]=useState(false)

  useEffect(()=>{
    if(show===true){
      document.body.style.overflow='hidden'
    }else{
      document.body.style.overflow='unset'

    }

  },[show])
  return (
    <div className='bg-white d-flex flex-row align-items-center  my-auto navy'>
        <img onClick={()=>{setShow(!show)}} className='mx-auto my-auto'  src={logo} alt="" />
        {/* <img src={dropdown} alt="" /> */}
        {show&& <NavDrop/>}
    </div>
  )
}

export default NavBar