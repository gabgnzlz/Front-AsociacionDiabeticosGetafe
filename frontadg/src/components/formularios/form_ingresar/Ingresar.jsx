import React from 'react';
import "./ingresar.css";

function Ingresar() {
  return (
    <div className="container">
        <form action="" name="formulario" method="get">
            <h1>INGRESAR</h1>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" maxlength="30"/>
            

          
           <label for="nombre">Correo</label>
            <input type="email" name="email" id="email" maxlength="20"/>
            
            
            <label for="nombre">Contraseña</label>
            <input type="text" contrasena="contrasena" id="contrasena" maxlength="30"/>
                <div className="contrasena"> 
                    
                    <p>¿Olvidaste la contraseña?</p>
                </div>

                <input type="submit" id="btn" name="btn" value="Ingresar"/>
        </form>
        </div>
  )
}

export default Ingresar