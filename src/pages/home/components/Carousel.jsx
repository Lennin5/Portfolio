import React, { useState, useEffect } from 'react';
import TypeIt from "typeit-react";
import '../../../hooks/init.js'

import Profile from '../../../assets/img/be-happy.png';
import Education from '../../../assets/img/education.png';
import Experience from '../../../assets/img/experience.png';
import Contact from '../../../assets/img/contact.png';

import ProfileSection from './Profile.jsx'
import EducationSection from './Education.jsx'
import ExperienceSection from './Experience.jsx'
import ContactSection from './Contact.jsx'


export default function Carousel(){

    const [currentIndexImage, setcurrentIndexImage] = useState(0);    
    const [currentIndexImageColor, setcurrentIndexImageColor] = useState(0);

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
      console.log(`imagen numero ${index + 1}`);
      ChangeGrayColors(index);
    };

    const handleNext = () => {
      const index = (currentIndexImage === 3) ? 0 : currentIndexImage + 1;
      setcurrentIndexImage(index);
      setcurrentIndexImageColor(index);
      console.log(`imagen numero ${index + 1}`);
      ChangeGrayColors(index);
    };  

    function ChangeGrayColors(index) {
      let imageNumber = index;
      document.getElementById("education-img").style.filter = imageNumber === 0 ? `grayscale(100%)` : `grayscale(0%)`;
      document.getElementById("contact-img").style.filter = imageNumber === 0 ? `grayscale(100%)` : `grayscale(0%)`;

      document.body.style.background = imageNumber === 0 && `linear-gradient(180deg, #000 0%, #000 50%)`;
      document.body.style.background = imageNumber === 1 && `linear-gradient(180deg, #19c19f 0%, #442A98 70%)`;
      document.body.style.background = imageNumber === 2 && `linear-gradient(180deg, #871095 0%, #a32671 50%)`;
    };
    

  return (
  <div className="container">
    <div className="row d-flex justify-content-center align-items-end">
      <div className="col-md-6 order-md-1 col-lg-2 order-lg-1 
      d-sm-none d-md-block 
      d-none d-sm-block
      d-md-none d-lg-block">
        <div className="d-flex justify-content-center">
          <button type="button" 
          className={`prev border-0 btn-circle d-flex justify-content-center align-items-center buttons-${currentIndexImageColor}`} 
          onClick={handlePrev}>
              <i className="fa-solid fa-angle-left" />
          </button>
        </div>
      </div>
      <div className="col-md-12 order-md-3 col-lg-8 order-lg-2">
        <div className="container-x mt-10">
        <div className="carousel">
          <div className="a access-card">
            <div className='layer1'>
            <div className="item-x sectionn ec " style={{background: `url(${Profile})`, backgroundPosition: "initial"}}>
                {/* <p className="bottom-left">Soy Lennin Lemus</p> */}
                <div style={{paddingTop: 130}}>
                <TypeIt className="legend-platform-text"                                              
                        options={{
                            strings: ["Hola! Me presento..!", "Soy <b>Lennin Josué Lemus</b>"],
                            speed: 100,
                            loop: true, 
                            breakLines: false,
                            cursorChar: "|",
                            html: true,
                            loopDelay: 5000
                        }}
                    />    
                </div>
              </div> 
              </div>
          </div>
          <div className="b access-card">
            <div className="layer2">
              <div className="item-x sectionn ec" id="education-img" style={{background: `url(${Education})`, backgroundPosition: "initial", filter: `grayscale(100%)`}}>
                {/* <p className="bottom-left">Soy Lennin Lemus</p> */}
                <div style={{paddingTop: 0}}>
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
              </div>  
            </div>  
          </div>
          <div className="c access-card">
            <div className="layer3">
              <div className="item-x sectionn ec" style={{background: `url(${Experience})`, backgroundPosition: "initial"}}>
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
            </div>  
          </div>          
          <div className="d access-card">
            <div className="layer4">
              <div className="item-x sectionn ec" id="contact-img" style={{background: `url(${Contact})`, backgroundPosition: "initial", filter: `grayscale(100%)`}}>
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
            </div>  
          </div>
        </div>
      </div>
      </div>
      <div className="col-md-6 order-md-2 col-lg-2 order-lg-3      
       d-sm-none d-md-block 
       d-none d-sm-block
       d-md-none d-lg-block">
        <div className="d-flex justify-content-center">
          <button type="button" 
          className={`next border-0 btn-circle d-flex justify-content-center align-items-center buttons-${currentIndexImageColor}`}
          onClick={handleNext}>
                <i className="fa-solid fa-angle-right" />
          </button>
        </div>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br />

    {
      currentIndexImage === 0 ? <EducationSection /> 
      : currentIndexImage === 1 ? <EducationSection /> 
      : currentIndexImage === 2 ? <ExperienceSection /> 
      : <ContactSection />
    }
  </div>    
  )
}
