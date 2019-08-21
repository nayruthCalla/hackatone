import React from 'react';
import styled from 'styled-components'
import Lbel from '../../images/lbel_white.png'

export const  CatalogueSection = styled.div`
  padding: 20px 0;
  overflow: hidden;
  background: #722789;
  position: relative;
  border-bottom: 1px solid #000;
`;



export const CatalogueOp = () => {
  return (
    <>
       <CatalogueSection>
         <div>
           <img src={Lbel} alt=""/>
         </div>
       </CatalogueSection>
    </>
  )
};