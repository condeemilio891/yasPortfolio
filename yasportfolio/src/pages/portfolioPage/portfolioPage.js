import React from 'react'
import "./style.css"
import Card from '../../Components/AnimatedCard/Card'
import image1 from "../../assets/tatPic1.png"
import image2 from "../../assets/tatPic2.png";
import image3 from "../../assets/tatPic3.png";

const PortfolioPage = () => {
  return (
    <>
   <div class="portfolioGrid">
   <Card img={image1}></Card>
   <Card img={image2} />
      <Card img={image3} />
      <Card img= {image1}></Card>
      </div>
   </>
   
  )
}

export default PortfolioPage