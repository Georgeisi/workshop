
import {motion} from 'framer-motion'



const ContactVariant={
  hidden:{x:'100vw'} ,
  vissible: {
    x:0,
    transition:{
      delay:0.5,
    }
  }
  
}
const ContactInput = () => {
  return (
    <motion.div className='w-50 mx-auto text-start'
    variants={ContactVariant}
    initial='hidden'
    animate='vissible'
    >
       <p> Send us A Message </p>
       <form action="">
       <div >
       <label htmlFor="">Name</label>
        <input className='w-100' type="text" />
       </div>
       <div className='w-100'>
       <label htmlFor="">Email Address</label>
        <input className='w-100' type="text" />
       </div>
       <div className='w-100'>
       <label htmlFor="">Phone</label>
        <input className='w-100' type="text" />
       </div>
      <div className="w-100">
      <label  htmlFor="">Message</label>
       <textarea className='w-100' name="" id="" cols="30" rows="10"></textarea>
      </div>
      <button className='btn btn-dark rounded-0 w-100'>send</button>
       </form>
    </motion.div>
  )
}

export default ContactInput