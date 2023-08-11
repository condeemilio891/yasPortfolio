import styled from "styled-components";
import { Link } from "react-router-dom";



export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: white;
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

export const NavbarLink = styled(Link)`
  color: black;
  font-size: x-large;
  font-family: 'EB Garamond', serif;
  text-decoration: none;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 3rem;


  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavHeader= styled.p` 
 color: black;
 font-size: xx-large;
 font-family: 'Borel', cursive;
 text-decoration: none;
 /* display: flex; */
 /* align-self:stretch; */
 /* float: right; */



`

export const NavbarLinkExtended = styled(Link)`
  color: black;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: black;
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
  height: 10%;

  @media (min-width: 700px) {
    display: none;
  }
`;