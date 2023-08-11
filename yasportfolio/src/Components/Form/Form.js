import React, {useState} from 'react'
import {StyledFormWrapper,StyledForm,StyledInput,StyledButton,StyledFieldset,StyledTextArea,StyledError,initalState} from "../../styles/FormStyle"

const Form = () => {
    const [state, setState] = useState(initalState);
    const [error, setError] = useState('');
  
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
      <StyledForm onSubmit={handleSubmit}>
        <h2>Contact Form</h2>
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
        <StyledFieldset>
          <legend>Gender</legend>
          <label>
            <input
              type="radio"
              value="female"
              name="gender"
              checked={state.gender === 'female'}
              onChange={handleInput}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              value="male"
              name="gender"
              checked={state.gender === 'male'}
              onChange={handleInput}
            />
            Male
          </label>
        </StyledFieldset>
        <label htmlFor="message">Message</label>
        <StyledTextArea
          name="message"
          value={state.message}
          onChange={handleInput}
        />
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