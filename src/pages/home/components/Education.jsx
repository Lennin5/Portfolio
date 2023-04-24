import React from 'react'

import EmpleatechLogo from '../../../assets/img/education/empleatech-logo.png'
import EsfeLogo from '../../../assets/img/education/esfe-logo.png'
import PlatziLogo from '../../../assets/img/education/platzi-logo.png'
import CimatLogo from '../../../assets/img/education/cimat-logo.png'

import HtmlLogo from '../../../assets/img/education/technologies/html.png'
import PythonLogo from '../../../assets/img/education/technologies/python.png'
import ReactLogo from '../../../assets/img/education/technologies/react.png'
import BootstrapLogo from '../../../assets/img/education/technologies/bootstrap.png'
import FirebaseLogo from '../../../assets/img/education/technologies/firebase.png'


import GitLogo from '../../../assets/img/education/technologies/git.png'
import GithubLogo from '../../../assets/img/education/technologies/github.png'
import SqlLogo from '../../../assets/img/education/technologies/sql.png'
import PhotoshopLogo from '../../../assets/img/education/technologies/photoshop.png'
import FigmaLogo from '../../../assets/img/education/technologies/figma.png'

import RustLogo from '../../../assets/img/education/technologies/rust.png'
import YewLogo from '../../../assets/img/education/technologies/yew.png'
import HasuraLogo from '../../../assets/img/education/technologies/hasura.png'

export default function Education() {
  return (
    <>
      <div className="row mb-10">
        <div className="col-12">

          <div className="row mb-2">
            <span className="fs-3 text-white fw-bolder">
              <i className="fa-solid fa-user-graduate me-2" />
              Educación
            </span>
            <hr className="mt-2 text-white" />
          </div>
          <div className="row d-flex justify-content-around">
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
              <div className="row d-flex justify-content-center text-center">
                <img className="education-logo" src={EmpleatechLogo} alt="" />
                <span className="fs-6 text-gray-700">
                Diplomado en Habilidades Blandas, Ingles y Tecnología <br />
                -2019
                </span>
              </div>                  
            </div>              
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
              <div className="row d-flex justify-content-center text-center">
                <img className="education-logo" src={PlatziLogo} alt="" />
                <span className="fs-6 text-gray-700">
                Diplomado en Desarrollo Fullstack con Javascript <br />
                -2020
                </span>
              </div>                  
            </div>              
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
              <div className="row d-flex justify-content-center text-center">
                <img className="education-logo mb-2" src={EsfeLogo} alt="" />
                <span className="fs-6 text-gray-700">
                Técnico en Ingeniería de Desarrollo de Software <br />
                -2020, 2021
                </span>
              </div>                  
            </div>
          </div>

          <div className="row mb-2 mt-5">
            <span className="fs-3 text-white fw-bolder">
              <i className="fa-solid fa-award me-2" />
              Logros Académicos
            </span>
            <hr className="mt-2 text-white" />
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-12 col-md-11 col-lg-11 card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
              <div className="row d-flex justify-content-center align-items-center text-center text-lg-start">
                <div className="col-12 col-sm-12 col-md-4 col-lg-2">
                <img className="education-logo" src={CimatLogo} alt="" />
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-10">
                  <span className="fs-6 text-gray-700">
                    Participación y ganador de 3° lugar a nivel nacional en feria CIMAT <br />
                    en área de <b>Tecnología</b> por proyecto innovador. <br />
                    -2019
                  </span>
                </div>              
              </div>                  
            </div>              
          </div>       

          <div className="row mb-10 mt-5">
            <span className="fs-3 text-white fw-bolder">
              <i className="fa-solid fa-laptop-code me-2" />
              Tecnologías
            </span>
            <hr className="mt-2 text-white" />
          </div>                  
          <div className="row d-flex justify-content-center">
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img className="technology-logo" src={HtmlLogo} alt="Html Logo" />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img className="technology-logo" src={PythonLogo} alt="Css Logo" />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img className="technology-logo" src={ReactLogo} alt="React Logo" />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img className="technology-logo" src={BootstrapLogo} alt="Sql Logo" />
            </div>     
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img className="technology-logo" src={FirebaseLogo} alt="Js Logo" />
            </div>                               
          </div>

          <div className="row mb-10 mt-5">
            <span className="fs-3 text-white fw-bolder">
              <i className="fa-solid fa-folder-open me-2" />
              Otras
            </span>
            <hr className="mt-2 text-white" />
          </div>        
          <div className="row d-flex justify-content-center">            
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <img className="technology-logo" src={GithubLogo} alt="Html Logo" />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img className="technology-logo" src={GitLogo} alt="Html Logo" />
            </div>             
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <img className="technology-logo" src={SqlLogo} alt="Html Logo" />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <img className="technology-logo" src={PhotoshopLogo} alt="Html Logo" />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <img className="technology-logo" src={FigmaLogo} alt="Html Logo" />
            </div>            
          </div>

          <div className="row mb-10 mt-5">
            <span className="fs-5 text-white fw-bolder">
              <i className="fa-solid fa-spinner me-2" />
              Aprendiendo...
            </span>
            <hr className="mt-2 text-white" />
          </div>           
          <div className="row d-flex justify-content-center">
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">  
              <img className="technology-logo" src={RustLogo} alt="Html Logo" />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <img className="technology-logo" src={YewLogo} alt="Html Logo" />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <img className="technology-logo" src={HasuraLogo} alt="Html Logo" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
