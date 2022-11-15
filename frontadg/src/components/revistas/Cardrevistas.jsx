import React from 'react';
import image1 from "../../assets/image01.jpg";
import image2 from '../../assets/image02.jpg';
import image3 from '../../assets/image03.png';
import imagen4 from '../../assets/image04.png';
import './cardrevistas.css'


function Cardrevistas({title,imageUrl,body}) {
  return (


    <section className="revistas">
  
    <div className= "card-container">
        <div className= "image-container">
            <img src={image1} alt=""/>
        </div>
        <div className= "card-content">

        </div>
        <div className= "card-title">
            <h3>Padecer diabetes</h3>
        </div>
        <div className= "card-body">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div> <br />
        <div className= "btn">
            <button>
                <a href="/">Descargar</a>
            </button>
        </div>
    </div>

    <div className= "card-container">
        <div className= "image-container">
            <img src={image2} alt=""/>
        </div>
        <div className= "card-content">

        </div>
        <div className= "card-title">
            <h3>Padecer diabetes</h3>
        </div>
        <div className= "card-body">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div> <br />
        <div className= "btn"> 
            <button>
                <a href="/">Descargar</a>
            </button>
        </div>
    </div>

    <div className= "card-container">
        <div className= "image-container">
            <img src={image3} alt=""/>
        </div>
        <div className= "card-content">

        </div>
        <div className= "card-title">
            <h3>Padecer diabetes</h3>
        </div>
        <div className= "card-body">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div> <br />
        <div className= "btn">
            <button>
                <a href="/">Descargar</a>
            </button>
        </div>
    </div>

    <div className= "card-container">
        <div className= "image-container">
            <img src={imagen4} alt=""/>
        </div>
        <div className= "card-content">

        </div>
        <div className= "card-title">
            <h3>Padecer diabetes</h3>
        </div>
        <div className= "card-body">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div> <br />
        <div className= "btn">
            <button>
                <a href="/">Descargar</a>
            </button>
        </div>
    </div>
    </section>

    

    
  
    
  )
};

export default Cardrevistas;