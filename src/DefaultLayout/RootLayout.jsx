
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
// import NavDrop from '../components/NavDrop'
import Maincontainer from '../components/Maincontainer'


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