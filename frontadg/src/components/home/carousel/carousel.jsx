import React, {useState} from 'react';
import './Carousel.css';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
export default function Carousel(props) {

const [currImg, setCurrImg] = useState(0)

return (
<section className='carousel'>

  <div className='left-carousel' onClick={()=> {
    currImg > 0 ? setCurrImg(currImg - 1) : setCurrImg(props.fotos.length - 1)}}>
    < FaAngleLeft className='icon' />
  </div>

  <div className='carouselInner'>

  <div className='center-carousel'>
        <h2>{props.fotos[currImg].titulo}</h2>
        <p>{props.fotos[currImg].texto}</p>
        <button>Leer Más <KeyboardDoubleArrowRightIcon className='icon-galeria' /> </button>
      </div>

      <div class='carousel-img' style={{backgroundImage: `url(${props.fotos[currImg].img})`}}>
        <h1 className='transparent'>Hola</h1>
      </div>

      

  </div>

  <div className='right-carousel' onClick={()=> {
    currImg < props.fotos.length - 1 ? setCurrImg(currImg + 1) : setCurrImg(0)}}>
      <FaAngleRight className='icon' />
  </div>

</section>
)
}