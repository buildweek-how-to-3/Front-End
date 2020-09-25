import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import schema from './validation/formSchema'
import LoginForm from './loginForm'
import SignupForm from './signupForm'
import './Login.css'
import { Route, Link, Switch } from 'react-router-dom'

const initialFormValues = {
    username: '',
    password: '',
  }
  const initialFormErrors = {
    username: '',
    password: '',
  }
  const initialDisabled = true
export default function Form() {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled) 
    
    
    const attemptLogin = loginDetails => {
        // Login function
        console.log('Signin:' , loginDetails)
        // {username: __, password: __}
        setFormValues(initialFormValues)
    }
    const attemptSignup = loginDetails => {
      // Signup function
      console.log('Signup:' , loginDetails)

      // {username: __, password: __}
      setFormValues(initialFormValues)
  }
    const validate = (name, value) => {
        yup
          .reach(schema, name)
          .validate(value)
          .then(valid => {
            setFormErrors({
              ...formErrors,
              [name]: ""
            })
          })
          .catch(err => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0]
            });
          });
      }
      const inputChange = (name, value) => {
        validate(name, value)
        setFormValues({
          ...formValues,
          [name]: value 
        })
      }
      
  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  
   const loginSubmit = () => {
        const loginDetails = {
            username: formValues.username.trim(),
            password: formValues.password.trim(),
          }
          attemptLogin(loginDetails)
      }
    const signupSubmit = () => {
        const loginDetails = {
            username: formValues.username.trim(),
            password: formValues.password.trim(),
          }
          attemptSignup(loginDetails)
    }

  return (
   
    <div>
     <div className = "mainSection">
       

      
      
         <Switch>
        {/* With Switch, order your Routes from "more specific path" to least */}
        {/* With Switch, the first Route "wins" */}
        {/* Without Switch, ALL Routes with paths that match are rendered */}
        <Route exact path='/signup'>
        
        <SignupForm
        values={formValues}
        change={inputChange}
        submit={loginSubmit}
        disabled={disabled}
        errors={formErrors}
      />
        </Route>

        <Route exact path='/login'>
          
        <LoginForm
        values={formValues}
        change={inputChange}
        submit={loginSubmit}
        disabled={disabled}
        errors={formErrors}
      />
        </Route>

        <Route exact path='/'>
        
        </Route>

        {/* <Route component={Home} path='/' /> */}
        {/* <Route render={props => <Home />} path='/' /> */}
      </Switch>
    </div>
    </div>
  )
}