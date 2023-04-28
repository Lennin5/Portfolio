import React from 'react'
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion'

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

import { 
  item_showHidden,
  container_delay_childrens_1,
} from '../../../hooks/framer_motion_animations'

export default function Education() {

  // i18n language terms
  const [lg, i18n] = useTranslation("global");

  return (
    <>
      <motion.div className="row mb-10 mt-5" initial="initial" whileInView="animate" viewport={{ once: false }}>
        <motion.div className="col-12" variants={container_delay_childrens_1}>

          <motion.div className="row mb-2" variants={item_showHidden}>
            <span className="fs-3 text-white fw-bolder">
              <i className="fa-solid fa-user-graduate me-2" />
              {lg('education.education-title')}
            </span>
            <hr className="mt-2 text-white" />
          </motion.div>
          <div className="row d-flex justify-content-around">
            <motion.div className="col-12 col-sm-12 col-md-4 col-lg-3 card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
              <div className="row d-flex justify-content-center text-center">
                <img className="education-logo" src={EmpleatechLogo} alt="" />
                <motion.span className="fs-6 text-gray-700" variants={item_showHidden}>
                {lg('education.empleatech-description')} <br />
                -2019
                </motion.span>
              </div>                  
            </motion.div>              
            <motion.div variants={item_showHidden} className="col-12 col-sm-12 col-md-4 col-lg-3 card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
              <div className="row d-flex justify-content-center text-center">
                <img className="education-logo" src={PlatziLogo} alt="" />
                <span className="fs-6 text-gray-700">
                {lg('education.platzi-description')} <br />
                -2020
                </span>
              </div>                  
            </motion.div>              
            <motion.div variants={item_showHidden} className="col-12 col-sm-12 col-md-4 col-lg-3 card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
              <div className="row d-flex justify-content-center text-center">
                <img className="education-logo mb-2" src={EsfeLogo} alt="" />
                <span className="fs-6 text-gray-700">
                {lg('education.esfe-description')} <br />
                -2020, 2021
                </span>
              </div>                  
            </motion.div>
          </div>

          <motion.div className="row mb-2 mt-5" variants={item_showHidden}>
            <span className="fs-3 text-white fw-bolder">
              <i className="fa-solid fa-award me-2" />
              {lg('education.academic-awards-title')}
            </span>
            <hr className="mt-2 text-white" />
          </motion.div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-12 col-md-11 col-lg-11 card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
              <div className="row d-flex justify-content-center align-items-center text-center text-lg-start">
                <div className="col-12 col-sm-12 col-md-4 col-lg-2">
                <img className="education-logo" src={CimatLogo} alt="" />
                </div>
                <motion.div className="col-12 col-sm-12 col-md-8 col-lg-10" variants={item_showHidden}>
                  <span className="fs-6 text-gray-700">
                    <span dangerouslySetInnerHTML={{__html: lg('education.cimat-description')}} />
                    -2019
                  </span>
                </motion.div>              
              </div>                  
            </div>              
          </div>       

          {/* </motion.div>
      </motion.div>          

      <motion.div className="row mb-10 mt-5 l-r" initial="initial" whileInView="animate" viewport={{ once: true }}>
        <motion.div className="col-12" variants={container_delay_childrens_1}>       */}

          <motion.div className="row mb-10 mt-5" variants={item_showHidden}>
            <span className="fs-3 text-white fw-bolder">
              <i className="fa-solid fa-code me-2" />
              {lg('education.technologies-title')}
            </span>
            <hr className="mt-2 text-white" />
          </motion.div>                  
          <div className="row d-flex justify-content-center">
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2" variants={item_showHidden}>
                <img className="technology-logo" src={HtmlLogo} alt="Html Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2" variants={item_showHidden}>
                <img className="technology-logo" src={PythonLogo} alt="Css Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2" variants={item_showHidden}>
                <img className="technology-logo" src={ReactLogo} alt="React Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2" variants={item_showHidden}>
                <img className="technology-logo" src={BootstrapLogo} alt="Sql Logo" />
            </motion.div>     
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2" variants={item_showHidden}>
                <img className="technology-logo" src={FirebaseLogo} alt="Js Logo" />
            </motion.div>                               
          </div>

          <motion.div className="row mb-10 mt-5" variants={item_showHidden}>
            <span className="fs-3 text-white fw-bolder">
              <i className="fa-solid fa-folder-open me-2" />
              {lg('education.other-technologies-title')}
            </span>
            <hr className="mt-2 text-white" />
          </motion.div>        
          <div className="row d-flex justify-content-center">            
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2" variants={item_showHidden}>
              <img className="technology-logo" src={GithubLogo} alt="Html Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2" variants={item_showHidden}>
                <img className="technology-logo" src={GitLogo} alt="Html Logo" />
            </motion.div>             
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2" variants={item_showHidden}>
              <img className="technology-logo" src={SqlLogo} alt="Html Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2" variants={item_showHidden}>
              <img className="technology-logo" src={PhotoshopLogo} alt="Html Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2" variants={item_showHidden}>
              <img className="technology-logo" src={FigmaLogo} alt="Html Logo" />
            </motion.div>            
          </div>

          <motion.div className="row mb-10 mt-5" variants={item_showHidden}>
            <span className="fs-4 text-white fw-bolder">
              {/* <i className="fa-solid fa-spinner me-2" /> */}
              <div className="spinner-border text-light me-2 " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>              
              {lg('education.learning-technologies-title')}
            </span>
            <hr className="mt-2 text-white" />
          </motion.div>           
          <div className="row d-flex justify-content-center">
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-3" variants={item_showHidden}>
              <img className="technology-logo" src={RustLogo} alt="Html Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-3" variants={item_showHidden}>
              <img className="technology-logo" src={YewLogo} alt="Html Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-3" variants={item_showHidden}>
              <img className="technology-logo" src={HasuraLogo} alt="Html Logo" />
            </motion.div>
          </div>

        </motion.div>
      </motion.div>
    </>
  )
}
