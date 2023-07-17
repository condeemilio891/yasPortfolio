import React from 'react';
import { CardBody } from '../../styles/CardStyle';
import image1 from '../../assets/tatPic1.png';
import image2 from "../../assets/tatPic2.png"
import './Card.css';

const Card = (props) => {
  return (
    <div className='portfolio-container'>
      <div className='card'>
        <img src={props.img} className='card-img' />
        <div className='card-body'></div>
      </div>
    </div>
  );
};

export default Card;