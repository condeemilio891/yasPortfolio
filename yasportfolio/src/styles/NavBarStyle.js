import styled from "styled-components";
import {Link} from "react-router-dom";

// containers 
export const NavBarContainer=styled.nav`
    width:100%;
    height:${(props)=>(props.extendNavbar ? "100vh":"80px")};
    background-color: black;
    display: flex;
    flex-direction:column ;
    
`
export const LeftContainer= styled.div`
    flex: 85%;
    display: flex;
    align-items: center;
    padding-left:5%;
    background-color: black;

`

export const RightContainer= styled.div`
    flex:15%;
    display: flex;
    justify-content: flex-end;
    padding-right:50px;
    background-color: white;
`

export const NavbarInnerContainer= styled.div`
    width: 100%;
    height:80px;
    display:flex;

`
export const NavbarLinkContainer= styled.div`
    display:flex;
`


export const NavbarExtendedContainer= styled.div`

`
//Link 

export const NavbarLink=styled(Link)`
color:white;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin:10px;
@media (max-width: 700px){
    display: none;
}
`

//Logo 

export const Logo = styled.img`
    margin:10px;
    max-width:180px;
    height:auto;
`

// mobile responsive 

export const OpenLinksBtn = styled.button`
width: 70px;
height:50px;
background: none;
border: none;
color:white;
font-size: 45px;
cursor: pointer;

@media (min-width: 700px){
    display: none;
}
`