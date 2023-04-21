import React from 'react'

export default function Profile() {
  return (
    <>
    <div className="row text-center mb-10">
      <div className="col-12">
        <span className="fs-3 animate text-white">Me considero un desarrollador web disruptivo en la creación de experiencias digitales atractivas, intuitivas y efectivas, mi lema: <br /> "Piensa en todo, ah! y una cosa más" :)</span>
      </div>       
    </div>
    <div className="container mt-5">
      <div className="row">
      <div className="col-12">
          <div className="container">
            <div className="card-body">
              <div className="row d-flex justify-content-center">
                <div className='col-12 col-md-6'> 
                    <div className="fs-5 d-flex align-items-center justify-content-center text-left mb-5 icon-item">
                        <div className="column text-center">
                          <i className="fa-solid fa-user fa-user-icon btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                          <div className="row d-flex justify-content-start" style={{lineHeight: 1.2}}>
                            <span className="fs-6 text-gray-800 text-center">Nombre</span>
                            <p className="text-white">
                              Lennin Josué Lemus Díaz
                            </p>
                          </div>                          
                        </div>
                    </div>   
                    <br />
                    <div className="fs-5 d-flex align-items-center justify-content-center text-left mb-5 icon-item">
                        <div className="column text-center">
                          <i className="fa-solid fa-user-tag btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                          <div className="row d-flex justify-content-start" style={{lineHeight: 1.2}}>
                          <span className="fs-6 text-gray-800 text-center">Edad</span>
                            <span className="text-white">
                              23 años
                            </span>
                        </div>                          
                        </div>
                    </div>     
                    <br />                                    
                  </div>
                  <div className='col-12 col-md-6'> 
                    <div className="fs-5 d-flex align-items-center justify-content-center text-left mb-5 icon-item">
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
                      <br />              
                      <div className="fs-5 d-flex align-items-center justify-content-center text-left mb-5 icon-item">
                          <div className="column text-center">
                            <i className="fa-solid fa-earth-americas btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                            <div className="row d-flex justify-content-start" style={{lineHeight: 1.2}}>
                            <span className="fs-6 text-gray-800 text-center">País</span>
                              <span className="text-white">
                                El Salvador
                              </span>
                          </div>                          
                          </div>
                      </div> 
                  </div>
                  <br />
                  <div className="col-12">
                    <div className="fs-5 d-flex align-items-center justify-content-center text-left mb-5 icon-item">
                          <div className="column text-center">
                            <i className="fa-solid fa-phone btn-circle bg-gray-900 text-white me-2 pt-4 text-center" />                        
                            <div className="row d-flex justify-content-start" style={{lineHeight: 1.2}}>
                            <span className="fs-6 text-gray-800 text-center">Teléfono</span>
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
