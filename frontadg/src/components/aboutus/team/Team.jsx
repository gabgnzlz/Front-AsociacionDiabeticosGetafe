import React from 'react'
import Teamdata from './team.js'
import './team.css'

function Team() {
  return (
    <section className='team'>
        <div className='container-team flex-team'>
          {Teamdata.map((value) => {
            return (
              <>
                <div className='left-team mtop'>
                   

                    <div className='heading-team'>
                    <h1>{value.title}</h1>
                    <img src={value.point2} alt='' />
                    
                  </div>

                  <p><strong>Presidente/a.</strong>{value.desc1}</p>
                  <p><strong>Vice-presidente/a.</strong>{value.desc2}</p>
                  <p><strong>Secretario/a.</strong>{value.desc3}</p>
                  <p><strong>Tesorero/a.</strong>{value.desc4}</p>
                  <p><strong>Vocales. </strong>{value.desc5}</p>
            
                </div>
                <div className='right-team'>                
                    <div className='img-team'>
                        <img src={value.cover} alt='' />                       

                    </div>                  
                  
                </div>
              </>
            )
          })}
        </div>
      </section>
  )
}

export default Team