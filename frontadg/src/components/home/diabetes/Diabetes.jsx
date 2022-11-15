import React from 'react'
import Diabetesdata from "./diabetes.js"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"
import './diabetes.css'

function Diabetes() {
  return (
    <>
<section className='diabete teoria'>
        <div className='container-diabete topMarign'>
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
                    
                    <a href='/'>
                      Leer más
                      <KeyboardDoubleArrowRightIcon className='icon-diabete' />
                    </a>
                  </div>
                </div>
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