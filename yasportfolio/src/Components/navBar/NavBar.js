import React, { useState } from "react";
import "./style.css"
import { motion } from 'framer-motion';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  NavHeader,
  NavbarExtendedIconContainer,
  NavbarIconContainer,
  GothStyle,
} from "../../styles/NavBarStyle";
import { FaFacebook,FaLinkedin,FaTwitter,FaInstagram } from "react-icons/fa";

function Navbar() {

 
  const [extendNavbar, setExtendNavbar] = useState(false);
  
  const [activeLink,setActiveLink]=useState(false);

  const pageVariants = {
    initial: { opacity: 0, x: '-100%' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' },
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={{ duration: 0.5 }}
  >
    <GothStyle>
    <NavbarContainer extendNavbar={extendNavbar}>
     
      <NavbarInnerContainer>
      <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
        <LeftContainer>
        
          <NavbarLinkContainer>
          <NavHeader>Fat Fat Tats</NavHeader>
         
            <NavbarLink to="/yasPortfolio"
            onClick={() => handleLinkClick("Home")} // Update active link
            isActive={activeLink==="Home"}> Home</NavbarLink>
           
            <NavbarLink to="/portfolio"
            onClick={() => handleLinkClick("Portfolio")} // Update active link
            isActive={activeLink==="Portfolio"}> Portfolio</NavbarLink>
            <NavbarLink to="/contact"
              onClick={() => handleLinkClick("Contact")} // Update active link
              isActive={activeLink==="Contact"}
            > Contact</NavbarLink>
         
         
           
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
        <NavbarIconContainer>
          
                <a className="navAnchor"href="https://www.instagram.com/fatfattats"><FaInstagram/></a>
               <a className="navAnchor"href="https://twitter.com/fatfattats"><FaTwitter/></a>
               <a className="navAnchor"href="https://twitter.com/fatfattats"><FaFacebook/></a>
          </NavbarIconContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"
           onClick={() => handleLinkClick("Home")} // Update active link
           isActive={activeLink==="Home"}> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/portfolio"
           onClick={() => handleLinkClick("Portfolio")} // Update active link
           isActive={activeLink==="Portfolio"}> Portfolio</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"
           onClick={() => handleLinkClick("Contact")} // Update active link
           isActive={activeLink==="Contact"}> Contact</NavbarLinkExtended>
        
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
    </GothStyle>
    </motion.div>
  );
}

export default Navbar;