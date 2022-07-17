import React, {useState, useEffect, Component, useRef} from 'react';
// import { Link } from 'react-router-dom';

// import './LoginPage.css';
import logo from "./assets/logo.png";
;

export default function LoginPage (){

      //submit handler
  function handleSubmit(e) {
    e.preventDefault();
  }


  return(
    <>
    <div className='outer'>

        <div className='login-header'>
          <h2> Welcome to DBS </h2>
          <img src={logo} className='dbs-logo' width='400' height='100'></img>
        </div>

        <div className='login-cred'>
            <form className='log-form' onSubmit={handleSubmit}>
              <label>
                <p>Phone Number</p>
                <input type='text'/>
              </label>
              <label>
                <p>Password</p>
                <input type="password"/>
              </label>
              <div>
                <button className='log-btn'>Login</button>
              </div>
              <div className='go-links'>

              </div>

            </form>
          </div>
      </div>
    </>
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }