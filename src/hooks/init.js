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




  // const setProp = (el, prop, value) => el.style.setProperty(prop, value) 
	
  // const el =  document.getElementById('access-card')
  
  // const onMouseUpdate = e => {
  //     let width = el.offsetWidth
  //     let XRel = e.pageX - el.offsetLeft
  //     let YRel = e.pageY - el.offsetTop
    
  //     let YAngle = -(0.1- (XRel / width)) * 10; 
  //     let XAngle = (0.1- (YRel / width)) * 10;
    
  //     setProp(el, '--dy', `${YAngle}deg`)
  //     setProp(el, '--dx', `${XAngle}deg`)
  // }
  
  // const resetProps = () => {
  //   el.style.setProperty('--dy', '0')
  //   el.style.setProperty('--dx', '0')
  // }
  
  
  // el.addEventListener('mousemove', onMouseUpdate, false)
  // el.addEventListener('mouseenter', onMouseUpdate, false)
  // el.addEventListener('mouseleave', resetProps, false)

  
};









