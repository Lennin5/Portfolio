import React, { useState, useEffect } from 'react';
import TypeIt from "typeit-react";
import '../../../hooks/init.js'

import Profile from '../../../assets/img/be-happy.png';
import VertexRobot from '../../../assets/img/vertex-robot.png';
import Education from '../../../assets/img/education.png';
import Contact from '../../../assets/img/contact.png';

export default function Carousel(){

    const [currentIndexImage, setcurrentIndexImage] = useState(0);    
    const [currentIndexImageColor, setcurrentIndexImageColor] = useState(0);
    
    const handlePrev = () => {
      const index = (currentIndexImage === 0) ? 3 : currentIndexImage - 1;
      setcurrentIndexImage(index);
      setcurrentIndexImageColor(index);
      console.log(`imagen numero ${index + 1}`);
    };

    const handleNext = () => {
      const index = (currentIndexImage === 3) ? 0 : currentIndexImage + 1;
      setcurrentIndexImage(index);
      setcurrentIndexImageColor(index);
      console.log(`imagen numero ${index + 1}`);
    };  

  return (
  <div className="container">
    <div className="row d-flex justify-content-center align-items-end">
      <div className="col-md-6 order-md-1 col-lg-2 order-lg-1 d-flex justify-content-end">
        <button type="button" 
        className={`prev text-white border-0 btn-circle d-flex justify-content-center align-items-center buttons-${currentIndexImageColor}`} 
        onClick={handlePrev}>
            <i className="fa-solid fa-angle-left" />
        </button>
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
              <div className="item-x sectionn ec" style={{background: `url(${Education})`, backgroundPosition: "initial"}}>
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
              <div className="item-x sectionn ec" style={{background: `url(${VertexRobot})`, backgroundPosition: "initial"}}>
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
              <div className="item-x sectionn ec" style={{background: `url(${Contact})`, backgroundPosition: "initial"}}>
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
      <div className="col-md-6 order-md-2 col-lg-2 order-lg-3 d-flex justify-content-start">
        <button type="button" 
        className={`next text-white border-0 btn-circle d-flex justify-content-center align-items-center buttons-${currentIndexImageColor}`}
        onClick={handleNext}>
              <i className="fa-solid fa-angle-right" />
          </button>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br />
    <div className="next">Next</div>
    <div className="prev">Prev</div>
  </div>
  )
}
