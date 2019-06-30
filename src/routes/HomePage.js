import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import * as firebase from 'firebase'
import { useAuthContext } from '../auth';



const HomePage = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <form onSubmit={e => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage)
          // ...
        });
        e.preventDefault()
      }}>
        <label>
          Email
            <input value={email} onChange={e => {
            setEmail(e.target.value)
          }}></input>
        </label>
        <label>
          Password
          <input type={'password'} value={password} onChange={e => {
            setPassword(e.target.value)
          }}></input>
        </label>
        <button type='submit'>Login</button>
      </form>

    </div>
  )
}

export default HomePage