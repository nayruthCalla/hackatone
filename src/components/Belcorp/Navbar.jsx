import React from 'react';
import styled from 'styled-components';
// import Logo from '../../images/belcorp.png'

const NavbarSection = styled.div`
  padding: 20px 0;
  overflow: hidden;
  background: #722789;
  position: relative;
  border-bottom: 1px solid #000;
`;

const Logo = styled.div`
  width: 50%;
  float: left;
`;

const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const Ullist = styled.ul`
  width: 50%;
  float: left;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline-block;
`; 

const Anchor = styled.a` 
  display: block;
  color: whitesmoke;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;

  &:hover {
    color: pink;
  }
`;

export const NavBar = ({logoText}) => {
  return (
     <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>{logoText}</LogoText>
        </Logo>
        <Ullist>
          <ListItem><Anchor>Inicio</Anchor></ListItem>
          <ListItem><Anchor>Beneficios</Anchor></ListItem>
        </Ullist>
      </div>  
    </NavbarSection> 
  ) 
}

export default NavBar;