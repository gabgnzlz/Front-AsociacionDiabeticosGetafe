import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png';
import mapa from '../../assets/mapa.png';
import { FaEnvelope, FaMobile, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <>
       <footer>
        <div className='container-footer grid1-footer'>
          <div className='box-footer'>
            <img src={logo} alt='' />          
          </div>

          <div className='box-footer'>
            <h2>Contacto</h2>            
            
            <div className='icon-footer'>
              <FaPhone />
              <label>Teléfono:+34 916651410</label>
            </div>

            <div className='icon-footer'>
              <FaMobile />
              <label>Movil:+34 654778879</label>
            </div>

            <div className='icon-footer'>
            <FaEnvelope  className='envelope'/>
              <label>Email:adgetafe@gmail.com</label>
            </div>
          </div>

          <div className='box-footer'>
            <h2>Ubicación</h2>
            <div className='text-footer'>
              <img src={mapa} alt=''/>            
              <p>Calle Álvaro de Bazán 12 bajos, Local 7.</p>
              <span> 28902 Getafe, Madrid.</span>
            </div>
            
          </div>

          
        </div>
        <div className='legal-footer container-footer'>
          <p>Copyright © 2022 ADGetafe. All Rights Reserved.</p>
          
        </div>
      </footer>
      </>
  )
}

export default Footer