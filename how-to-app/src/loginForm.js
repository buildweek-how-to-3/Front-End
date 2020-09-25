import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
export default function loginForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }

  return (


    <form className='form' onSubmit={onSubmit}>
      <div className='title'>
        <h1>How to sign in:</h1>
        <p><span className='bold'>1.</span> Enter your credentials</p>
      </div>
      <div className='row'>
        <p>Username</p>
        <input
          value={values.username}
          onChange={onChange}
          name='username'
          placeholder="Enter Username"
          type='text'
        />
        <p className='errors'>{errors.username}</p>
      </div>



      <div className='row'>
        <p>Password</p>
        <input
          value={values.password}
          onChange={onChange}
          placeholder="Your Password"
          name='password'
          type='password'
        />
        <p className='errors'>{errors.password}</p>
      </div>
      <div className='row right'>
        <Link to={`/signup`}>Need a new account?</Link>
      </div>
      <div className='row'>
        <button id="submit" disabled={disabled}>Login</button>
      </div>


    </form>


  )
}

