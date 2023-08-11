import React, {useEffect, useState} from 'react'
import './backgroundSliderStyle.css'
import { motion } from 'framer-motion';
import image1 from "../../assets/tatPic1.png"
import image2 from"../../assets/tatPic2.png"
import image3 from "../../assets/tatPic3.png"

const BackgroundSlider = () => {

  const imageSlide=[
{url:image1},{url:image2},{url:image3}
   
]
    const [currentState,setCurrentState]=useState(2)
    useEffect(()=>{
      const timer= setTimeout(()=>{
        if(currentState===2){
          setCurrentState(0)
        }else{
          setCurrentState(currentState+1)
        }
      },5000)
      return()=>clearTimeout(timer)
    },[currentState])
    
    const bgImageStyle={
        backgroundImage:`url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        height: '100vh',
        width: '80vw',
        top:0,
        left:0,
       
    }
    const gotoNext=()=>{
      setCurrentState(currentState)
    }

    const pageVariants = {
      initial: { opacity: 0,  },
      animate: { opacity: 1, },
      exit: { opacity: 0,  },
    };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 2 }}
    >
   <div id='container'>
    <div style={bgImageStyle}></div>
    <div className='description'>
      <div className='titleContainer'>
    {/* <h1>Fat Fat Tats</h1> */}
      {/* <p> tattoo artist</p> */}

      {/* schedule a session button */}
      {/* <div className='button-17'> Schedule a Session</div> */}
      </div>

      {/* Carousel */}
      <div className='carousel-build'>
        {
          imageSlide.map((imageSlide,currentState)=>(
            <span key={currentState} onClick={()=>gotoNext(currentState)}></span>
          ))
        } </div>
    </div>

   </div>
   </motion.div>
  )
}

export default BackgroundSlider