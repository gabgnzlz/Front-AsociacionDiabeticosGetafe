import React from 'react';
import "./ingresar.css";

function Ingresar() {
  return (
    <>
    <div className='headingIngresar'>
    <h1>INGRESAR</h1>
    </div>
    
    <div className="containerIngresar">
        <form action="" name="formulario" method="get">
            
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" maxlength="30"/>
            

          
           <label for="nombre">Correo</label>
            <input type="email" name="email" id="email" maxlength="20"/>
            
            
            <label for="nombre">Contraseña</label>
            <input type="text" contrasena="contrasena" id="contrasena" maxlength="30"/>
 

                <input type="submit" id="btn" name="btn" value="Ingresar"/>
        </form>
        </div>
    </>
  )
}

export default Ingresar