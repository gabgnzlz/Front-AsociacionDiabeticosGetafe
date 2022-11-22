import React, { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-router-dom"
import logo from '../../assets/ADG.svg'
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
                <Link to='/nosotros'>Nosotros</Link>
              </li>
              <li>
                <Link to='/noticias'>Noticias</Link>
              </li>
              <li>
                <Link to='/actividades'>Actividades</Link>
              </li>
              <li>
                <Link to='/revista'>Revista</Link>
              </li>
              <li>
                <Link to='/contact'>Contactanos</Link>
              </li>
              
              <li>
                <Link to='/suscribete'>
                <button className="btnSuscribete">Suscríbete</button>
                </Link>
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