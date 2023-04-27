import React, { useState } from 'react'
import i18next from 'i18next';
import { useTranslation } from "react-i18next";

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

  // i18n language terms
  const [lg, i18n] = useTranslation("global");

  return (
    <>
      <div className="row mb-10">
        <div className="col-12">

          <div className="row mb-2 mt-5">
              <span className="fs-3 text-white fw-bolder" >
                <i className="fa-solid fa-briefcase me-2" />
                <span dangerouslySetInnerHTML={{__html: lg('experience.vertex-title')}} />
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
                        <span dangerouslySetInnerHTML={{__html: lg('experience.vertex-description')}} />
                      </span>
                    </div>              
                  </div> 
              </div>              
            </div>

            <div className="row mb-2 mt-5">
              <span className="fs-3 text-white fw-bolder">
                <i className="fa-solid fa-laptop-code me-2" />
                {lg('experience.projects-title')}
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
                      <a href="https://medixlab.vxr.space/" target="blank" className="text-medixlab-color fw-bolder">
                        <i className="fa-solid fa-user-doctor me-2 fs-4" />
                        <b>Medixlab,</b>
                      </a>
                      <span className="text-decoration-none" dangerouslySetInnerHTML={{__html: lg('experience.medixlab-description')}} />
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
                      {lg('experience.details-title')}
                    </button>
                    <div className="collapse mt-2" id="collapseMedixlabDetails" >
                      <div className="card card-body pt-7 border-medixlab-color" style={{borderRadius: 20}}>
                        <ul className="fs-7 text-medixlab-color text-start" style={{listStyle: "none"}}>
                          <li className="pb-2">
                            <i className="fa-solid fa-code me-2" />
                            <b>{lg('experience.languages-title')}</b> {lg('experience.medixlab-languages')}
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-palette me-2" />
                            <b>{lg('experience.frameworks-title')}</b> {lg('experience.medixlab-frameworks')}
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-cube me-2" />
                            <b>{lg('experience.functionalities-title')}</b> {lg('experience.medixlab-functionalities')}
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-link me-2" />
                            <a href="https://medixlab.vxr.space/" className="text-medixlab-color" target="_blank" rel="noreferrer">
                              <b>{lg('experience.link-title')}</b>
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
                    <a href="https://roboxmaker.app/" className="text-roboxmaker-color" target="blank">
                      <b><i className="fa-solid fa-robot me-2 fs-4" />Roboxmaker,</b></a> 
                      <span className="text-decoration-none" dangerouslySetInnerHTML={{__html: lg('experience.roboxmaker-description')}} />
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
                      {lg('experience.details-title')}
                    </button>
                    <div className="collapse mt-2" id="collapseRoboxmakerDetails" >
                      <div className="card card-body pt-7 border-roboxmaker-color" style={{borderRadius: 20}}>
                        <ul className="fs-7 text-roboxmaker-color text-start" style={{listStyle: "none"}}>
                          <li className="pb-2">
                            <i className="fa-solid fa-code me-2" />
                            <b>{lg('experience.languages-title')}</b> {lg('experience.roboxmaker-languages')}
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-palette me-2" />
                            <b>{lg('experience.frameworks-title')}</b> {lg('experience.roboxmaker-frameworks')}
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-cube me-2" />
                            <b>{lg('experience.functionalities-title')}</b> {lg('experience.roboxmaker-functionalities')}
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-link me-2" />
                            <a href="https://roboxmaker.app/" className="text-roboxmaker-color" target="_blank" rel="noreferrer">
                              <b>{lg('experience.link-title')}</b>
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
                    <a href="https://linearosa.app/" className="text-lila-dark" target="blank">
                      <b><i className="fa-solid fa-location-dot me-2 fs-4" />Línea Rosa,</b></a> 
                      <span className="text-lila-dark" dangerouslySetInnerHTML={{__html: lg('experience.linea-rosa-description')}} />
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
                      {lg('experience.details-title')}
                    </button>
                    <div className="collapse mt-2" id="collapseLineaRosaDetails" >
                      <div className="card card-body pt-7 border-lila-dark" style={{borderRadius: 20}}>
                        <ul className="fs-7 text-lila-dark text-start" style={{listStyle: "none"}}>
                          <li className="pb-2">
                            <i className="fa-solid fa-code me-2" />
                            <b>{lg('experience.languages-title')}</b> {lg('experience.linea-rosa-languages')}
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-palette me-2" />
                            <b>{lg('experience.frameworks-title')}</b> {lg('experience.linea-rosa-frameworks')}
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-cube me-2" />
                            <b>{lg('experience.functionalities-title')}</b> {lg('experience.linea-rosa-functionalities')}
                          </li>
                          <li className="pb-2">
                            <i className="fa-solid fa-link me-2" />
                            <a href="https://linearosa.app/" className="text-lila-dark" target="_blank" rel="noreferrer">
                              <b>{lg('experience.link-title')}</b>
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
                  <a href="https://academialinearosa.com/web/login" target="blank" className="text-pink"><b>
                    <i className="fa-solid fa-graduation-cap me-2 fs-4" />{lg('experience.linea-rosa-academy-title')}</b></a> 
                    {lg('experience.linea-rosa-academy-description')}
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
                    {lg('experience.details-title')}
                  </button>
                  <div className="collapse mt-2" id="collapseLineaRosaAcademyDetails" >
                    <div className="card card-body pt-7 border-pink" style={{borderRadius: 20}}>
                      <ul className="fs-7 text-pink text-start" style={{listStyle: "none"}}>
                        <li className="pb-2">
                          <i className="fa-solid fa-code me-2" />
                          <b>{lg('experience.languages-title')}</b> {lg('experience.linea-rosa-academy-languages')}
                        </li>
                        <li className="pb-2">
                          <i className="fa-solid fa-palette me-2" />
                          <b>{lg('experience.frameworks-title')}</b> {lg('experience.linea-rosa-academy-frameworks')}
                        </li>
                        <li className="pb-2">
                          <i className="fa-solid fa-cube me-2" />
                          <b>{lg('experience.functionalities-title')}</b> {lg('experience.linea-rosa-academy-functionalities')}
                        </li>
                        <li className="pb-2">
                          <i className="fa-solid fa-link me-2" />
                          <a href="https://academialinearosa.com/web/login" className="text-pink" target="_blank" rel="noreferrer">
                            <b>{lg('experience.link-title')}</b>
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
