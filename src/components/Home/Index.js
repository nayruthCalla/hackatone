import React from 'react';
import { Login } from '../Login/Index';

export const Home = () => {

  const token = localStorage.getItem('token');
  console.log(token)
  if(token){
    return (
      <>
      <h1>HOME</h1>
      <button>CATALOGO</button>
      <button>ORDENES</button>
      </>
    )
  }
  return(
   <Login/>
  )
};

