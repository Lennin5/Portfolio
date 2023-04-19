import $ from 'jquery';

// cuando cargue la pagina

// cuando cargue la pagina 

window.onload = function() {

  var carousel = $(".carousel"),
      items = $(".item"),
      currdeg  = 0;

  $(".next").on("click", { d: "n" }, rotate);
  $(".prev").on("click", { d: "p" }, rotate);

  function rotate(e){
    if(e.data.d=="n"){
      currdeg = currdeg - 60;
    }
    if(e.data.d=="p"){
      currdeg = currdeg + 60;
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

};