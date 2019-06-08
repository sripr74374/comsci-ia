import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as firebase from 'firebase'

const AddButton = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    font-size: 40px;
    :hover {
        cursor: pointer;
        background: #339933;
    }
    position: fixed;
    bottom: 40px;
    right: 40px;
`

const HomePage = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <form>
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
        <button onClick={e => {
          firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
        }}>Login</button>
      </form>
      <Link to={'/add'}><AddButton>+</AddButton></Link>

    </div>
  )
}

export default HomePage