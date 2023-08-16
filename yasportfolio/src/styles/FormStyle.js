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
  /* background-color: white; */
  background-image: url(../../assets/blackAndGrayBG.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export const ContactBox=styled.div` 
height:20%;
width: 15%;
display:flex;
justify-content:center; 
align-items: center;
background-color: white;
float:left;
color:black




`

export const StyledForm = styled.form`
color:lightgray;
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: black;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
export const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
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


`