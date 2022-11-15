import React, { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'
import './header.css'

function Header() {
    const [sidebar, setSidebar] = useState(false)
  
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header')
    header.classList.toggle('active', window.screenY> 200)
  })
  return (
    <>
    
      <header className='header'>
        <div className='container-header flex-header'>
          <div className='logo-header'>
            <img src={logo} alt='' />
          </div>
          <div className='nav'>
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/pages'>Nosotros</Link>
              </li>
              <li>
                <Link to='/blog'>Noticias</Link>
              </li>
              <li>
                <Link to='/portfolio'>Actividades</Link>
              </li>
              <li>
                <Link to='/shop'>Revista</Link>
              </li>
              <li>
                <Link to='/contact'>Contactanos</Link>
              </li>
              <li>
                <button to='/contact' className="btnSuscribete">Suscríbete</button>
              </li>
              
              
              
            </ul>
          </div>
          <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    
    </>
  )
}

export default Header