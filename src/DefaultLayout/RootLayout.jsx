import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import NavDrop from '../components/NavDrop'

const RootLayout = ({children}) => {
  return (
    <div>
        <NavBar/>
        <div>{children}</div>

        <Footer/>
        {/* <NavDrop/> */}

    </div>
  )
}

export default RootLayout