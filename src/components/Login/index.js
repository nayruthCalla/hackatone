import React from 'react';
import Form from './Form';
import ImgLogin from './ImgLogin';
import img from '../../images/bq.jpg'


const Login = (props) => {

  return (
    <>
    <div className= 'container-login'>
    <main data-testid="login" className='container d-flex fill-available justify-content-center align-items-center'>
       
       <div className="col-lg-6 border-login">
         <header className=''>
           <h4 className='col-lg-6 justify-content-center align-items-center'>Bienvenidx</h4>
         </header>
         <section className="col-lg-12 opacyty-login opacyty-login-top opacyty-login-top">
         <div
         className="col-lg-12 py-3 d-flex align-items-center form-style flex-column ">
         <Form logprop={props} />
       </div>
           </section>       
       </div>
       <ImgLogin
         imgSrc={img}
         cssClass="col-lg-6 justify-content-center text-align img"
         imgClass="img-fluid"
       />
     </main>
    </div>
      
    </>
  )
}
export default Login