import React, { useState, useEffect } from 'react';
import TypeIt from "typeit-react";
import '../../../hooks/init.js'

import Profile from '../../../assets/img/be-happy.png';
import Experience from '../../../assets/img/experience.png';
import Education from '../../../assets/img/education.png';
import Contact from '../../../assets/img/contact.png';

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
      // if(currentIndexImageColor === 0){
      //   document.getElementById("education-img").style.background = EducationGray;
      // }else{
      //   document.getElementById("education-img").style.background = Education;
      // }
      let imageNumber = index;
      document.getElementById("education-img").style.filter = imageNumber === 0 ? `grayscale(100%)` : `grayscale(0%)`;
      document.getElementById("contact-img").style.filter = imageNumber === 0 ? `grayscale(100%)` : `grayscale(0%)`;

      document.body.style.backgroundColor = imageNumber === 0 ? `black` : `white`;
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
    {/* <div className="next">Next</div>
    <div className="prev">Prev</div> */}

    <div className="container mb-10">
      <div className="row text-center">
        <div className="col-12">
          <span className="fs-3 animate text-white">Me considero un desarrollador web disruptivo en la creación de experiencias digitales atractivas, intuitivas y efectivas, mi lema: <br /> "Piensa en todo, ah! y una cosa más" :)</span>
        </div>       
      </div>
    </div>
    {/* <div className="container">
      <div className="row text-center">
        <div className="col-12">
          <p className="fs-2 fw-bolder">Información Personal</p>
        </div>       
      </div>
    </div> */}
    <div className="container mt-5">
      <div className="row">
      <div className="col-12">
          <div className="container">
            <div className="card-body">
              <div className="row d-flex justify-content-center">
                <div className='col-12'>
                    <div className="fs-5 d-flex align-items-center justify-content-center text-left mb-5">
                        <i className="fa-solid fa-user btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                        <div className="row d-flex justify-content-start" style={{lineHeight: 1.0}}>
                          <span className="fs-6 text-gray-800">Nombre</span>
                          <span className="text-white">
                            Lennin Josué <br className="d-block d-sm-none" /> Lemus Díaz
                          </span>
                        </div>
                    </div>     
                    <div className="fs-5 d-flex align-items-center justify-content-center text-left mb-5">
                        <i className="fa-solid fa-user-tag btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                        <div className="d-flex justify-content-center">
                          <div className="row d-flex justify-content-start" style={{lineHeight: 1.0}}>
                            <span className="fs-6 text-gray-800">Edad</span>
                            <span className="text-white">
                              20 años
                            </span>
                          </div>
                          {/* <div className="row d-flex justify-content-start" style={{lineHeight: 1.0}}>
                            <span className="fs-6 text-gray-800">Estado Civil</span>
                            <span className="text-white">
                              Soltero
                            </span>
                          </div>                           */}
                        </div>
                    </div>  
                    {/* <div className="fs-5 d-flex align-items-center justify-content-start text-left mb-5">
                        <i className="fa-solid fa-phone btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                        <div className="row d-flex justify-content-start" style={{lineHeight: 1.0}}>
                          <span className="fs-6 text-gray-800">Teléfono</span>
                          <span className="text-white">
                            +503 7238 0568
                          </span>
                        </div>
                    </div>                         */}
                    <div className="fs-5 d-flex align-items-center justify-content-center text-left mb-5">
                        <div className="column text-center">
                          <i className="fa-solid fa-location-dot btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                          <div className="row d-flex justify-content-start" style={{lineHeight: 1.2}}>
                          <span className="fs-6 text-gray-800 text-center">Dirección</span>
                            <span className="text-white">
                              BO. San Sebastián, 
                              CL. Libertad  
                              #12, <br />
                              Sonsonate - Izalco
                            </span>
                        </div>                          
                        </div>
                    </div>                     
                </div>
                {/* <div className='col-12 col-lg-12'>
                  <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-5 fs-5 d-flex align-items-center justify-content-center text-left mb-5">
                        <i className="fa-solid fa-earth-america btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                        <div className="row d-flex justify-content-start" style={{lineHeight: 1.0}}>
                          <span className="fs-6 text-gray-800">País</span>
                          <span className="text-white">
                            El Salvador
                          </span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 fs-6 d-flex align-items-center justify-content-start text-left mb-5">
                        <i className="fa-solid fa-location-dot btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                        <div className="row d-flex justify-content-start" style={{lineHeight: 1.0}}>
                          <span className="fs-6 text-gray-800">Dirección</span>
                          <span className="text-white">
                            BO. San Sebastián, <br className="d-block d-sm-none" /> 
                            CL. Libertad  <br />
                            #12, Sonsonate, <br className="d-block d-sm-none" />
                            Izalco <br /><br />
                          </span>
                        </div>
                    </div> 
                    </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>   
        </div>
      </div>
  </div>    
  )
}
