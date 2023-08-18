import React, {useState} from 'react'
import {StyledFormWrapper,StyledForm,StyledInput,
  StyledButton,StyledFieldset,StyledTextArea,StyledError,initalState,
ContactHeader,ContactBoxTitle,ContactBoxText, MessageWrapper,
ContactBox,ContactMobileDesc} from "../../styles/FormStyle"
import { Logo } from '../../styles/FormStyle';
import LogoImg from "../../assets/fatfattatslogo.png";
import emailjs from 'emailjs-com';





const Form = () => {
    const [state, setState] = useState(initalState);
    const [error, setError] = useState('');
  
// send email function 

function EmailForm() {
  const [status,setStatus]=useState('')

  const handleSendEmail=(e)=>{
    e.preventDefault();
    // set up the email service 

    const serviceID="put your service ID here";
    const templateID=" put the template ID here";
    const UserId="put your user ID here"

    // create and email object 

    const email={
      to:"put email here",
      from: "create a varible that grabs the value of the txtbox",
      subject:"Hello from ema",
      text: "THis is a test email"

    }

    emailjs.send(serviceID,templateID,email,userID)
    .then(response=>{
      setStatus("email sent successfully");
    })
    .catch(error=>{
      setStatus("error sending email try again")
    })

  }
}


   
    const handleSubmit = e => {
      e.preventDefault();
      console.log('submitted!');
      console.log(state);
  
      for (let key in state) {
        if (state[key] === '') {
          setError(`You must provide the ${key}`)
          return
        }
      }
      setError('');
      // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      // const test = regex.test(state.email);
      // console.log(test);
  
      console.log("Succeeded!!!")
      
    };
    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;
    
        setState(prev => ({ ...prev, [inputName]: value }));
      };
  return (
    <>
   
   
    <StyledFormWrapper>
   
    <ContactBox>
      <ContactBoxTitle> Contact</ContactBoxTitle>
     <ContactBoxText>If you are interested in my services or just want to say Hello
      feel free to contact me
     </ContactBoxText>
        </ContactBox>
        
      <StyledForm onSubmit={handleSubmit}>
   
      {/* <Logo src={LogoImg}></Logo> */}
        <ContactHeader>Contact</ContactHeader>
       <ContactMobileDesc>If you are interested in my services or just want to say Hello
      feel free to contact me</ContactMobileDesc>
        <label htmlFor="name">Name</label>
        <StyledInput
          type="text"
          name="name"
          value={state.name}
          onChange={handleInput}
        />
        <label htmlFor="email">Email</label>
        <StyledInput
          type="email"
          name="email"
          value={state.email}
          onChange={handleInput}
        />
        <label htmlfor="phone">Phone</label>
        <StyledInput
        type = "phone"
        name= "phone"
        value={state.phone}
        onChange={handleInput}>
          
         
        </StyledInput>
       <MessageWrapper>
        <label htmlFor="message">Message:</label>
        <StyledTextArea
          name="message"
          value={state.message}
          onChange={handleInput}
        />
        </MessageWrapper>
        {error && (
          <StyledError>
            <p>{error}</p>
          </StyledError>
        )}
        <StyledButton href="condeemilio891@gmail.com" type="submit">Send Message</StyledButton>
      </StyledForm>
    </StyledFormWrapper>
  </>
  )
}

export default Form