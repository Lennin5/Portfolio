import React from 'react'
import TypeIt from "typeit-react";
import '../../../hooks/init.js'

import Profile from '../../../assets/img/be-happy.png';
import VertexRobot from '../../../assets/img/vertex-robot.png';

export default function Carousel(){
  return (
  <div className="container">
    <div className="row d-flex justify-content-center align-items-end">
      <div className="col-md-6 order-md-1 col-lg-2 order-lg-1 d-flex justify-content-end l-b">
        <button type="button" className="prev bg-primary text-white border-0 btn-circle d-flex justify-content-center align-items-center">
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
                <div style={{paddingTop: 100}}>
                <TypeIt className="legend-platform-text"                                              
                        options={{
                            strings: ["Hola! Me presento", "Soy <b>Lennin Josué Lemus</b>"],
                            speed: 70,
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
              <div className="item-x sectionn ec" style={{background: `url(${VertexRobot})`, backgroundPosition: "initial"}}>
                {/* <p className="bottom-left">Soy Lennin Lemus</p> */}
                <div style={{paddingTop: 100}}>
                <TypeIt className="legend-platform-text"                                              
                        options={{
                            strings: ["Hola! Me presento", "Soy <b>Lennin Josué Lemus</b>"],
                            speed: 70,
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
          <div className="c">
            <div className="item-x">C</div>
          </div>
          <div className="d">
            <div className="item-x">D</div>
          </div>
        </div>
      </div>
      </div>
      <div className="col-md-6 order-md-2 col-lg-2 order-lg-3 d-flex justify-content-start l-b">
        <button type="button" className="next bg-primary text-white border-0 btn-circle d-flex justify-content-center align-items-center">
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
