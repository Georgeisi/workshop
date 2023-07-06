<<<<<<< HEAD
=======

>>>>>>> 31114498cf5bf9c8d443ea6489086e308923a43f
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
// import NavDrop from '../components/NavDrop'
import Maincontainer from '../components/Maincontainer'

<<<<<<< HEAD
=======

>>>>>>> 31114498cf5bf9c8d443ea6489086e308923a43f
// eslint-disable-next-line react/prop-types
const RootLayout = ({children}) => {
  return (
    <div>
        <NavBar/>
        <Maincontainer>{children}</Maincontainer>
        <Footer/>
        {/* <NavDrop/> */}

    </div>
  )
}

export default RootLayout