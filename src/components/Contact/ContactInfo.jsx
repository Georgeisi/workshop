import React from 'react'
import socials from '../Contact/img/Frame 80.png'

const ContactInfo = () => {
  return (
    <div className='w-50 text-start'>
        <p>Contact Information</p>
        <h4>General Enquiry</h4>
        <p>info@workshopapp.com</p>
        <h4>Visit us</h4>
        <p>8 Jubilee Cmd road magodo,Lagos State Nigeria</p>
        <h4>Follow Us</h4>
        <img src={socials} alt="" />
    </div>
  )
}

export default ContactInfo