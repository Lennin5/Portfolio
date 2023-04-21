import React, { useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from "react-i18next";

// import ProgressBar from './ProgressBar';
import ProgressBar from './Bar'
import LogoDark from '../assets/img/lennin-logo-black.png';
import LogoLight from '../assets/img/lennin-logo-white.png';
import EnglandFlag from '../assets/img/flags/England.png';
import SpainFlag from '../assets/img/flags/Spain.png';

const Header = (props) => {
  const { IsMainView } = props;

  // Dinamic navbar color change on scroll
  window.onscroll = function () { changeNavbarColor() };
  function changeNavbarColor() {
     // get two navbars, desktop and mobile
    var elements = document.getElementsByClassName('nav-scroll-animated');
    var navLink = document.getElementsByClassName('nav-link');
    var logoImg = document.getElementById('logo');
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {      
      for(var i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "#000";
        navLink[i].classList.add("text-white");
        navLink[i].classList.remove("text-black");
        logoImg.src = LogoLight;
      }
    } else {
      for(var i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "transparent";
        navLink[i].classList.add("text-black");
        navLink[i].classList.remove("text-white");
        logoImg.src = LogoDark;
      }
    }
  }

  // i18n language terms
  const [lg, i18n] = useTranslation("global");
  // i18n current language
  const [language, setlanguage] = useState(i18next.language);
  
  // Close navbar on mobile when click on a link
  const closeModal = () => {
    setTimeout(() => {
      document.getElementById("closeModal").click();    
    }, 500);  
  }

  // i18n change language
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    setlanguage(lng);
    closeModal();
  }

  return (
  <>

    {/* Desktop navbar */}
    <nav className="navbar navbar-expand-lg fixed-top pt-4 nav-scroll-animated
    d-none d-sm-block
    d-sm-none d-md-block
    d-md-none d-lg-block" id="nav-desktop">
    <ProgressBar />
    <div className="container-fluid pb-2">
      <a href={IsMainView ? '#homepage' : '/'} onClick={closeModal}>
        <img src={LogoDark} style={{marginLeft:30}} alt="Logo" width="100" height="100" className="d-inline-block align-text-top img-fluid" id="logo"  />        
      </a>        
        
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:20}}>
              {/* <li className="nav-item">
                <a className="nav-link active text-black" aria-current="page" href="#homepage">
                    {lg("navbar.home-link")}
                </a>
              </li> */}
          </ul> 
        <span className="navbar-text text-white">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <ul className="navbar-nav" style={{marginRight:50}}>
              <li className="nav-item dropdown dropstart">
                <a className="nav-link dropdown-toggle text-white d-flex align-items-center" 
                href="##" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {language === 'es' ? "Español" : "English"}
                  {/* {
                    language === 'es' ? (<img src={SpainFlag} className="flag" alt="Spanish" />)
                    : (<img src={EnglandFlag} className="flag" alt="English Flag" />)
                  }          */}
                  <i className="fa-solid fa-globe" style={{marginLeft:10}}></i>         
                </a>
                <ul className="dropdown-menu dropdown-menu-lightr">
                  <li>
                    <a className="dropdown-item" href="#es" onClick={() =>changeLanguage('es')}>
                     <img src={SpainFlag} style={{width: 20}} alt="Español" /> Español</a>
                    </li>
                  <li><a className="dropdown-item" href="#en" onClick={() =>changeLanguage('en')}>
                  <img src={EnglandFlag} style={{width: 20}} alt="English" /> English</a></li>
                </ul>
              </li>
            </ul>
          </ul>            
        </span>
        
        </div>
    </div>
    </nav>

    {/* Mobile navbar 37068c */}
    <nav className="navbar navbar-dark fixed-top pt-3 nav-scroll-animated 
    d-lg-none d-xl-block
    d-xl-none
    d-ProgressBarl-none d-ProgressBarl-block" style={{backgroundColor: 'transparent'}}>
    <ProgressBar />
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>                
          </div>
          <div className="mt-2 mb-3 text-center" style={{marginLeft: 50}}>
            <a href="#homepage" onClick={closeModal}>
              <img src={LogoDark} alt="Logo" width="150" height="150" className="d-inline-block align-text-top img-fluid" />
            </a>            
          </div>                    
        </div>
        <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header" style={{backgroundColor: '#37068c'}}>
            <img src={LogoDark} alt="Logo" width="150" height="150" className="d-inline-block align-text-top img-fluid" />
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" id="closeModal"></button>
          </div>
          <div className="offcanvas-body" style={{backgroundColor: '#37068c'}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:20}}>
                <li className={`nav-item4 ${!IsMainView && 'd-none'}`}>
                  <a className="nav-link active text-white" aria-current="page" href="#homepage" onClick={closeModal}>
                  {lg("navbar.home-link")}</a>
                </li>
                <li className={`nav-item4 ${!IsMainView && 'd-none'}`}>
                  <a className="nav-link text-white" href="#education" onClick={closeModal}>
                  {lg("navbar.education-link")}</a>
                </li>
                <li className={`nav-item4 ${!IsMainView && 'd-none'}`}>
                  <a className="nav-link text-white" href="#robox-day" onClick={closeModal}>
                  {lg("navbar.robox-day-link")}</a>
                </li>
                <li className={`nav-item4 ${!IsMainView && 'd-none'}`}>
                  <a className="nav-link text-white" href="#roboxday-form" onClick={closeModal}>
                  {lg("navbar.subscribe-link")}</a>
                </li>                
                <li className="nav-item dropdown dropend">
                <a className="nav-link dropdown-toggle text-white d-flex align-items-center" 
                href="##" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {language === 'es' ? "Español" : "English"}
                  {/* {
                    language === 'es' ? (<img src={SpainFlag} className="flag" alt="Spanish" />)
                    : (<img src={EnglandFlag} className="flag" alt="English Flag" />)
                  }          */}
                  <i className="fa-solid fa-globe" style={{marginLeft:10}}></i>         
                </a>
                <ul className="dropdown-menu dropdown-menu-light">
                  <li>
                    <a className="dropdown-item" href="#es" onClick={() =>changeLanguage('es')}>
                     <img src={SpainFlag} style={{width: 20}} alt="Español" /> Español</a>
                    </li>
                  <li><a className="dropdown-item" href="#en" onClick={() =>changeLanguage('en')}>
                  <img src={EnglandFlag} style={{width: 20}} alt="English" /> English</a></li>
                </ul>
              </li>                
            </ul> 
          </div>
        </div>
      </div>
    </nav>


</>
)
}

export default Header

