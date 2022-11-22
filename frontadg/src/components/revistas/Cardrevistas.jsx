import React from 'react';
import image1 from "../../assets/image01.jpg";
import image2 from '../../assets/image02.jpg';
import image3 from '../../assets/image03.png';
import imagen4 from '../../assets/image04.png';
import descargar from '../../assets/descargar.png'
import './cardrevistas.css'


function Cardrevistas({title,imageUrl,body}) {
  return (


    <section className="revistas">
  
        <div className= "containerRevistas">
            <div className= "imageRevistas">
                <img src={image1} alt=""/>
            </div>
            <div className= "contentRevistas">
            
                <div className= "titleRevistas">
                    <h3>Padecer diabetes</h3>
                </div>
                <div className= "bodyRevistas">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                </div>
                <div className= "btnRevistas">
                    <button>
                        <a href="/">Descargar</a>
                        <img src={descargar} alt=''/>
                    </button>
                </div>
            </div>
        </div>

        <div className= "containerRevistas">
            <div className= "imageRevistas">
                <img src={image2} alt=""/>
            </div>
            <div className= "contentRevistas">

            
                <div className= "titleRevistas">
                    <h3>Padecer diabetes</h3>
                </div>
                <div className= "bodyRevistas">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                </div> 
                <div className= "btnRevistas">
                    <button>
                        <a href="/">Descargar</a>
                        <img src={descargar} alt=''/>
                    </button>
                </div>

            </div>
        </div>

        <div className= "containerRevistas">
            <div className= "imageRevistas">
                <img src={image3} alt=""/>
            </div>
                <div className= "contentRevistas">

                
                    <div className= "titleRevistas">
                        <h3>Padecer diabetes</h3>
                    </div>
                    <div className= "bodyRevistas">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    </div>
                    
                    <div className= "btnRevistas">
                    <button>
                        <a href="/">Descargar</a>
                        <img src={descargar} alt=''/>
                    </button>
                </div>

                </div>
        </div>

    <div className= "containerRevistas">
        <div className= "imageRevistas">
            <img src={imagen4} alt=""/>
        </div>
            <div className= "contentRevistas">
            
                <div className= "titleRevistas">
                    <h3>Padecer diabetes</h3>
                </div>
                <div className= "bodyRevistas">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                </div>
                <div className= "btnRevistas">
                    <button>
                        <a href="/">Descargar</a>
                        <img src={descargar} alt=''/>
                    </button>
                </div>
            </div>
    </div>
    
    </section>

    
  
    
  )
};

export default Cardrevistas;