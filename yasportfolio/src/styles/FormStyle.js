import styled, {css} from "styled-components";

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
  background-image: url(../../assets/blackAndGrayBG.jpg);
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: flex-start; /* Center content vertically */
  height: 100vh;
  padding: 20px;
  /* Mobile responsiveness */
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
  
`;

export const ContactBox = styled.div`
  height: 80%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: flex-start; 
  background-color: none;
  color: white;
  /* border for tsting */
  /* border: white;
  border-style: double;
border-width: .3em;
border-radius: 10%; */ 
margin-right: 3rem;
 
  margin-top: 2rem;
    /* Mobile responsiveness */
    @media (max-width: 700px) {
    display: none;
  }
`;
export const ContactBoxTitle= styled.h1`
font-size: 3rem;
color:white;
opacity: 1;
margin-left: 7%;
`

export const ContactBoxText = styled.p`
font-size: 1.4rem;
color:White;
margin-left: 5%;
opacity: 1;
font-style: italic;

`

export const StyledForm = styled.form`
color:lightgray;
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: black;
  border-radius: 10%;
  box-sizing: border-box;
   box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.3);
  background: linear-gradient(145deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
  height: 100%;
  margin-left: 4rem;

  
`;

export const StyledInput = styled.input`
  display: block;
  width: 60%;
  margin-left: auto;
  ${sharedStyles}
`;


export const MessageWrapper=styled.div`
display: flex;
flex-direction: column;

`
export const StyledTextArea = styled.textarea`
    background-color: #eee;
  width: 60%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
  margin-left: auto; 
 
 
  ${sharedStyles}
`;
export const StyledButton = styled.button`
  display: block;
  background-color: darkgray;
  color: #000000;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export const initalState = {
  name: '',
  email: '',
  message: '',
  phone: ''
};


export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: 5rem;
  width: 5rem;
  z-index: 2;
  float: right;

  /* @media (min-width: 700px) {
    display: none;
  } */
`
export const ContactHeader=styled.h1`
  font-size: 3rem;
  color:white;
  display: none;
   /* Mobile responsiveness */
   @media (max-width: 700px) {
    display: flex;
  }

`

export const ContactMobileDesc = styled.p`

font-size: 1rem;
color:White;
display: none;

@media (max-width:700px) {
  display: flex;
  
}

`