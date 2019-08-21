import React from "react";
import styled from 'styled-components'

const ButtonStyle = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.good ? "white" : "palevioletred"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

const Button = ({ onclick, text }) => {
  return (
    <div className="field is-grouped">
      <ButtonStyle
        onClick={onclick}
      >
        {text}
      </ButtonStyle>
    </div>
  );
};

export default Button;
