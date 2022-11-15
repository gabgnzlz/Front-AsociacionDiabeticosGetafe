import React from 'react';
import "./form_contacto.css";

function Contacto() {
  return (
    <div className="container_fcontacto">
    <form action="" className="form">
        <div className="form-input">
            <label for="email">Correo</label>
            <input type="text" id="email"/>
        </div> 
        <br></br>
        <br></br>
        
        <div className="form-input">
            <label for="mensaje">Mensaje</label>
            <textarea name="mensaje" id="mensaje"></textarea>
            </div>
        <div>
            <input type="checkbox" id="termsAndConditions"/>
            <label for="termsAndConditions">Acepto política de privacidad de ADG</label>
        </div>
        <div className="form-button">
            <input type="submit" value="Contáctanos"/>
        </div>
    </form>
</div>
  )
}

export default Contacto