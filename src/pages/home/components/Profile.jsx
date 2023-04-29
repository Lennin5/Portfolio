import React from 'react'
import { saveAs } from 'file-saver';
import { useTranslation } from "react-i18next";

import LenninLemusCV from '../../../assets/pdf/LenninLemusCV.pdf';

export default function Profile() {

    // i18n language terms
    const [lg, i18n] = useTranslation("global");

  const downloadPDF = () => {
    saveAs(LenninLemusCV, 'LenninLemusCV.pdf');
  };

  return (
    <>    
    <div className="row text-center mb-10">
      {/* <div className="row text-center mb-10"> */}
        <div className="col-12 mb-10">
          <button className="btn btn-dark rounded-1" onClick={downloadPDF}>
            {lg("profile.download-cv")}
          </button>
        </div>       
      {/* </div>       */}
      <div className="col-12">
        {/* <span className="fs-3 animate text-white">Me considero un desarrollador web disruptivo en la creación de experiencias digitales atractivas, intuitivas y efectivas, mi lema: <br /> "Piensa en todo, ah! y una cosa más" :)</span> */}
        <span className="fs-3 animate text-white">
          {lg("profile.my-title")}
        </span>        
        <br />
        <span className="fs-3 animate text-white">
          {/* {lg("profile.my-description")} */}
          <span dangerouslySetInnerHTML={{__html: lg("profile.my-description")}} />
        </span>
      </div>       
    </div>
    <div className="container mt-5">
      <div className="row">
      <div className="col-12">
          <div className="container">
            <div className="card-body">
              <div className="row d-flex justify-content-center">
                <div className='col-12 col-md-6'> 
                    <div className="fs-5 d-flex align-items-center justify-content-center text-left mb-5 profile-item">
                        <div className="column text-center">
                          <i className="fa-solid fa-user fa-user-icon btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                          <div className="row d-flex justify-content-start" style={{lineHeight: 1.2}}>
                            <span className="fs-6 text-gray-600 text-center">{lg("profile.name-title")}</span>
                            <p className="text-white">
                              Lennin Josué Lemus Díaz
                            </p>
                          </div>                          
                        </div>
                    </div>   
                    <br />
                    <div className="fs-5 d-flex align-items-center justify-content-center text-left mb-5 profile-item">
                        <div className="column text-center">
                          <i className="fa-solid fa-user-tag btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                          <div className="row d-flex justify-content-start" style={{lineHeight: 1.2}}>
                          <span className="fs-6 text-gray-600 text-center">{lg("profile.age-title")}</span>
                            <span className="text-white">
                              {lg("profile.age-value")}
                            </span>
                        </div>                          
                        </div>
                    </div>     
                    <br />                                    
                  </div>
                  <div className='col-12 col-md-6'> 
                    <div className="fs-5 d-flex align-items-center justify-content-center text-left mb-5 profile-item">
                          <div className="column text-center">
                            <i className="fa-solid fa-location-dot btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                            <div className="row d-flex justify-content-start" style={{lineHeight: 1.2}}>
                            <span className="fs-6 text-gray-600 text-center">{lg("profile.address-title")}</span>
                              <span className="text-white">
                                BO. San Sebastián, 
                                CL. Libertad  
                                #12, <br />
                                Sonsonate - Izalco
                              </span>
                          </div>                          
                          </div>
                      </div>    
                      <br />              
                      <div className="fs-5 d-flex align-items-center justify-content-center text-left mb-5 profile-item">
                          <div className="column text-center">
                            <i className="fa-solid fa-earth-americas btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                            <div className="row d-flex justify-content-start" style={{lineHeight: 1.2}}>
                            <span className="fs-6 text-gray-600 text-center">{lg("profile.country-title")}</span>
                              <span className="text-white">
                                El Salvador
                              </span>
                          </div>                          
                          </div>
                      </div> 
                  </div>
                  <br />
                  <div className="col-12">
                    <div className="fs-5 d-flex align-items-center justify-content-center text-left mb-5 profile-item">
                          <div className="column text-center">
                            <i className="fa-solid fa-phone btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                            <div className="row d-flex justify-content-start" style={{lineHeight: 1.2}}>
                            <span className="fs-6 text-gray-600 text-center">{lg("profile.phone-title")}</span>
                              <span className="text-white">
                                +503 7238 0568
                              </span>
                          </div>                          
                          </div>
                      </div>                     
                  </div>
                </div>
              </div>
            </div>
          </div>   
        </div>
      </div>
    </>
  )
}
