import React from 'react';
import { useEffect, useState } from 'react';
// import image1 from "../../assets/image01.jpg";
import './cardblog.css';


function Cardblog({title,imageUrl,body}) {
const [noticias, setNoticias] = useState([]);

useEffect(() => {
fetch('https://127.0.0.1:8000/not', {
    method: 'GET',
    headers: new Headers({ 'Content-Type' : 'application/json'}),})
.then((res) => res.json())
.then((data)=>setNoticias(data))
}, []);

return (

<section className="blog">
    {noticias.map((int) => {
        return(
    <div key={int.id} className="card-container">
        <div className="image-container">
            <img src={int.imagen_noticia} alt="img"/>
        </div>


        <div className="text">
            <div className="card-content">
                <div className="card-title">
                    <h3>{int.titulo_noticia}</h3>
                </div>

                <div className="card-body">
                    <p>{int.fragmento_noticia}</p>
                </div>

                <div className="btn">
                    <button>
                        <a href="/"> Leer más</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
        )
    })}
</section>


)
};

export default Cardblog;