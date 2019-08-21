import React from 'react';
import styled from 'styled-components'


const ListItem = styled.li`
  display: inline-block;
  padding-left: 20px;
`; 

const MenuOptions = ({click, options, aClass}) => {
  return (
    <ListItem  className="nav-item" onClick={click}>
      <a className={aClass} data-toggle="tab" href="#" role="tab" >
      <img src={options} alt="img" className="img-fluid max-50" />
      </a>
    </ListItem>
  )
};

export default MenuOptions;