import React from 'react'
import {LeftContainer, NavBarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, RightContainer} from "../../styles/NavBarStyle"

const NavBar = () => {
  return (
    <NavBarContainer>
        <NavbarInnerContainer>
        <LeftContainer>
            <NavbarLinkContainer>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/">Portfolio</NavbarLink>
                <NavbarLink to="/">Contact Me</NavbarLink>
                <NavbarLink to="/">About</NavbarLink>
            </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer></RightContainer>
        </NavbarInnerContainer>
        <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavBarContainer>
  )
}

export default NavBar