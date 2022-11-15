import React from 'react'
import Misiondata from './mision.js'
import './mision.css'

function Mision() {
  return (
    <>
    <section className='mision'>
        <div className='container-mision flex-mision'>
          {Misiondata.map((value) => {
            return (
              <>
                <div className='left-mision mtop'>
                    <div className='img-mision'>
                        <img src={value.cover} alt='' />
                        

                    </div>
                </div>
                <div className='right-mision'>                

                  <div className='heading-mision'>
                    <h1>{value.title}</h1>
                    <img src={value.point1} alt='' />
                    
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>
                  <p>{value.desc4}</p>
                  <p>{value.desc5}</p>
                  <p>{value.desc6}</p>
                  <p>{value.desc7}</p>
                  
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Mision