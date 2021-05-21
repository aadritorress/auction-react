import React from 'react'
import { Redirect } from 'react-router-dom'

const LogIn = props => {


    return (
        <div>
             <h1>Auction App</h1>
             <h5><strong>Sign in</strong>  </h5>
        <form onSubmit={props.handleLogin} >
            <label>username:</label>
            <input type='text'/>
            <br></br>
            <label>password:</label>
            <input type='password'/>
            <br></br>
            <input type='submit' />
        { props.loggedIn ? <Redirect to= "/HomePage"/> : null }
        </form>
        <br>
        </br>
        <h5> <strong>Sign up</strong> </h5>
           <form onSubmit={props.handleSignUp} >
            <label>name:</label>
            <input type='text'/>
            <br></br>
            <label>email:</label>
            <input type='text'/>
            <br></br>
            <label>username:</label>
            <input type='text'/>
            <br></br>
            <label>password:</label>
            <input type='password'/>
            <br></br>
            <input type='submit' />
        { props.loggedIn ? <Redirect to= "/HomePage"/> : null }
        </form>
        {/* <button>Sign up</button> */}
        </div>
    )
}

export default LogIn