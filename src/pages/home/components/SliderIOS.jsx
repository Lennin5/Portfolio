import React from 'react'
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';

import Profile from '../../../assets/img/profile/be-happy.png';

import EducationEs from '../../../assets/img/ios/es/education.png';
import ExperienceEs from '../../../assets/img/ios/es/experience.png';
import ContactEs from '../../../assets/img/ios/es/contact.png';

import EducationEn from '../../../assets/img/ios/en/education.png';
import ExperienceEn from '../../../assets/img/ios/en/experience.png';
import ContactEn from '../../../assets/img/ios/en/contact.png';

import {
    topToInitial_1s,
    topToInitial_1_5s,
    topToInitial_2s,
    showPrevButton,
    showNextButton,
  } from '../../../hooks/framer_motion_animations.js'

export default function SliderIOS() {
    // i18n language terms
    const [lg, i18n] = useTranslation("global");

    function ReturnTranslatedImage(image) {
      const lang = lg("key.language");
      const translations = {
        es: { Education: EducationEs, Experience: ExperienceEs, Contact: ContactEs },
        en: { Education: EducationEn, Experience: ExperienceEn, Contact: ContactEn }
      };
      return translations[lang][image];
    }

  return (
    <div className="custom-container mt-10">
      <div className="custom-carousel">
        <div className="carousel-item-profile">
          <motion.div className='card-floating-profile' variants={topToInitial_1s}>
          <img src={Profile} alt="profile" className="img-fluid custom-carousel-item custom-carousel-card shadow-lg" />                  
            </motion.div>
        </div>
        <div className="carousel-item-education">
          <motion.div className="card-floating-education" variants={topToInitial_1_5s}>                                  
              <img src={ReturnTranslatedImage('Education')} alt="education" className="img-fluid custom-carousel-item custom-carousel-card shadow-lg" id="education-img" style={{objectFit: "cover", filter: `grayscale(100%)`}} />
          </motion.div>  
        </div>
        <div className="carousel-item-experience">
          <motion.div className="card-floating-experience" variants={topToInitial_2s}>
              <img src={ReturnTranslatedImage('Experience')} alt="experience" className="img-fluid custom-carousel-item custom-carousel-card shadow-lg" />
          </motion.div>  
        </div>          
        <div className="carousel-item-contact">
          <motion.div className="card-floating-contact" variants={topToInitial_2s}>
              <img src={ReturnTranslatedImage('Contact')} alt="contact" className="img-fluid custom-carousel-item custom-carousel-card shadow-lg" id="contact-img" style={{filter: `grayscale(100%)`}} />
          </motion.div>  
        </div>
      </div>
    </div>
  )
}