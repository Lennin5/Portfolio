import React, { useState } from 'react'
import { Parallax } from 'react-parallax';

import VertexBg from '../../../assets/img/experience/vertex-bg.png'
import VertexLogoX from '../../../assets/img/experience/vertex-x.png'

import MedixlabLogo from '../../../assets/img/experience/medixlab.png'
import MedixlabBg from '../../../assets/img/experience/medixlab-bg.png'
import MedixlabBgMobile from '../../../assets/img/experience/medixlab-bg-mobile.png'

import RoboxmakerLogo from '../../../assets/img/experience/roboxmaker.png'
import RoboxmakerBg from '../../../assets/img/experience/roboxmaker-bg.png'

import LineaRosaLogoWhite from '../../../assets/img/experience/linea-rosa-white.png'
import LineaRosaLogoPink from '../../../assets/img/experience/linea-rosa-pink.png'
import LineaRosaBg from '../../../assets/img/experience/linea-rosa-bg.png'
import LineaRosaBgMobile from '../../../assets/img/experience/linea-rosa-bg-mobile.png'
import PinkCircle from '../../../assets/img/experience/pink-circle.png'
import LilacCircle from '../../../assets/img/experience/lilac-circle.png'
import PurpleCircle from '../../../assets/img/experience/purple-circle.png'
import WhitePoint from '../../../assets/img/experience/white-point.png'

import LineaRosaAcademy0Bg from '../../../assets/img/experience/linea-rosa-academy-0-bg.png'
import LineaRosaAcademy1Bg from '../../../assets/img/experience/linea-rosa-academy-1-bg.png'
import LineaRosaAcademy2Bg from '../../../assets/img/experience/linea-rosa-academy-2-bg.png'
import LineaRosaAcademy3Bg from '../../../assets/img/experience/linea-rosa-academy-3-bg.png'
import LineaRosaAcademy4Bg from '../../../assets/img/experience/linea-rosa-academy-4-bg.png'
import LineaRosaAcademyMobileBg from '../../../assets/img/experience/linea-rosa-academy-mobile.png'

import ListRobots from './ListRobots';

import {useMediaSm} from '../../../hooks/useMediaQuery';

