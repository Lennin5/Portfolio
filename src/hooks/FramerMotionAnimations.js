 //  Main Framer Motion Animations
const showHidden = {
    initial:{opacity: 0},    
    animate:{
        transition:{duration: 2, type: 'spring', delay: 1},            
        opacity: 1,
    }
  }

  const rotateCircle = {
    myhidden: { rotate: 0 },
    myvisible: {
      rotate: 360,
      transition: { duration: 10, repeat: Infinity, repeatType: "reverse" }
    },                        
}  

// Top to Bottom Animations
const topToInitial_1s = {
  initial: {x: '0', y: '-100px', opacity: 0, },
  animate:{
      transition:{duration: 1, type: 'spring', delay: 0.1},      
      y: 0,
      x: 0,
      opacity: 1
  }    
} 
const topToInitial_1_5s = {
  initial: {x: '0', y: '-100px', opacity: 0, },
  animate:{
      transition:{duration: 1.5, type: 'spring', delay: 0.5},
      y: 0,
      x: 0,
      opacity: 1
  }    
} 
const topToInitial_2s = {
  initial: {x: '0', y: '-100px', opacity: 0, },
  animate:{
      transition:{duration: 2, type: 'spring', delay: 1},
      y: 0,
      x: 0,
      opacity: 1
  }    
}
const topToInitial_2_5s = {
  initial: {x: '0', y: '-100px', opacity: 0, },
  animate:{
      transition:{duration: 2.5, type: 'spring', delay: 1.5},
      y: 0,
      x: 0,
      opacity: 1
  }    
}
// X
const showPrevButton = {
  initial:{opacity: 0},    
  animate:{
      transition:{duration: 2, type: 'spring', delay: 1},            
      opacity: 1,
  }
}
const showNextButton = {
  initial:{opacity: 0},    
  animate:{
      transition:{duration: 2, type: 'spring', delay: 0.5},            
      opacity: 1,
  }
}


//  Directional Animations
const topToInitial = {
  initial: {x: '0', y: '-100px', opacity: 0, },
  animate:{
      transition:{duration: 1, type: 'spring', delay: 0.1},      
      y: 0,
      x: 0,
      opacity: 1
  }    
}   
const bottomToInitial = {
  initial: {x: '0', y: '100px', opacity: 0, },
  animate:{
      transition:{duration: 1, type: 'spring', delay: 0.1},
      y: 0,
      x: 0,
      opacity: 1
  }    
}    
const leftTopToBottom = {
    initial: {x: '-300px', y: '-300px', opacity: 0},
    animate:{
        transition:{duration: 1, type: 'spring', delay: 0.1},
        y: 0,
        x: 0,
        opacity: 1
    }    
}
const leftToInitial = {
    initial: {x: '0px', y: '-50px', opacity: 0, },
    animate:{
        transition:{durarion: 1, type: 'spring', delay: 0.2},            
        y: 0,
        x: 0,
        opacity: 1
    }    
  }       
const rightToInitial = {
    initial: {x: '300px', y: '0px', opacity: 0},
    animate:{
        transition:{duration: 0.6, type: 'spring', delay: 0.1},
        y: 0,
        x: 0,
        opacity: 1
    }
}  
  
// Container with time delay
const container_delay_childrens_1 = {
  initial:{opacity: 0},
  animate:{
      transition:{duration: 1, delayChildren: 0.1, staggerChildren: 0.1},
      opacity: 1
  }
}
const container_delay_childrens_2 = {
  initial:{opacity: 0},
  animate:{
      transition:{duration: 2, delayChildren: 0.1, staggerChildren: 0.1},
      opacity: 1
  }
}
const container_delay_childrens_1_3 = {
  initial:{opacity: 0},
  animate:{
      transition:{duration: 1, delayChildren: 0.1, staggerChildren: 0.3},
      opacity: 1
  }
}
const container_delay_childrens_1_6 = {
  initial:{opacity: 0},
  animate:{
      transition:{duration: 1, delayChildren: 0.2,  staggerChildren: 0.6},
      opacity: 1
  }
}

const item_showHidden = {
  initial:{opacity: 0},
  animate:{
      opacity: 1,
  }
}

export { 
  showHidden,
  rotateCircle,
  topToInitial,
  bottomToInitial,    
  rightToInitial,
  leftTopToBottom,
  leftToInitial,
  container_delay_childrens_1,  
  container_delay_childrens_2,
  container_delay_childrens_1_3,
  container_delay_childrens_1_6,
  item_showHidden,

  topToInitial_1s,
  topToInitial_1_5s,
  topToInitial_2s,
  topToInitial_2_5s,
  showPrevButton,
  showNextButton,
};