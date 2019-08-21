import React, { forwardRef } from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';
import NavBar from './Navbar'



const PreNavBar = styled.div`
  position: relative;
  height: 50px;
`;

const ButtonAct = ({onClick,text}) => {
  return (
    <>
      <Button onClick={onClick}>{text}</Button>
    </>
  )
};

const Button = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.good ? "white" : "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

export const SomosBelcorp = () => {
  return (
    <>
      <PreNavBar/>
      <NavBar logoText="Belcorp"/>
      <h1>SOMOS BELCORP</h1>
      <Link to="/login">
        <ButtonAct text="INGRESA"/>
      </Link>
    </>
  )
};

