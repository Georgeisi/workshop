import React from 'react'
import socials from '../Contact/img/Frame 80.png'
import {motion} from 'framer-motion'


const ContactVariant={
  hidden:{x:'-100vw'} ,
  vissible: {
    x:0,
    transition:{
      delay:0.25,
    }
  }
  
}
const ContactInfo = () => {
  return (
    <motion.div className='w-50 text-start'
    variants={ContactVariant}
    initial='hidden'
    animate='vissible'
    
    >
        <p>Contact Information</p>
        <h4>General Enquiry</h4>
        <p>info@workshopapp.com</p>
        <h4>Visit us</h4>
        <p>8 Jubilee Cmd road magodo,Lagos State Nigeria</p>
        <h4>Follow Us</h4>
        <img src={socials} alt="" />
    </motion.div>
  )
}

export default ContactInfo