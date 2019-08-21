import React, { useState } from 'react'
import Inputs from '../Inputs'
import getToken from '../../controller/Login';
import { Link } from 'react-router-dom';
// import getUser from '../../controller/users/get-user-id';
// import auth from '../../controller/routes/auth';

const Form = ({ logprop }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("")

  return (
    <form 
    onSubmit={async e => {
      e.preventDefault()
      console.log(e, email, password);
      await getToken(email, password).then((res) => {
        localStorage.setItem('token', res.token)
        console.log(res.token)
      }).catch((err) => {
        setErr(err.message)
      });
    }}
     >

      <Inputs
        divInput="input-group form-group radius-50 white"
        type='email'
        value={email}
        label='Email'
        update={(e) => setEmail(e.target.value)}
        placeholder='Email'
        icon='fas fa-user'
        classValue='emailValue form-control border-none radius-50'
        visibility="input-group-append border-none radius-50" />
      <Inputs
        divInput="input-group form-group radius-50 white"
        type='password'
        value={password}
        label='Password'
        update={(e) => setPassword(e.target.value)}
        placeholder='Password'
        icon='fas fa-lock'
        classValue='passwordValue form-control border-none radius-50'
        visibility="input-group-append border-none radius-50"
      />
      

      <button type="submit" >Ingresar</button>
      
      {err && <p>*{err}</p>}
    </form>
  )
}

export default Form;