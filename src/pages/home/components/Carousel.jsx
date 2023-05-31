import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TypeIt from "typeit-react";
import '../../../hooks/init.js'
import $ from 'jquery';

import ProfileSection from './Profile.jsx'
import EducationSection from './Education.jsx'
import ExperienceSection from './Experience.jsx'
import ContactSection from './Contact.jsx'

import {
  showPrevButton,
  showNextButton,
  item_showHidden,
  container_delay_childrens_1,  
} from '../../../hooks/framer_motion_animations.js'

import {useMediaSm} from '../../../hooks/use_media_query.js';

import SliderDefault from './SliderDefault.jsx';
import SliderIOS from './SliderIOS.jsx';
import { event } from 'jquery';

export default function Carousel(){

    const isMobile = useMediaSm();

    const [currentIndexImage, setcurrentIndexImage] = useState(0);    
    const [currentIndexImageColor, setcurrentIndexImageColor] = useState(0);

    const isAppleDevice = /Mac OS X|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // click on next button on interval of 5 seconds
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     document.querySelector('.next').click();
    //   }, 5000);
    //   return () => clearInterval(interval);
    // }, []);

    // const [fromButtons, setFromButtons] = useState(true)
    
    const handlePrev = (isMobile) => {
      const index = (currentIndexImage === 0) ? 3 : currentIndexImage - 1;
      setcurrentIndexImage(index);
      setcurrentIndexImageColor(index);
      // console.log(`imagen numero ${index + 1}`);
      ChangeGrayColors(index);

      if(isMobile === true){
      // go to the top of the page
      window.scrollTo(0, 0);
      }

      changeScrollBarColor(index);
    };

    const handleNext = (isMobile) => {
      const index = (currentIndexImage === 3) ? 0 : currentIndexImage + 1;
      setcurrentIndexImage(index);
      setcurrentIndexImageColor(index);
      // console.log(`imagen numero ${index + 1}`);
      ChangeGrayColors(index);

      if(isMobile === true){
        // go to the top of the page
        window.scrollTo(0, 0);
        }      

      changeScrollBarColor(index);
    };  

    function changeScrollBarColor(index){
        // get two navbars, desktop and mobile
        var elements = document.getElementsByClassName("progress-bar");     
        if(index === 0){
          for(var i = 0; i < elements.length; i++){
            elements[i].style.setProperty('background', '#ffffff', 'important');
            document.getElementById("navbar-mobile-mode").style.background = '#000000f5';     

            document.getElementById("subnavbar-mobile-mode-header").style.background = '#373737fd';
            document.getElementById("subnavbar-mobile-mode-body").style.background = '#373737fd';
          }          
        }else if(index === 1){
          for(var i = 0; i < elements.length; i++){
            elements[i].style.setProperty('background', isMobile ? '#b7fff5' : '#b7fff5', 'important');
            document.getElementById("navbar-mobile-mode").style.background = '#1abd9ffd'; // Agregue al final fd para solucionar un bug extraño tipo glitch que aparece al hacer scroll

            document.getElementById("subnavbar-mobile-mode-header").style.background = '#1abd9ffd';
            document.getElementById("subnavbar-mobile-mode-body").style.background = '#1abd9ffd';
          }
        }else if(index === 2){
          for(var i = 0; i < elements.length; i++){
            elements[i].style.setProperty('background', isMobile ? '#e7b7ff' : '#e7b7ff', 'important');
            document.getElementById("navbar-mobile-mode").style.background = '#8F0091fd';    
            
            document.getElementById("subnavbar-mobile-mode-header").style.background = '#8F0091fd';
            document.getElementById("subnavbar-mobile-mode-body").style.background = '#8F0091fd';
          }
        }else if(index === 3){
          for(var i = 0; i < elements.length; i++){
            elements[i].style.setProperty('background', isMobile ? '#c9b7ff' : '#84f2ff', 'important');
            document.getElementById("navbar-mobile-mode").style.background = '#6010C6fd';

            document.getElementById("subnavbar-mobile-mode-header").style.background = '#6010C6fd';
            document.getElementById("subnavbar-mobile-mode-body").style.background = '#6010C6fd';
            
          }
        }
    }    

    function ChangeGrayColors(index) {
      let imageNumber = index;
      document.getElementById("education-img").style.filter = imageNumber === 0 ? `grayscale(100%)` : `grayscale(0%)`;
      document.getElementById("contact-img").style.filter = imageNumber === 0 ? `grayscale(100%)` : `grayscale(0%)`;

      document.body.style.background = imageNumber === 0 && `linear-gradient(180deg, #000000 0%, #333637 30%, #000000 98%)`;
      document.body.style.background = imageNumber === 1 && `linear-gradient(180deg, #19c19f 0%, #442A98 80%)`;
      document.body.style.background = imageNumber === 2 && `linear-gradient(180deg, #780193 0%, #e6008a 10%, #780193 15%)`;
      document.body.style.background = imageNumber === 3 && `linear-gradient(180deg, #6509C6 0%, #00A1CB 80%)`;
    };  

    const handleClick = (event) => {
      // stop event propagation
      const div = event.currentTarget;
      const clickPosition = event.clientX - div.getBoundingClientRect().left;
      const halfWidth = div.offsetWidth / 2;
                        
        if (clickPosition < halfWidth) {
          console.log('left slide'+ clickPosition);           
          $('#prev-carousel-item').click();
          // handlePrev();
        }else if (clickPosition > halfWidth) {
            console.log('right slide'+ clickPosition);
            $('#next-carousel-item').click();
            // handleNext();
          }
      
    }    

  return (
    <>
      <div className="">
          <div className="d-none d-sm-block
        d-sm-none d-md-block
        d-md-none d-lg-block">
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
      </div>
      <div className="container mt-30 mt-md-0">
        <div className="row d-flex justify-content-center align-items-end">
          <motion.div className="col-md-6 order-md-1 col-lg-2 order-lg-1 z-1  
          d-sm-none d-md-block 
          d-none d-sm-block
          d-md-none d-lg-block" initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div className="d-flex justify-content-center" variants={showPrevButton}>
              {/* Real button that actives the animation and pass to the previous slide */}
              <button type="button" 
              className={`prev border-0 btn-circle d-flex justify-content-center align-items-center shadow-lg buttons-${currentIndexImageColor}`} 
              onClick={handlePrev} id="prev-carousel-item">
                  <i className="fa-solid fa-angle-left" />
              </button>
              {/* Fake button that only shows some */}
              {/* <button type="button" 
              className={`border-0 btn-circle d-flex justify-content-center align-items-center shadow-lg buttons-${currentIndexImageColor}`}>
                  <i className="fa-solid fa-angle-left"/>
              </button>               */}
            </motion.div>
          </motion.div>
          <motion.div className="col-md-12 order-md-3 col-lg-8 order-lg-2" initial="initial" whileInView="animate" viewport={{ once: true }}>
            {/* Type of device */}
            {
              isAppleDevice ?
                <SliderIOS />
              :
                <SliderDefault />
            }
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
              {/* <button type="button" 
              className={`border-0 btn-circle d-flex justify-content-center align-items-center shadow-lg buttons-${currentIndexImageColor}`}>
                    <i className="fa-solid fa-angle-right" />
              </button> */}
            </motion.div>
          </motion.div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        
        {/* Navigation buttons only for mobile and tablet mode */}
        <div className="row 
          d-lg-none d-xl-block
          d-xl-none d-flex fixed-bottom mb-5" style={{opacity: 1}}>
            <div className="col-6">
              <div className="d-flex justify-content-start ms-5">
                <button type="button" style={{border: "2px solid white"}}
                className={`prev btn-circle d-flex justify-content-center align-items-center shadow-lg buttons-${currentIndexImageColor}`} 
                onClick={() => handlePrev(true)}>
                    <i className="fa-solid fa-angle-left" />
                </button>
              </div>
            </div>    
            <div className="col-6">
              <div className="d-flex justify-content-end me-5">
                <button type="button" style={{border: "2px solid white"}}
                className={`next btn-circle d-flex justify-content-center align-items-center shadow-lg buttons-${currentIndexImageColor}`} 
                onClick={() => handleNext(true)}>
                    <i className="fa-solid fa-angle-right" />
                </button>
              </div>
            </div>             
        </div>        
      </div>    

      <div className='mt-6'>
      {
        currentIndexImage === 0 ? <ProfileSection /> 
        : currentIndexImage === 1 ? <EducationSection /> 
        : currentIndexImage === 2 ? <ExperienceSection /> 
        : <ContactSection />
      }
      </div>      
        
    </>
  )
}
