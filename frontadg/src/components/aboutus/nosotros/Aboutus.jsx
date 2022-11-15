import React from 'react'
import Aboutdata from './aboutus.js'
import './aboutus.css'

function Aboutus() {
  return (
    <>
    <section className='about'>
        <div className='container-about flex-about'>
          {Aboutdata.map((value) => {
            return (
              <>
                <div className='left-about mtop'>
                  <div className='heading-about'>
                    <h1>{value.title}</h1>
                    <h3>Somos una entidad benéfica, sin ánimo de lucro</h3>
                  </div>

                  <p>{value.desc1}</p>
                  
                  <h3>Ofrecemos información y formación diabetológica  paciente y familiares </h3>
                </div>
                <div className='right-about'>
                  <div className='img-about'>
                    <img src={value.cover} alt='' />
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Aboutus