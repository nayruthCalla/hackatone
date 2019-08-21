import React from 'react';
import styled from 'styled-components'
// import Lbel from '../../images/Ibel_white.png'
// import Esika from '../../images/esika_white.png'
//import Cyzone from '../../images/cyzone_white.png'

const  CatalogueSection = styled.div`
  padding: 10px 0;
  overflow: hidden;
  background: #333333;
  position: relative;
  border-bottom: 1px solid #000;
`;

const LogoCatalogue = styled.img`
  width : 75px;
  height: 27.11px;
`;

const LogoSection = styled.ul`
  list-style: none;
  padding-left: 35%;
`;

const ListItem = styled.li`
  display: inline-block;
  padding-left: 20px;
`; 


export const CatalogueOp = () => {
  return (
    <>
       <CatalogueSection>
         <LogoSection>
            <ListItem><LogoCatalogue src="https://d1mmiz9ub7pgyo.cloudfront.net/Lannding/LandingDigitalPeru/esika_logo_white.png" alt=""/></ListItem>
            <ListItem><LogoCatalogue src="https://d1mmiz9ub7pgyo.cloudfront.net/Lannding/LandingDigitalPeru/lbel_logo_white.png" alt=""/></ListItem>
            <ListItem><LogoCatalogue src="https://d1mmiz9ub7pgyo.cloudfront.net/Lannding/LandingDigitalPeru/cyzone_logo_white.png" alt=""/></ListItem>
         </LogoSection>
       </CatalogueSection>
    </>
  )
};