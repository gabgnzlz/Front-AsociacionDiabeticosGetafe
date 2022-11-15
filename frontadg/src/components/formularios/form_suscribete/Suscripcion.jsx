import React from 'react';
import "./sus.css";

function Suscripcion() {
  return (
    <div className="container">
    <form action="" class="form">
        <div className="form-input">
            <label for="myname">Nombre</label>
            <input type="text" id="myname"/>
        </div>
        <div className="form-input">
            <label for="email">Correo</label>
            <input type="text" id="email"/>
        </div> 
        <div className="form-input">
            <label for="telefono">Télefono</label>
            <div className="aviso">
                <p>Aviso: si prefieres puedes dejarnos tu número telefónico</p>
            </div>
            <input type="text" id="telefono"/>
        </div> 
        <div>
            <input type="checkbox" id="termsAndConditions"/>
            <label for="termsAndConditions">Acepto política de privacidad de ADG</label>
        </div>
        <div className="form-button">
            <input type="submit" value="Suscríbete"/>
        </div>
    </form>
</div>

  )
}

export default Suscripcion