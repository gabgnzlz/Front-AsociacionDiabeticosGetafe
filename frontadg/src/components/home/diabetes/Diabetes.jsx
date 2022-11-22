import React from 'react'
import Diabetesdata from "./diabetes"
import './diabetes.css'
import Flotante from './Flotante.jsx'

function Diabetes() {
  return (
    <>
<section className='diabete teoria'>
        <div className='container-diabete topMarign-diabete'>
          <div className='heading-diabete'>
            <h1>TEMAS RELEVANTES EN DIABETES</h1>
          </div>

          <div className='container-diabete grid-diabete topMarign'>
            {Diabetesdata.map((val) => {
              return (
                <div className="card-diabete">
                <div className='box-diabete'>
                  <div className='img-diabete'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text-diabete'>
                    
                    <h2>{val.title}</h2>
                    <span>{val.desc}</span>
                  
                  </div>
                </div>
                <Flotante/>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Diabetes