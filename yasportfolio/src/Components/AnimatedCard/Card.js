import React from 'react';
import { CardBody } from '../../styles/CardStyle';
import image1 from '../../assets/tatPic1.png';
import image2 from "../../assets/tatPic2.png"
import './Card.css';
import { motion } from 'framer-motion';

const Card = (props) => {
  const pageVariants = {
    initial: { opacity: 0, x: '-100%' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' },
  };
  
  return (
    <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={{ duration: 2 }}
  >
    <div className='portfolio-container'>
      <div className='card'>
        <img src={props.img} className='card-img' />
        <div className='card-body'></div>
      </div>
    </div>
    </motion.div>
  );
};

export default Card;