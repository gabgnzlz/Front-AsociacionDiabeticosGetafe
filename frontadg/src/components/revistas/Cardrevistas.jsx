import React from 'react';
import { useEffect, useState } from 'react';
import image1 from "../../assets/image01.jpg";
import descargar from '../../assets/descargar.png'
import './cardrevistas.css'

function Cardrevistas({title,imageUrl,body}) {

    const [revistas, setRevistas] = useState([]);

useEffect(() => {
fetch('https://127.0.0.1:8000/rev', {
    method: 'GET',
    headers: new Headers({ 'Content-Type' : 'application/json'}),})
.then((res) => res.json())
.then((data)=>setRevistas(data))
}, []);

  return (

      <section className="revistas">
  
      {revistas.map((int) => {
        return(
        <>
        <div key={int.id} className= "containerRevistas">

            <div className= "imageRevistas">
                <img src={image1} alt=""/>
            </div>
            <div className= "contentRevistas">
            
                <div className= "titleRevistas">
                    <h3>{int.titulo_revista}</h3>
                </div>
                <div className= "bodyRevistas">
                    <p>{int.fragmento_revista}</p>
                </div>
                <div className= "btnRevistas">
                    <button>
                        <a href={int.revista_revista}>Descargar</a>
                        <img src={descargar} alt=''/>
                    </button>
                </div>
            </div>
        </div>
    </>
        )
    })};

    </section>

 )
};

export default Cardrevistas;