export default function Experience() {

  const [collapseMedixlabDetails, setCollapseMedixlabDetails] = useState(false);
  const [collapseRoboxmakerDetails, setCollapseRoboxmakerDetails] = useState(false);
  const [collapseLineaRosaDetails, setCollapseLineaRosaDetails] = useState(false);
  const [collapseLineaRosaAcademyDetails, setCollapseLineaRosaAcademyDetails] = useState(false);

  const handleCollapseMedixlabDetails = () => setCollapseMedixlabDetails(!collapseMedixlabDetails);
  const handleCollapseRoboxmakerDetails = () => setCollapseRoboxmakerDetails(!collapseRoboxmakerDetails);
  const handleCollapseLineaRosaDetails = () => setCollapseLineaRosaDetails(!collapseLineaRosaDetails);
  const handleCollapseLineaRosaAcademyDetails = () => setCollapseLineaRosaAcademyDetails(!collapseLineaRosaAcademyDetails);

  const isMobile = useMediaSm();

  return (
    <>
      <div className="row mb-10">
        <div className="col-12">

          <div className="row mb-2 mt-5">
              <span className="fs-3 text-white fw-bolder">
                <i className="fa-solid fa-briefcase me-2" />
                Experiencia en <a className="text-gray-500" href="https://vertexstudio.co/">VertexStudio</a>
              </span>
              <hr className="mt-2 text-white" />
            </div>
            <div className="row d-flex justify-content-center align-items-center" style={{}}>
              <div className="col-12 col-sm-12 col-md-11 col-lg-11 card bg-transparent border-0 shadow-lg m-3 p-4" style={{borderRadius: 20, background: `url(${VertexBg})`, backgroundSize: "cover"}}>
                  <div className="row d-flex justify-content-center align-items-center text-center text-lg-start">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-2">
                    <img className="education-logo" src={VertexLogoX} alt="" style={{height: "9rem"}} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-10">                    
                      <span className="fs-6 text-white">
                        Durante mis dos años <b>(Finales de 2021 e inicios de 2023)</b> como desarrollador web en Vertex, trabajé en diversos proyectos que incluyeron el desarrollo de aplicaciones web,
                        la creación de sitios web personalizados y la optimización del rendimiento de sitios web existentes. 
                        Trabajé en estrecha colaboración con un equipo de diseñadores y otros desarrolladores para asegurar la entrega de soluciones 
                        de alta calidad usando las mejores prácticas. <br />
                        <br />
                        Aprendí también a desarrollar diferentes áreas como el diseño, el mantenimiendo, la optimización y la administración de los mismos utilizando el entornos ERP (Enterprice Resource Planning) de Odoo.
                        <br /><br />
                        A la vez propuse trabajar con el framework de ReactJS y bootstrap para el desarrollo de las aplicaciones web, lo que me permitió aprender a manejarlo más en un proyecto real y aportar a la empresa con nuevas ideas.
                      </span>
                    </div>              
                  </div> 
              </div>              
            </div>

            <div className="row mb-2 mt-5">
              <span className="fs-3 text-white fw-bolder">
                <i className="fa-solid fa-code me-2" />
                Proyectos
              </span>
              <hr className="mt-2 text-white" />
            </div>      

            {/* Medixlab */}
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-sm-12 col-md-11 col-lg-12 card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
                <div className="row d-flex justify-content-center align-items-center text-center text-lg-start">               
                <div className="col-12">       
                    <Parallax                        
                      bgImage={isMobile ? MedixlabBgMobile : MedixlabBg}
                      bgImageAlt="Medixlab"
                      strength={200}
                      style={{borderRadius: 20}}
                      >                        
                    <div style={{ height: '400px' }} className='d-flex justify-content-center align-items-center'>
                      <div className="text-white pt-8">
                          <section className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <img className="education-logo" src={MedixlabLogo} alt="" style={{height: "6rem"}} />
                          </section>                                              
                      </div> 
                    </div>
                    </Parallax>  
                  </div>                  
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-3">
                    <span className="fs-6 text-medixlab-color mb-2">
                    <a href="https://medixlab.vxr.space/" target="blank" className="text-medixlab-color"><b><i className="fa-solid fa-user-doctor me-2 fs-4" />Medixlab,</b></a> una página web para una empresa que ofrece servicios de simulación médica para formar estudiantes de medicina
                    </span>
                    <br /><br />
                    <button className="btn btn-primary bg-medixlab-color" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#collapseMedixlabDetails" aria-expanded="false" aria-controls="collapseMedixlabDetails" 
                    style={{borderRadius: 10}} onClick={handleCollapseMedixlabDetails}>
                      {
                        collapseMedixlabDetails ?
                        <i className="fa-solid fa-chevron-up me-2" />
                        :
                        <i className="fa-solid fa-chevron-down me-2" />
                      }
                      Ver detalles
                    </button>
                    <div className="collapse mt-2" id="collapseMedixlabDetails" >
                      <div className="card card-body pt-7 border-medixlab-color" style={{borderRadius: 20}}>
                        <ul className="fs-7 text-medixlab-color text-start" style={{listStyle: "none"}}>
                          <li className="pb-2">
                            <i className="fa-solid fa-code me-2" />
                            <b>Lenguajes:</b> HTML, SCSS, Javascript, Python
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-palette me-2" />
                            <b>Frameworks:</b> Módulo Website de Odoo, Bootstrap, Font Awesome Icons
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-cube me-2" />
                            <b>Funcionalidades:</b> Formularios, videos, integración de Calendly
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-link me-2" />
                            <a href="https://medixlab.vxr.space/" className="text-medixlab-color" target="_blank" rel="noreferrer">
                              <b>Ver sitio web</b>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>                    
                  </div>            
                </div>                  
              </div>              
            </div>              
            
            {/* Roboxmaker */}
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-sm-12 col-md-11 col-lg-12 card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
                <div className="row d-flex justify-content-center align-items-center text-center text-lg-start">               
                <div className="col-12">       
                    <Parallax                        
                      bgImage={RoboxmakerBg}
                      bgImageAlt="Roboxmaker"
                      strength={200}
                      style={{borderRadius: 20}}
                      >                        
                    <div style={{ height: '400px' }} className='d-flex justify-content-center align-items-center'>
                      <div className="container text-white pt-8">
                          <section className="col-12">
                            <img className="education-logo" src={RoboxmakerLogo} alt="" style={{height: "5rem"}} />
                          </section>                        
                          {/* List of robots for Tablet and Desktop Mode */}
                          <section className="col-12 d-none d-sm-block" style={{pointerEvents: "none"}}>
                              {/* <h6 className="text-center" style={{marginBottom: -30, marginTop: 20}} dangerouslySetInnerHTML={{__html: lg('robots-viewer.select-a-robot-text')}} /> */}
                              <div className="row d-flex justify-content-center">
                                  <ListRobots isMovileDevice={false} />
                              </div>                          
                          </section>
                          {/* List of robots for Mobile mode (horizontal scroll added) */}
                          <section className="col-11 d-block d-sm-none">   
                              <div className="horizontal-scroll-container-of-small-robots">
                                  <div className="horizontal-row-robots">
                                    <ListRobots isMovileDevice={true} />
                                  </div>
                              </div>
                          </section>                        
                      </div> 
                    </div>
                    </Parallax>  
                  </div>                  
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-3">
                    <span className="fs-6 text-roboxmaker-color mb-2">
                    <a href="https://roboxmaker.app/" className="text-roboxmaker-color" target="blank"><b><i className="fa-solid fa-robot me-2 fs-4" />Roboxmaker,</b></a> una página web basada en una plataforma de armado de robots en 3D
                    </span>
                    <br /><br />
                    <button className="btn btn-primary bg-roboxmaker-color" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#collapseRoboxmakerDetails" aria-expanded="false" aria-controls="collapseRoboxmakerDetails" 
                    style={{borderRadius: 10}} onClick={handleCollapseRoboxmakerDetails}>
                      {
                        collapseRoboxmakerDetails ?
                        <i className="fa-solid fa-chevron-up me-2" />
                        :
                        <i className="fa-solid fa-chevron-down me-2" />
                      }
                      Ver detalles
                    </button>
                    <div className="collapse mt-2" id="collapseRoboxmakerDetails" >
                      <div className="card card-body pt-7 border-roboxmaker-color" style={{borderRadius: 20}}>
                        <ul className="fs-7 text-roboxmaker-color text-start" style={{listStyle: "none"}}>
                          <li className="pb-2">
                            <i className="fa-solid fa-code me-2" />
                            <b>Lenguajes:</b> HTML, SCSS, Javascript, Json
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-palette me-2" />
                            <b>Frameworks:</b> React, Bootstrap, Mailchimp
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-cube me-2" />
                            <b>Funcionalidades:</b> Formularios, Visualización de modelos 3D, Idiomas
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-link me-2" />
                            <a href="https://roboxmaker.app/" className="text-roboxmaker-color" target="_blank" rel="noreferrer">
                              <b>Ver sitio web</b>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>                    
                  </div>            
                </div>                  
              </div>              
            </div>            

            {/* Linea Rosa */}
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-sm-12 col-md-11 col-lg-12 card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
                <div className="row d-flex justify-content-center align-items-center text-center text-lg-start">               
                <div className="col-12">       
                    <Parallax                        
                      bgImage={isMobile ? LineaRosaBgMobile : LineaRosaBg}
                      bgImageAlt="Linea Rosa"
                      strength={200}
                      style={{borderRadius: 20}}
                      >                        
                    <div style={{ height: '400px' }} className='d-flex justify-content-center align-items-start'>
                      <div className="text-white pt-8">
                          <section className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <img className="" src={isMobile ? LineaRosaLogoPink :LineaRosaLogoWhite} alt="" style={{height: "6rem"}} />                            
                          </section>
                      </div>                
                      <div className="position-absolute bottom-10 bottom-lg-10 bottom-xxl-50 end-xxl-3 end-25 end-lg-10 w-7 w-lg-8 layer2">
                        <img src={isMobile ? PurpleCircle : PinkCircle} alt="" className="img-fluid"/>
                      </div>                      
                      <div className="position-absolute bottom-10 bottom-lg-10 bottom-xxl-20 end-xxl-14 end-0 end-lg-10 w-20 w-lg-5 layer3">
                        <img src={LilacCircle} alt="" className="img-fluid"/>
                      </div>
                      <div className="position-absolute bottom-10 bottom-lg-70 bottom-xxl-70 start-xxl-7 start-7 w-3 layer2
                      d-none d-sm-block
                      d-sm-none d-md-block
                      d-md-none d-lg-none">
                        <img src={WhitePoint} alt="" className="img-fluid"/>
                      </div>
                      <div className="position-absolute bottom-10 bottom-lg-50 bottom-xxl-50 start-xxl-0 start-0 w-7 layer3
                      d-none d-sm-block
                      d-sm-none d-md-block
                      d-md-none d-lg-none">
                        <img src={PurpleCircle} alt="" className="img-fluid"/>
                      </div>
                    </div>
                    </Parallax>  
                  </div>                  
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-3">
                    <span className="fs-6 text-lila-dark mb-2">
                    <a href="https://linearosa.app/" className="text-lila-dark" target="blank"><b><i className="fa-solid fa-location-dot me-2 fs-4" />Línea Rosa,</b></a> una página web minimalista para una empresa de servicios de viajes hecho para mujeres
                    </span>
                    <br /><br />
                    <button className="btn btn-primary bg-lila-dark" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#collapseLineaRosaDetails" aria-expanded="false" aria-controls="collapseLineaRosaDetails" 
                    style={{borderRadius: 10}} onClick={handleCollapseLineaRosaDetails}>
                      {
                        collapseLineaRosaDetails ?
                        <i className="fa-solid fa-chevron-up me-2" />
                        :
                        <i className="fa-solid fa-chevron-down me-2" />
                      }
                      Ver detalles
                    </button>
                    <div className="collapse mt-2" id="collapseLineaRosaDetails" >
                      <div className="card card-body pt-7 border-lila-dark" style={{borderRadius: 20}}>
                        <ul className="fs-7 text-lila-dark text-start" style={{listStyle: "none"}}>
                          <li className="pb-2">
                            <i className="fa-solid fa-code me-2" />
                            <b>Lenguajes:</b> HTML, SCSS, Javascript, Json
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-palette me-2" />
                            <b>Frameworks:</b> React, Bootstrap, Mailchimp, EmailJS, Font Awesome Icons
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-cube me-2" />
                            <b>Funcionalidades:</b> Formularios, Enlaces a Whatsapp, Idiomas, Envío de correos automáticos
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-link me-2" />
                            <a href="https://linearosa.app/" className="text-lila-dark" target="_blank" rel="noreferrer">
                              <b>Ver sitio web</b>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>                    
                  </div>            
                </div>                  
              </div>              
            </div>

            {/* Academia Linea Rosa */}
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-sm-12 col-md-11 col-lg-12 card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
                <div className="row d-flex justify-content-center align-items-center text-center text-lg-start">               
                <div className="col-12">       
                  <img src={LineaRosaAcademyMobileBg} alt="" className="w-100
                  d-xxl-none
                  d-xl-none d-xxl-block
                  d-lg-none d-xl-block" 
                  style={{borderRadius: 20, objectFit: "cover"}} />  
                  <div id="carouselExampleInterval" className="carousel slide carousel-fade
                            d-sm-none d-md-block 
                            d-none d-sm-block
                            d-md-none d-lg-block" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active" data-bs-interval="10000">
                        <img src={LineaRosaAcademy0Bg} className="d-block w-100" alt="..." style={{height: 400, objectFit: "contain"}} />
                      </div>
                      <div className="carousel-item" data-bs-interval="2000">
                        <img src={LineaRosaAcademy1Bg} className="d-block w-100" alt="..." style={{height: 400, objectFit: "contain"}} />
                      </div>
                      <div className="carousel-item">
                        <img src={LineaRosaAcademy2Bg} className="d-block w-100" alt="..." style={{height: 400, objectFit: "contain"}} />
                      </div>
                      <div className="carousel-item">
                        <img src={LineaRosaAcademy3Bg} className="d-block w-100" alt="..." style={{height: 400, objectFit: "contain"}} />
                      </div>
                      <div className="carousel-item">
                        <img src={LineaRosaAcademy4Bg} className="d-block w-100" alt="..." style={{height: 400, objectFit: "contain"}} />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                      <i className="fa-solid fa-angle-left text-gray-900" style={{fontSize: 50}} />
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                      <i className="fa-solid fa-angle-right text-gray-900" style={{fontSize: 50}} />
                    </button>
                  </div>
                </div>                  
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-3">
                  <span className="fs-6 text-pink mb-2">
                  <a href="https://academialinearosa.com/" target="blank" className="text-pink"><b>
                    <i className="fa-solid fa-graduation-cap me-2 fs-4" />Academia Línea Rosa,</b></a> una 
                    aplicación web demo de aprendizaje en línea con temática de videojuego estilo gamificación
                  </span>
                  <br /><br />
                  <button className="btn btn-primary bg-pink" type="button" 
                  data-bs-toggle="collapse" data-bs-target="#collapseLineaRosaAcademyDetails" aria-expanded="false" aria-controls="collapseLineaRosaAcademyDetails" 
                  style={{borderRadius: 10}} onClick={handleCollapseLineaRosaAcademyDetails}>
                    {
                      collapseLineaRosaAcademyDetails ?
                      <i className="fa-solid fa-chevron-up me-2" />
                      :
                      <i className="fa-solid fa-chevron-down me-2" />
                    }
                    Ver detalles
                  </button>
                  <div className="collapse mt-2" id="collapseLineaRosaAcademyDetails" >
                    <div className="card card-body pt-7 border-pink" style={{borderRadius: 20}}>
                      <ul className="fs-7 text-pink text-start" style={{listStyle: "none"}}>
                        <li className="pb-2">
                          <i className="fa-solid fa-code me-2" />
                          <b>Lenguajes:</b> Xml, Qweb (Html programativo), SCSS, Javascript, Python
                        </li>
                        <li className="pb-2">
                          <i className="fa-solid fa-palette me-2" />
                          <b>Frameworks:</b> Módulo custom extendido de eLearning de Odoo 14, Bootstrap, Font Awesome Icons
                        </li>
                        <li className="pb-2">
                          <i className="fa-solid fa-cube me-2" />
                          <b>Funcionalidades:</b> Registro de usuarios, formularios, validaciones, videos,  gamificación, envío de correos automáticos
                        </li>
                        <li className="pb-2">
                          <i className="fa-solid fa-link me-2" />
                          <a href="https://academialinearosa.com/" className="text-pink" target="_blank" rel="noreferrer">
                            <b>Ver sitio web</b>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>                    
                </div>            
              </div>                  
            </div>              
          </div>              

        </div>
      </div>
    </>
  )
}
