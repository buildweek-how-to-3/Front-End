import React from "react";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom'
import {useState} from 'react'

const Login = () => {
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

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://backend-how-to.herokuapp.com/api/auth/login", credentials)
      .then(res => {
        console.log(res)
        // res.data.payload ==> localStorage
        // navigate user to the "protected" route
        localStorage.setItem('token', res.data.token);
        history.push("/dashboard");
      })
      .catch(err => console.log(err))
    };


    return (

      <div>
                <h1>Login Page</h1>

        <form onSubmit={login}>
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
  

  export default Login;