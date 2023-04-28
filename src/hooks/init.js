import $ from 'jquery';

// On load window
window.onload = function() {

  // Carousel
  
  var carousel = $(".carousel");
  var items = $(".item-x");
  var currdeg  = 0;

  $(".next").on("click", { d: "n" }, rotate);
  $(".prev").on("click", { d: "p" }, rotate);

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

  // Aleatory text animation

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
  
  function animateElements() {
      const elements = document.getElementsByClassName("animate");
  
      for (const element of elements) {
          const originalText = element.innerText;
          const options = {
              interval: null
          };
          animateElement(element, originalText, options);
  
          element.addEventListener("mouseover", (event) => {
            //   animateElement(event.target, originalText, options);
          });
      }
  }  

  // Go to next carousel item with keyboard arrows
  window.addEventListener("keydown", function(event) {
    var prev_carousel_item = document.getElementById("prev-carousel-item");
    var next_carousel_item = document.getElementById("next-carousel-item");

    if (event.key === "ArrowLeft") { // Left arrow
        prev_carousel_item.click();
    }
    else if (event.key === "ArrowRight") { // Right arrow
        next_carousel_item.click();
    }
  });  

};









