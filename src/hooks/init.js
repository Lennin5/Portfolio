// import $ from 'jquery';

// // cuando cargue la pagina
// window.onload = function() {

//   var carousel = $(".carousel"),
//       items = $(".item-x"),
//       currdeg  = 0;

//   $(".next").on("click", { d: "n" }, rotate);
//   $(".prev").on("click", { d: "p" }, rotate);

//   function rotate(e){
//     if(e.data.d=="n"){
//       currdeg = currdeg - 60;
//     }
//     if(e.data.d=="p"){
//       currdeg = currdeg + 60;
//     }
//     carousel.css({
//       "-webkit-transform": "rotateY("+currdeg+"deg)",
//       "-moz-transform": "rotateY("+currdeg+"deg)",
//       "-o-transform": "rotateY("+currdeg+"deg)",
//       "transform": "rotateY("+currdeg+"deg)"
//     });
//       items.css({
//       "-webkit-transform": "rotateY("+(-currdeg)+"deg)",
//       "-moz-transform": "rotateY("+(-currdeg)+"deg)",
//       "-o-transform": "rotateY("+(-currdeg)+"deg)",
//       "transform": "rotateY("+(-currdeg)+"deg)"
//     });
//   }

// };

import $ from 'jquery';

// cuando cargue la pagina
window.onload = function() {

  var carousel = $(".carousel"),
      items = $(".item-x"),
      currdeg  = 0;

  $(".next").on("click", { d: "n" }, rotate);
  $(".prev").on("click", { d: "p" }, rotate);

  // 

  function rotate(e){
    if(e.data.d=="n"){
      currdeg = currdeg - 90;
    }
    if(e.data.d=="p"){
      currdeg = currdeg + 90;
    }
    carousel.css({
      "-webkit-transform": "rotateY("+currdeg+"deg)",
      "-moz-transform": "rotateY("+currdeg+"deg)",
      "-o-transform": "rotateY("+currdeg+"deg)",
      "transform": "rotateY("+currdeg+"deg)"
    });
      items.css({
      "-webkit-transform": "rotateY("+(-currdeg)+"deg)",
      "-moz-transform": "rotateY("+(-currdeg)+"deg)",
      "-o-transform": "rotateY("+(-currdeg)+"deg)",
      "transform": "rotateY("+(-currdeg)+"deg)"
    });
  }



  animateElements();

  const ASCII_OF_A = "A".charCodeAt();
  const NO_OF_ALPHABETS = 26;
  
  function animateElement(element, originalText, options) {
      let iteration = 0;
  
      if (options.interval) {
          return;
      }
  
      options.interval = setInterval(() => {
          const newWord = originalText
              .split("")
              .map((_, idx) => {
                  if (idx < iteration) {
                      return originalText[idx];
                  }
                  return String.fromCharCode(
                      Math.trunc(Math.random() * NO_OF_ALPHABETS) + ASCII_OF_A
                  );
              })
              .join("");
          element.innerText = newWord;
  
          iteration += 1;
  
          if (iteration > originalText.length) {
              clearInterval(options.interval);
              options.interval = null;
          }
      }, 50);
  }
  
  function getRandomLetter() {}
  
  function animateElements() {
      const elements = document.getElementsByClassName("animate");
  
      for (const element of elements) {
          const originalText = element.innerText;
          const options = {
              interval: null
          };
          animateElement(element, originalText, options);
  
          element.addEventListener("mouseover", (event) => {
              animateElement(event.target, originalText, options);
          });
      }
  }  

  // Pasar a la siguiente seccion del carrusel con las flechas del teclado
  window.addEventListener("keydown", function(event) {
    var prev_carousel_item = document.getElementById("prev-carousel-item");
    var next_carousel_item = document.getElementById("next-carousel-item");

    if (event.key === "ArrowLeft") { // Flecha izquierda
        prev_carousel_item.click();
    }
    else if (event.key === "ArrowRight") { // Flecha derecha
        next_carousel_item.click();
    }
  });  

};









