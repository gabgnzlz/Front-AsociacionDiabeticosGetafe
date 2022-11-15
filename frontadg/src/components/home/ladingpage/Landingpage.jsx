import React from 'react'
import imagenlanding from '../../../assets/landing.png'
import './ladingpage.css'

function Landingpage() {
  return (
    <>
        <section className='landingpage'>
        <div className='container-landing flex-landing'>
            <div className='left-landing'>
                <h1>ASOCIACIÓN <br/> DIABÉTICOS <br/> GETAFE</h1>
                <button className='btn-landing'>Suscríbete</button>
                
            </div>

            <div className='right-landing topMarign'>
                <div className='img-landing'>
                    <img src={imagenlanding} alt=''/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Landingpage
