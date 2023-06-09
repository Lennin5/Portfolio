import React from 'react'
import { motion, useScroll } from "framer-motion"

const ProgressBar = () => {
    
  const { scrollYProgress } = useScroll()
  return (
    <>
    <div className="">
      {/* Linear progress bar application */}
      <motion.div className="progress-bar" 
      style={{ scaleX: scrollYProgress }} />
    </div>
    </>
  )
}

export default ProgressBar