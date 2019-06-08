import React from 'react'
import { Link } from 'react-router-dom'
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

const HomePage = props => {
    return (
        <div>
            <form>
                <label>
                    Search patients
                  <input></input>
                </label>
                <button>Search Patient</button>
            </form>
            <Link to={'/add'}><AddButton>+</AddButton></Link>

        </div>
    )
}

export default HomePage