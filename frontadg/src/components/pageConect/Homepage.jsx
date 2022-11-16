import React from 'react'
import { BrowserRouter} from "react-router-dom"
import Landingpage from '../home/ladingpage/Landingpage'
import Diabetes from '../home/diabetes/Diabetes.jsx'
import Header from '../header/Header'
import Footer from '../footer/Footer'
// import Carousel from '../home/carousel/Carousel'

function Homepage() {
  return (
    <>
    <BrowserRouter>
    <Header />
    </BrowserRouter>
    <Landingpage />
    {/* <Carousel /> */}
    <Diabetes />
    <Footer />

    </>
  )
}

export default Homepage