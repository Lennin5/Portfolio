import React from 'react'
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion'

import InsoLogo from '../../../assets/img/education/inso-logo.png'
import EmpleatechLogo from '../../../assets/img/education/empleatech-logo.png'
import EsfeLogo from '../../../assets/img/education/esfe-logo.png'
import PlatziLogo from '../../../assets/img/education/platzi-logo.png'
import CimatLogo from '../../../assets/img/education/cimat-logo.png'

import HtmlLogo from '../../../assets/img/education/technologies/html.png'
import PythonLogo from '../../../assets/img/education/technologies/python.png'
import ReactLogo from '../../../assets/img/education/technologies/react.png'
import BootstrapLogo from '../../../assets/img/education/technologies/bootstrap.png'
import SqlLogo from '../../../assets/img/education/technologies/sql.png'


import GitLogo from '../../../assets/img/education/technologies/git.png'
import GithubLogo from '../../../assets/img/education/technologies/github.png'
import FirebaseLogo from '../../../assets/img/education/technologies/firebase.png'
import PhotoshopLogo from '../../../assets/img/education/technologies/photoshop.png'
import ResponsiveDesign from '../../../assets/img/education/technologies/responsive-design.png'
import CSharp from '../../../assets/img/education/technologies/c-sharp.png'


import VueLogo from '../../../assets/img/education/technologies/vue.png'
import VuetifyLogo from '../../../assets/img/education/technologies/vuetify.png'
import TailwindLogo from '../../../assets/img/education/technologies/tailwind.png'

import RustLogo from '../../../assets/img/education/technologies/rust.png'
import YewLogo from '../../../assets/img/education/technologies/yew.png'
import HasuraLogo from '../../../assets/img/education/technologies/hasura.png'
import UnityLogo from '../../../assets/img/education/technologies/unity.png'

import { 
  item_showHidden,
  container_delay_childrens_1,
} from '../../../hooks/framer_motion_animations'

export default function Education() {

  // i18n language terms
  const [lg, i18n] = useTranslation("global");

  return (
    <>
      <motion.div className="row mb-10" initial="initial" whileInView="animate" viewport={{ once: false }}>
        <motion.div className="col-12" variants={container_delay_childrens_1}>

          <motion.div className="row mb-2" variants={item_showHidden}>
            <span className="fs-3 text-white fw-bolder">
              <i className="fa-solid fa-user-graduate me-2" />
              {lg('education.education-title')}
            </span>
            <hr className="mt-2 text-white" />
          </motion.div>
          <div className="row d-flex justify-content-around">
            <motion.div variants={item_showHidden} className="col-lg card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
              <div className="row d-flex justify-content-center text-center">
                <img className="education-logo-item" src={InsoLogo} alt="" />
                <motion.span className="fs-6 text-gray-700" variants={item_showHidden}>
                {lg('education.inso-description')} <br />
                <span className="text-gray-600">-2017, 2019</span>
                </motion.span>
              </div>                  
            </motion.div> 
            <motion.div variants={item_showHidden} className="col-lg card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
              <div className="row d-flex justify-content-center text-center">
                <img className="education-logo-item" src={EmpleatechLogo} alt="" />
                <motion.span className="fs-6 text-gray-700" variants={item_showHidden}>
                {lg('education.empleatech-description')} <br />
                <span className="text-gray-600">-2019</span>
                </motion.span>
              </div>                  
            </motion.div>              
            <motion.div variants={item_showHidden} className="col-lg card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
              <div className="row d-flex justify-content-center text-center">
                <img className="education-logo-item" src={PlatziLogo} alt="" />
                <motion.span className="fs-6 text-gray-700" variants={item_showHidden}>
                {lg('education.platzi-description')} <br />
                <span className="text-gray-600">-2020</span>
                </motion.span>
              </div>                  
            </motion.div>              
            <motion.div variants={item_showHidden} className="col-lg card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
              <div className="row d-flex justify-content-center text-center">
                <img className="education-logo-item mb-2" src={EsfeLogo} alt="" />
                <motion.span className="fs-6 text-gray-700" variants={item_showHidden}>
                {lg('education.esfe-description')} <br />
                <span className="text-gray-600">-2020, 2021</span>
                </motion.span>
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
            <motion.div variants={item_showHidden} className="col-lg card shadow-lg m-3 p-4" style={{borderRadius: 20}}>
              <div className="row d-flex justify-content-center align-items-center text-center text-lg-start">
                <div className="col-12 col-sm-12 col-md-4 col-lg-2">
                <img className="education-logo-item" src={CimatLogo} alt="" />
                </div>
                <motion.div className="col-12 col-sm-12 col-md-8 col-lg-10" variants={item_showHidden}>
                  <motion.span className="fs-6 text-gray-700" variants={item_showHidden}>
                    <span dangerouslySetInnerHTML={{__html: lg('education.cimat-description')}} />
                    <span className="text-gray-600">-2019</span>
                  </motion.span>
                </motion.div>              
              </div>                  
            </motion.div>              
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
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-0 mt-lg-0" variants={item_showHidden}>
                <img className="technology-logo-item" src={HtmlLogo} alt="Html Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-0 mt-lg-0" variants={item_showHidden}>
                <img className="technology-logo-item" src={PythonLogo} alt="Python Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-4 mt-lg-0" variants={item_showHidden}>
                <img className="technology-logo-item" src={ReactLogo} alt="React Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-4 mt-lg-0" variants={item_showHidden}>
                <img className="technology-logo-item" src={BootstrapLogo} alt="Bootstrap Logo" />
            </motion.div>     
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-4 mt-lg-0" variants={item_showHidden}>
                <img className="technology-logo-item" src={FirebaseLogo} alt="Js Logo" />
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
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-0 mt-lg-0" variants={item_showHidden}>
              <img className="technology-logo-item" src={GithubLogo} alt="Github Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-0 mt-lg-0" variants={item_showHidden}>
                <img className="technology-logo-item" src={GitLogo} alt="Git Logo" />
            </motion.div>             
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-4 mt-lg-0" variants={item_showHidden}>
              <img className="technology-logo-item" src={ResponsiveDesign} alt="Responsive Design Logo" />
            </motion.div>        
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-4 mt-lg-0" variants={item_showHidden}>
              <img className="technology-logo-item" src={SqlLogo} alt="SQL Logo" />
            </motion.div>                                
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-4 mt-lg-0" variants={item_showHidden}>
              <img className="technology-logo-item" src={PhotoshopLogo} alt="Html Logo" />
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
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-0 mt-lg-0" variants={item_showHidden}>
              <img className="technology-logo-item" src={VueLogo} alt="Rust Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-0 mt-lg-0" variants={item_showHidden}>
              <img className="technology-logo-item" src={VuetifyLogo} alt="Yew Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-4 mt-lg-0" variants={item_showHidden}>
              <img className="technology-logo-item" src={TailwindLogo} alt="Hasura Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-4 mt-lg-0" variants={item_showHidden}>
              <img className="technology-logo-item" src={UnityLogo} alt="Unity Logo" />
            </motion.div>
            <motion.div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-4 mt-lg-0" variants={item_showHidden}>
              <img className="technology-logo-item" src={CSharp} alt="CSharp Logo" />
            </motion.div>            
          </div>

        </motion.div>
      </motion.div>
    </>
  )
}
