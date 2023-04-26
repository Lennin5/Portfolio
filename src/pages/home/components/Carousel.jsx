import React, { useState, useEffect } from 'react';
import i18next from 'i18next';
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';
import TypeIt from "typeit-react";
import ProgressBar from '../../../components/Bar';
import '../../../hooks/init.js'

import Profile from '../../../assets/img/profile/be-happy.png';
import Education from '../../../assets/img/profile/education.png';
import Experience from '../../../assets/img/profile/experience.png';
import Contact from '../../../assets/img/profile/contact.png';

import ProfileSection from './Profile.jsx'
import EducationSection from './Education.jsx'
import ExperienceSection from './Experience.jsx'
import ContactSection from './Contact.jsx'

import {
  showHidden,
  topToInitial_1s,
  topToInitial_1_5s,
  topToInitial_2s,
  topToInitial_2_5s,
  showPrevButton,
  showNextButton,
} from '../../../hooks/FramerMotionAnimations'


export default function Carousel(){

    const [currentIndexImage, setcurrentIndexImage] = useState(0);    
    const [currentIndexImageColor, setcurrentIndexImageColor] = useState(0);

    // i18n language terms
    const [lg, i18n] = useTranslation("global");
    // i18n current language
    const [language, setlanguage] = useState(i18next.language);    

    // click on next button on interval of 5 seconds
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     document.querySelector('.next').click();
    //   }, 5000);
    //   return () => clearInterval(interval);
    // }, []);
    
    const handlePrev = () => {
      const index = (currentIndexImage === 0) ? 3 : currentIndexImage - 1;
      setcurrentIndexImage(index);
      setcurrentIndexImageColor(index);
      // console.log(`imagen numero ${index + 1}`);
      ChangeGrayColors(index);
    };

    const handleNext = () => {
      const index = (currentIndexImage === 3) ? 0 : currentIndexImage + 1;
      setcurrentIndexImage(index);
      setcurrentIndexImageColor(index);
      // console.log(`imagen numero ${index + 1}`);
      ChangeGrayColors(index);
    };  

    function ChangeGrayColors(index) {
      let imageNumber = index;
      document.getElementById("education-img").style.filter = imageNumber === 0 ? `grayscale(100%)` : `grayscale(0%)`;
      document.getElementById("contact-img").style.filter = imageNumber === 0 ? `grayscale(100%)` : `grayscale(0%)`;

      document.body.style.background = imageNumber === 0 && `linear-gradient(180deg, #000000 0%, #333637 30%, #000000 98%)`;
      document.body.style.background = imageNumber === 1 && `linear-gradient(180deg, #19c19f 0%, #442A98 80%)`;
      document.body.style.background = imageNumber === 2 && `linear-gradient(180deg, #780193 0%, #e6008a 10%, #780193 15%)`;
      document.body.style.background = imageNumber === 3 && `linear-gradient(180deg, #6509C6 0%, #00A1CB 80%)`;
    };
    

  return (
    <>
      <div className="">
      {/* <div className="d-lg-none d-xl-block d-xl-none"> */}
        <ProgressBar />
        <TypeIt className="text-white text-center fs-4"                                              
                options={{
                    strings: ["Lennin Josué Lemus Díaz"],
                    speed: 200,
                    loop: true, 
                    breakLines: false,
                    cursorChar: "|",
                    html: true,
                    loopDelay: 8000,
                }}
            />
      </div>
      <div className="container mt-25 mt-md-0">
        <div className="row d-flex justify-content-center align-items-end">
          <motion.div className="col-md-6 order-md-1 col-lg-2 order-lg-1 z-1  
          d-sm-none d-md-block 
          d-none d-sm-block
          d-md-none d-lg-block" initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div className="d-flex justify-content-center" variants={showPrevButton}>
              <button type="button" 
              className={`prev border-0 btn-circle d-flex justify-content-center align-items-center shadow-lg buttons-${currentIndexImageColor}`} 
              onClick={handlePrev} id="prev-carousel-item">
                  <i className="fa-solid fa-angle-left" />
              </button>
            </motion.div>
          </motion.div>
          <motion.div className="col-md-12 order-md-3 col-lg-8 order-lg-2" initial="initial" whileInView="animate" viewport={{ once: true }}>
            <div className="container-x mt-10">
            <div className="carousel">
              <div className="a access-card">
                <motion.div className='layer1' variants={topToInitial_1s}>
                <div className="item-x sectionn ec shadow-lg" style={{background: `url(${Profile})`, backgroundPosition: "initial"}}>
                    {/* <p className="bottom-left">Soy Lennin Lemus</p> */}
                    <div style={{paddingTop: 130}}>
                    {/* <TypeIt className="legend-platform-text"                                              
                            options={{
                                strings: ["Hola! Me presento..!", "Soy <b>Lennin Josué Lemus</b>"],
                                speed: 100,
                                loop: true, 
                                breakLines: false,
                                cursorChar: "|",
                                html: true,
                                loopDelay: 5000
                            }}
                        />     */}
                    </div>
                  </div> 
                  </motion.div>
              </div>
              <div className="b access-card">
                <motion.div className="layer2" variants={topToInitial_1_5s}>
                  <div className="item-x sectionn ec shadow-lg" id="education-img" style={{background: `url(${Education})`, backgroundPosition: "initial", filter: `grayscale(100%)`}}>
                    <div style={{paddingTop: 0, display: lg("key.language") === 'es' ? "block" : "none"}}>
                        <TypeIt className="formation-text"                                              
                            options={{
                                strings: ["<b>FORMACIÓN</b>", "<b>HABILIDADES</b>"],
                                speed: 200,
                                loop: true, 
                                breakLines: false,
                                cursorChar: "|",
                                html: true,
                                loopDelay: 5000
                            }}
                        />
                    </div>
                    <div style={{paddingTop: 0, display: lg("key.language") === 'en' ? "block" : "none"}}>
                        <TypeIt className="formation-text"                                              
                            options={{
                                strings: ["<b>EDUCATION</b>", "<b>SKILLS</b>"],
                                speed: 200,
                                loop: true, 
                                breakLines: false,
                                cursorChar: "|",
                                html: true,
                                loopDelay: 5000
                            }}
                        />
                    </div>                    
                  </div>  
                </motion.div>  
              </div>
              <div className="c access-card">
                <motion.div className="layer3" variants={topToInitial_2s}>
                  <div className="item-x sectionn ec shadow-lg" style={{background: `url(${Experience})`, backgroundPosition: "initial"}}>
                    {/* <p className="bottom-left">Soy Lennin Lemus</p> */}
                    <div style={{paddingTop: 0}}>
                    <TypeIt className="experience-text"                                              
                            options={{
                                strings: ["<b>¡Mi paso por Vertex!</b>", "<b>Experiencias...</b>"],
                                speed: 150,
                                loop: true, 
                                breakLines: false,
                                cursorChar: "|",
                                html: true,
                                loopDelay: 5000
                            }}
                        />    
                    </div>
                  </div>  
                </motion.div>  
              </div>          
              <div className="d access-card">
                <motion.div className="layer4" variants={topToInitial_2s}>
                  <div className="item-x sectionn ec shadow-lg" id="contact-img" style={{background: `url(${Contact})`, backgroundPosition: "initial", filter: `grayscale(100%)`}}>
                    {/* <p className="bottom-left">Soy Lennin Lemus</p> */}
                    <div style={{paddingTop: 0}}>
                    <TypeIt className="contact-text"                                              
                            options={{
                                strings: ["¡CONTÁCTAME!", "¡HABLEMOS!"],
                                speed: 200,
                                loop: true, 
                                breakLines: false,
                                cursorChar: "|",
                                html: true,
                                loopDelay: 5000
                            }}
                        />    
                    </div>
                  </div>  
                </motion.div>  
              </div>
            </div>
          </div>
          </motion.div>
          <motion.div className="col-md-6 order-md-2 col-lg-2 order-lg-3 z-1      
          d-sm-none d-md-block 
          d-none d-sm-block
          d-md-none d-lg-block" initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div className="d-flex justify-content-center" variants={showNextButton}>
              <button type="button" 
              className={`next border-0 btn-circle d-flex justify-content-center align-items-center shadow-lg buttons-${currentIndexImageColor}`}
              onClick={handleNext} id="next-carousel-item">
                    <i className="fa-solid fa-angle-right" />
              </button>
            </motion.div>
          </motion.div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        {/* Navigation buttons only for mobile and tablet mode */}
        <div className="row 
          d-lg-none d-xl-block
          d-xl-none">
            <div className="col-6 z-1">
              <div className="d-flex justify-content-center">
                <button type="button" 
                className={`prev border-0 btn-circle d-flex justify-content-center align-items-center shadow-lg buttons-${currentIndexImageColor}`} 
                onClick={handlePrev}>
                    <i className="fa-solid fa-angle-left" />
                </button>
              </div>
            </div>    
            <div className="col-6 z-1">
              <div className="d-flex justify-content-center">
                <button type="button" 
                className={`next border-0 btn-circle d-flex justify-content-center align-items-center shadow-lg buttons-${currentIndexImageColor}`} 
                onClick={handleNext}>
                    <i className="fa-solid fa-angle-right" />
                </button>
              </div>
            </div>             
        </div>        
        <br /><br />
      </div>    

      {
          currentIndexImage === 0 ? <ProfileSection /> 
          : currentIndexImage === 1 ? <EducationSection /> 
          : currentIndexImage === 2 ? <ExperienceSection /> 
          : <ContactSection />
        }
        
    </>
  )
}
