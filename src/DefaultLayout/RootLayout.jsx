
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

// function fib(500)
// output: 1 1 2 3 5 8 13 21... 500