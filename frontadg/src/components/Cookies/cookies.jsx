import React from 'react'
import "./Cookies.css"



function cookies() {
  return (

    <div class="cookies-card">
    <p class="title">Consentimiento de cookies</p>
    <p class="info">Usamos cookies para mejorar su experiencia de 
    navegación, mostrar contenidos personalizados y para analizar
     el tráfico en nuestra web.<a href="#" className="settings">Leer más</a> </p>
    <button className="cta">Aceptar</button>
    <button className="cta">Rechazar</button>
    <a href="#" className="settings">Configuración</a>
</div>

  )
}

export default cookies
