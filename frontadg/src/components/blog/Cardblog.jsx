import React from 'react';
import image1 from "../../assets/image1.jpg";
import './cardblog.css';


function Cardblog({title,imageUrl,body}) {
  return (

    

   
    <section className="blog">
  
    <div className= "card-container">
        <div className= "image-container">
            <img src={image1} alt=""/>
        </div>
        

       <div className= "text">
        <div className= "card-content">        
            <div className= "card-title">
                <h3>Alimentación</h3>
            </div>

            <div className= "card-body">
                <p>Se recomienda que los nutrientes para las  personas con diabetes sea la misma que para la población general, atendiendo la situación 
                clínica de cada paciente, individualizándose su composición en cada ingesta"</p>
            </div>

            <div className= "btn">
                <button>
                    <a href="/"> Leer más</a>
                </button>
            </div>
        </div>
        </div>
    </div>
  
    </section>
  
    
  )
};

export default Cardblog;