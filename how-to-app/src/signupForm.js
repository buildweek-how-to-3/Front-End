import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function signupForm(props) {
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
<div className = 'title'>
       <h1>How to sign up:</h1>
       <p><span className='bold'>1.</span> Create your credentials</p>
       </div>
        <div className = 'row'>
            <p>Username</p>
          <input
            value={values.username}
            onChange={onChange}
            name='username'
            placeholder="Username"
            type='text'
          />
          <p className = 'errors'>{errors.username}</p>
        </div>
        
      

      <div className = 'row'>
          <p>Password</p>
          <input
            value={values.password}
            onChange={onChange}
            placeholder="Min. 6 characters"
            name='password'
            type='password'
          />  
           <p className = 'errors'>{errors.password}</p>
            </div>
        <div className='row right'>
        <Link to={`/login`}>Already have an account?</Link>
       </div>
       <div className = 'row'>
       <button id = "submit" disabled={disabled}>Sign up</button>
        </div>
      

    </form>
    
  )
}
