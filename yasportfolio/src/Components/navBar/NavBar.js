import React, {useState} from 'react'
import {LeftContainer, NavBarContainer, 
    NavbarExtendedContainer, NavbarInnerContainer, 
    NavbarLink, NavbarLinkContainer, RightContainer,
    Logo,OpenLinksBtn} from "../../styles/NavBarStyle"
import LogoImg from "../../assets/fatfattatslogo.png"



const NavBar = () => {

    const [extendNavBar,setExtendNavbar]= useState(false)
  return (
    <NavBarContainer>
        <NavbarInnerContainer>
        <LeftContainer>
            <NavbarLinkContainer extendNavBar={extendNavBar}>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/portfolio">Portfolio</NavbarLink>
                <NavbarLink to="/contact">Contact Me</NavbarLink>
                <NavbarLink to="/about">About</NavbarLink>
                <OpenLinksBtn
                onClick={()=>{
                    setExtendNavbar((curr)=>!curr)
                }}
                >
                    {extendNavBar? <>&#10005;</>:<>&#8801;</>}</OpenLinksBtn>
            </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
            <Logo src={LogoImg} ></Logo>
        </RightContainer>
        </NavbarInnerContainer>
        <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavBarContainer>
  )
}

export default NavBar