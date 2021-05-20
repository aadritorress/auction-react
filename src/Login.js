import React from 'react'
import { Redirect } from 'react-router-dom'

const LogIn = props => {


    return (
        <form onSubmit={props.handleLogin} >
            <label>username</label>
            <input type='text'/>
            <br></br>
            <label>password</label>
            <input type='password'/>
            <br></br>
            <input type='submit' />
        { props.loggedIn ? <Redirect to= "/HomePage"/> : null }
        </form>
    )
}

export default LogIn