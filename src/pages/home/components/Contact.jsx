import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { 
  item_showHidden,
  container_delay_childrens_1,
  container_delay_childrens_2,
} from '../../../hooks/FramerMotionAnimations'

export default function Contact() {

  // My phone number
  const phone_number = "50372380568";

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

    const ToastMessage = (type) => {
        toast.error("Mensaje enviado correctamente", {
            position: "top-right",
            closeButton: false,
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,  
            className: "shadow-lg",
            style: {
                backgroundColor: 
                type === "success" ? "#6010C6" : "#f44336",
                borderRadius: 10, 
                marginTop: 15,
                marginLeft: 10,
                marginRight: 10,
            },
            bodyStyle: {
                textAlign: "center",
            }
        });;  
    }   

    // On load page
    useEffect(() => {
      limitCharacters('mce-FCOMMENT', 248);

      // Limit characters on input
      function limitCharacters(field_name, limit){
          var field = document.getElementById(field_name);
          if (field){
              field.addEventListener('keypress', function (e) {
                  if (field.value.length >= limit) {
                      e.preventDefault();
                  }
              })
          }
      }

  }, [])  

  // Function to verify if all fields are filled to enable the submit button
  function verifyFields() {
      // Define an array with the IDs of the fields to verify
    const arrayFields = ['mce-EMAIL'];
    // Create a new array with boolean values indicating whether each field is filled or not
    const formFilled = arrayFields.map(field => document.getElementById(field).value !== '');
    // Check if all fields are filled
    const allFieldsFilled = formFilled.every(Boolean);

    // Add or remove the 'disabled' className from the form button based on the value of all_fields_filled
    const formButton = document.getElementById('form-button');
    formButton.classList.toggle('disabled', !allFieldsFilled);
  }     
  function clearInputs() {
    document.getElementById('mce-EMAIL').value = '';
    document.getElementById('mce-FCOMMENT').value = '';
  }

  // Function to send data to Mailchimp
  async function sendDataToMailchimp() {
    var username = "lenninlemus0@gmail.com";
    var url = "https://gmail.us21.list-manage.com/subscribe/post?u=b4929ada4a58f57166f6f7af5&amp;id=795fbc8c80&amp;f_id=009bb2e1f0"
    try {                
        const contactForm = document.querySelector('form');
        if (!contactForm || !(contactForm instanceof HTMLFormElement)) {
            throw new Error('Invalid form element.');
        }            
        const allData = new FormData(contactForm);            
        // Send data with fetch
        const response = await fetch(url, {
            method: 'POST',
            body: allData,
            mode: 'no-cors',
        });
        clearInputs();
        ToastMessage("success");
        // console.log(`Data uploaded to ${username} Mailchimp account: `, response);     
        setIsLoading(false);
    } catch (error) {
        ToastMessage("error");
        setIsLoading(false);
        alert("Error to send data, please try again later.");
        // console.error(`Error to upload data to ${username} Mailchimp account: `, error);
    }    
  }         

  // Function to handle click on submit button
  async function handleClick(event) {
    await event.preventDefault();
    setIsLoading(true);
    sendDataToMailchimp();
  }    

  return (
    <div className="mt-2">
    <ToastContainer transition={Bounce} />
      {/* <motion.div className="row d-flex justify-content-center mb-10" initial="initial" whileInView="animate" viewport={{ once: false }}>
        <motion.div className="col-12" variants={container_delay_childrens_1}>
          <motion.div className="row mb-2" variants={item_showHidden}>
            <span className="fs-3 text-white fw-bolder">
              <i className="fa-solid fa-phone me-2" />
              Contáctame
            </span>
            <hr className="mt-2 text-white" />
          </motion.div>   
        </motion.div>
      </motion.div>   */}

      <div className="row d-flex justify-content-center mb-10">
        <motion.div className="col-12" initial="initial" whileInView="animate" viewport={{ once: false }}>
          <motion.div className="row d-flex justify-content-center" variants={container_delay_childrens_1}>
          <motion.div className="row mb-10" variants={item_showHidden}>
            <span className="fs-3 text-white fw-bolder">
              <i className="fa-solid fa-phone me-2" />
              Contáctame
            </span>
            <hr className="mt-2 text-white" />
          </motion.div>             
            <motion.div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-0 mt-lg-0" variants={item_showHidden}>
              <div className="row text-center">
                <a href={`https://wa.me/${phone_number}`} target="blank" className="text-white text-decoration-none">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg> 
                  </div>
                  <div className="mt-3">
                    <h4>
                      <b>+503 7238 0568</b>
                    </h4>
                  </div>
                </a>
              </div>                             
            </motion.div>
            <motion.div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-4 mt-lg-0" variants={item_showHidden}>
              <div className="row text-center text-white">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                  </svg>
                </div>
                <div className="mt-3">
                  <h4>
                    <b>lenninlemus0@gmail.com</b>
                  </h4>
                </div>
              </div>                             
            </motion.div>
            <motion.div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-4 mt-lg-0" variants={item_showHidden}>
              <div className="row text-center text-white">
                <a href="https://github.com/Lennin5" target="blank" className="text-white text-decoration-none">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </div>
                  <div className="mt-3">
                    <h4>
                      <b>Lennin5</b>
                    </h4>
                  </div>
                </a>    
              </div>                                       
            </motion.div>        
            <motion.div className="col-12 col-md-12 col-lg-6" variants={item_showHidden}>
              <div className="text-center text-white mb-7 mt-5">
                  <span className="fs-4">ó</span>
                  <br />
                  <span className="fs-3">¡Envíame un mensaje!</span>
              </div> 
              <form id="mc-embedded-subscrimotion.be-form" name="mc-embedded-subscribe-form" className="text-white">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label fs-5">Correo Electrónico*</label>
                  <input type="email" className="form-control" name="EMAIL" id="mce-EMAIL" aria-describedby="emailHelp" required={true} style={{borderRadius: 10, outline: "none", border: "none"}} onChange={verifyFields} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label fs-5">Mensaje (opcional)</label>
                  <textarea className="form-control" name="FCOMMENT" id="mce-FCOMMENT" rows="3" style={{borderRadius: 10, outline: "none", border: "none"}} onChange={verifyFields} />
                </div>

                <div id="mce-responses" className="clear foot">
                        <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                        <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                    </div>
                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                        <input type="text" name="b_f5ca7a0cb15183f1d788df717_fd44f214b7" tabIndex="-1" />
                    </div>

                <button type="button" id="form-button" onClick={handleClick}
                className={`btn btn-primary rounded-1 text-white disabled ${isLoading ? "disabled" : ""}`} 
                style={{backgroundColor: "#3C48C8"}}>
                  {isLoading && (
                  <div className="spinner-border spinner-border-sm text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                  </div>
                  )}
                  {!isLoading && <span>Enviar</span>}                     
                </button>
              </form>              
            </motion.div>
          </motion.div>         


        </motion.div>

      </div>
    </div>
  )
}
