import React, { useState } from "react";
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
} from "../../styles/NavBarStyle";
import LogoImg from "../../assets/fatfattatslogo.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
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
    transition={{ duration: 0.5 }}
  >
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
          <NavHeader>Yasmine</NavHeader>
            <NavbarLink to="/yasPortfolio"> Home</NavbarLink>
            <NavbarLink to="/portfolio"> Portfolio</NavbarLink>
            <NavbarLink to="/contact"> Contact</NavbarLink>
            <NavbarLink to="https://www.instagram.com/fatfattats"> insta</NavbarLink>
           
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          {/* <Logo src={LogoImg}></Logo> */}
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/portfolio"> Portfolio</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Contact</NavbarLinkExtended>
          <NavbarLinkExtended to="https://www.instagram.com/fatfattats"> insta</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
    </motion.div>
  );
}

export default Navbar;