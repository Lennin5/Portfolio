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
// Sincronized animations for prev and next buttons of carousel
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

// Item with time delay
const item_showHidden = {
  initial:{opacity: 0},
  animate:{
      opacity: 1,
  }
}

export { 
  topToInitial_1s,
  topToInitial_1_5s,
  topToInitial_2s,
  topToInitial_2_5s,

  container_delay_childrens_1,  
  container_delay_childrens_2,
  item_showHidden,

  showPrevButton,
  showNextButton,
};