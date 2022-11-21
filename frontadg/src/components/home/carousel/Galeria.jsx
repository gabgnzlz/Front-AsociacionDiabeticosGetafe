import React from 'react'
import Carousel from './carousel'
import { Images } from './CarouselData'
import './Carousel.css'


function Galeria() {
  return (

    <div className='ins-com'>
        <h1>NOTICIAS</h1>
        <Carousel
        fotos={Images}/>
        
    </div>
  )
}

export default Galeria