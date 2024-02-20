
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import {Outlet} from 'react-router-dom'

const WebLayout = () => {
  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex="0">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default WebLayout