import React from 'react'
import LoginNavbar from '../components/LoginNavbar'
import NavMenu from '../components/NavMenu'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Queries from '../components/Queries'
import Footer from '../components/Footer'
import Products from '../components/Products'
const LoginHome = ({basketQuantity}) => {
  return (
    <div>
        <LoginNavbar/>
        {/* <Slider/> */}
        <Categories/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default LoginHome