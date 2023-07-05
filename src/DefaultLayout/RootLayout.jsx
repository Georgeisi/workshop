
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

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