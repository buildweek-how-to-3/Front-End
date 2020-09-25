import React from "react";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import {useLocalStorage} from '../utils/useLocalStorage'
const Register = () => {
  const history =useHistory();
  const [credentials, setCredentials] =useState({
    username: "",
    password: "",
  })



  const handleChange = e => {
    setCredentials({
      ...credentials,

        [e.target.name]: e.target.value,

     
    })
    console.log(credentials)
  }

  const register = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://backend-how-to.herokuapp.com/api/auth/register", credentials)
      .then(res => {
        console.log(res)
        history.push("/login");
      })
      .catch(err => console.log(err))
    };


    return (
      <div>
        <h1>Register Page</h1>
        <form onSubmit={register}>
        <input
        autoComplete="off"
        id="username"
        type="text"
        name='username'
        value={credentials.username}
        onChange={handleChange}
        
        />
        <input 
        id="password"
         autoComplete="off"
        type='password'
        name="password"
        value={credentials.password}
        onChange={handleChange}
 
        />
        <button>Login</button>
        
        </form>
      </div>
    );
  }
  

  export default Register;