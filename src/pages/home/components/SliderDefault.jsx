import React from 'react'
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';
import TypeIt from "typeit-react";

import Profile from '../../../assets/img/profile/be-happy.png';
import Education from '../../../assets/img/profile/education.png';
import Experience from '../../../assets/img/profile/experience.png';
import Contact from '../../../assets/img/profile/contact.png';

import {
    topToInitial_1s,
    topToInitial_1_5s,
    topToInitial_2s,
    showPrevButton,
    showNextButton,
  } from '../../../hooks/framer_motion_animations.js'

export default function SliderDefault() {

    // i18n language terms
    const [lg, i18n] = useTranslation("global");

  return (
    <div className="custom-container mt-10">
        <div className="custom-carousel">
        <div className="carousel-item-profile">
            <motion.div className='card-floating-profile' variants={topToInitial_1s}>
            <div className="custom-carousel-item custom-carousel-card ec shadow-lg" style={{background: `url(${Profile})`, backgroundPosition: "initial"}}>
                <div style={{paddingTop: 130}}>
                </div>
            </div> 
            </motion.div>
        </div>
        <div className="carousel-item-education">
            <motion.div className="card-floating-education" variants={topToInitial_1_5s}>                                  
            <div className="custom-carousel-item custom-carousel-card ec shadow-lg" id="education-img" style={{background: `url(${Education})`, backgroundPosition: "initial", filter: `grayscale(100%)`}}>
                <div style={{paddingTop: 0, display: lg("key.language") === 'es' ? "block" : "none"}}>
                    <TypeIt className="custom-carousel-card-education-text"                                              
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
                    <TypeIt className="custom-carousel-card-education-text"                                              
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
        <div className="carousel-item-experience">
            <motion.div className="card-floating-experience" variants={topToInitial_2s}>
            <div className="custom-carousel-item custom-carousel-card ec shadow-lg" style={{background: `url(${Experience})`, backgroundPosition: "initial"}}>
                <div style={{paddingTop: 0, display: lg("key.language") === 'es' ? "block" : "none"}}>
                <TypeIt className="custom-carousel-card-experience-text"                                              
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
                <div style={{paddingTop: 0, display: lg("key.language") === 'en' ? "block" : "none"}}>
                <TypeIt className="custom-carousel-card-experience-text"                                              
                        options={{
                            strings: ["<b>My time at Vertex!</b>", "<b>Experiences...</b>"],
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
        <div className="carousel-item-contact">
            <motion.div className="card-floating-contact" variants={topToInitial_2s}>
            <div className="custom-carousel-item custom-carousel-card ec shadow-lg" id="contact-img" style={{background: `url(${Contact})`, backgroundPosition: "initial", filter: `grayscale(100%)`}}>
                <div style={{paddingTop: 0, display: lg("key.language") === 'es' ? "block" : "none"}}>
                <TypeIt className="custom-carousel-card-contact-text"                                              
                        options={{
                            strings: ["<b>¡CONTÁCTAME!</b>", "<b>¡HABLEMOS!</b>"],
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
                <TypeIt className="custom-carousel-card-contact-text"                                              
                        options={{
                            strings: ["<b>CONTACT ME!</b>", "<b>LET'S TALK!</b>"],
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
  )
}
