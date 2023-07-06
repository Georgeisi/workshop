import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// eslint-disable-next-line react/prop-types
const RootLayout = ({children}) => {
  return (
    <div>
        <NavBar/>
        <div>{children}</div>
        <Footer/>

    </div>
  )
}

export default RootLayout