import styled from "styled-components";
import { Link } from "react-router-dom";

export const GothStyle= styled.div`
 @font-face {
    font-family: 'DarkPix Gothic';
    src: url('https://www.fontsaddict.com/fontface/darkpix-gothic.ttf') format('truetype');
    /* Add other font formats if needed */
  }
`

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "23%" : "80px")};
  background-color: black;
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 90%;
  display: flex;
  align-items: center;
  padding-left: 20%;

`;

export const RightContainer = styled.div`
  flex: 10%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  background-color: white;

  
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;

`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
 
`;

export const NavbarIconContainer=styled.div`

display: flex;
align-items: center;
justify-self: flex-end;


`

export const NavbarExtendedIconContainer= styled.div`
height: auto;
width: auto;
display: flex;
align-items: center;

`

export const NavbarLink = styled(Link)`
  color: ${props => props.isActive ? 'darkgray' : 'white'};
  font-size: x-large;
  font-family: 'DarkPix Gothic', sans-serif;
  text-decoration: none;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 3rem;
  font-weight: ${props=>props.isActive ? "bolder":"auto"};
  text-shadow: ${props=>props.isActive ?"0 2px 3px #747474, 1px 3px 4px #222,  0 8px 3px #474747, 0 11px 4px #747474,0 14px 4px #565656,0 17px 4px #343434,0 20px 4px #171717;":"0"}; 
  @media (max-width: 700px) {
    display: none;
  }

  
`;

export const NavHeader= styled.p` 
 color: white;
 font-size: xx-large;
 font-family: 'Fruktur', cursive;
 text-decoration: none;
 /* display: flex; */
 /* align-self:stretch; */
 /* float: right; */



`

export const NavbarLinkExtended = styled(Link)`
    color: ${props => props.isActive ? 'darkgray' : 'white'};
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  font-weight: ${props=>props.isActive ? "bolder":"auto"};
  text-shadow: ${props=>props.isActive ?"0 2px 3px #747474, 1px 3px 4px #222,  0 8px 3px #474747, 0 11px 4px #747474,0 14px 4px #565656,0 17px 4px #343434,0 20px 4px #171717;":"0"}; 
`;



export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  @media (min-width: 700px) {
    display: none;
  }
`;