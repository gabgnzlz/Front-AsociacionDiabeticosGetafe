import React, {useState} from 'react';
import './Carousel.css';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

export default function Carousel(props) {

const [currImg, setCurrImg] = useState(0)

return (
<div className='carousel'>

  <div className='left' onClick={()=> {
    currImg > 0 ? setCurrImg(currImg - 1) : setCurrImg(props.fotos.length - 1)}}>
    < FaAngleLeft className='icon' />
  </div>

  <div className='carouselInner'>

  <div className='center'>
        <h2>{props.fotos[currImg].titulo}</h2>
        <p>{props.fotos[currImg].texto}</p>
      </div>

      <div class='carousel-img' style={{backgroundImage: `url(${props.fotos[currImg].img})`}}>
        <h1 className='transparent'>Hola</h1>
    </div>

  </div>

  <div className='right' onClick={()=> {
    currImg < props.fotos.length - 1 ? setCurrImg(currImg + 1) : setCurrImg(0)}}>
      <FaAngleRight className='icon' />
  </div>

</div>
)
}