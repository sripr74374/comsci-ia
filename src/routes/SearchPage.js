import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'

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

const SearchPage = props => {
    return <div>
        Search Page

      <Link to={'/add'}><AddButton>+</AddButton></Link>
    </div>
}

export default SearchPage