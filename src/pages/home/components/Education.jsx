import React from 'react'

import EmpleatechLogo from '../../../assets/img/education/empleatech-logo.png'
import EsfeLogo from '../../../assets/img/education/esfe-logo.png'
import PlatziLogo from '../../../assets/img/education/platzi-logo.png'
import CimatLogo from '../../../assets/img/education/cimat-logo.png'

export default function Education() {
  return (
    <>
      <div className="row mb-10" style={{transition: '0.5s'}}>
        <div className="col-12">

          <div className="card bg-light p-7 mt-5 shadow" style={{borderRadius: 20}}>
            <div className="row mb-2">
              <span className="fs-3 text-purple-light fw-bolder">
                <i class="fa-solid fa-user-graduate me-2" />
                Educación
              </span>
              <hr className="mt-2 text-purple-light" />
            </div>
            <div className="row l-r">
            <div className="col-12 col-sm-12 col-md-4 col-ld-4">
                <div className="row l-b d-flex justify-content-center text-center">
                  <img className="education-logo" src={EmpleatechLogo} alt="" />
                  <span className="fs-6 text-gray-700">
                  Diplomado en Habilidades Blandas, Ingles y Tecnología <br />
                  -2019
                  </span>
                </div>                  
              </div>              
              <div className="col-12 col-sm-12 col-md-4 col-ld-4">
                <div className="row l-b d-flex justify-content-center text-center">
                  <img className="education-logo" src={PlatziLogo} alt="" />
                  <span className="fs-6 text-gray-700">
                  Diplomado en Desarrollo Fullstack con Javascript <br />
                  -2020
                  </span>
                </div>                  
              </div>              
              <div className="col-12 col-sm-12 col-md-4 col-ld-4">
                <div className="row l-b d-flex justify-content-center text-center">
                  <img className="education-logo" src={EsfeLogo} alt="" />
                  <span className="fs-6 text-gray-700">
                  Técnico en Ingeniería de Desarrollo de Software <br />
                  -2020, 2021
                  </span>
                </div>                  
              </div>
            </div>
          </div>

          <div className="card bg-light p-7 mt-5 shadow-lg" style={{borderRadius: 20}}>
            <div className="row mb-2">
              <span className="fs-3 text-purple-light fw-bolder">
                <i class="fa-solid fa-award me-2" />
                Logros Académicos
              </span>
              <hr className="mt-2 text-purple-light" />
            </div>
            <div className="column d-flex justify-content-start align-items-center">
              <div className="me-2
                d-sm-none d-md-block 
                d-none d-sm-block
                d-md-none d-lg-block">
                <img className="education-logo" src={CimatLogo} alt="" />
              </div>     
              <div className="">
              <span className="fs-6 text-gray-700">
               Feria CIMAT 2019 
              </span>          
              <br /> 
              <span className="fs-5 text-purple-light">
                Participación y ganador de 3° lugar a nivel nacional <br />
                en área de Tecnología por proyecto innovador. <br />
                Feria realizada por El Ministerio de Educación y la Secretaría de Innovación junto a la Embajada de Gran Bretaña.
                -2019
              </span>           

              </div>       
            </div>          
          </div>          

        </div>
      </div>
      <div className="container mt-5">
        
      </div>
    </>
  )
}
