
import React from 'react'
// import {Redirect} from 'react-router-dom'
import {handleLogin} from '../actions/loginActions' 
import {useDispatch} from 'react-redux'


const Login = (props) => {
    const dispatch = useDispatch()
    
    const handleSignUp = () =>{ 
        props.history.push("/Signup");
    }

    return (
      <div>
       <img src="https://i.ibb.co/9wcjgLt/Screen-Shot-2021-05-28-at-1-06-46-PM.png" alt="image" width="1400" height="300"></img>
       <br></br>
       <h1>Online Auction</h1>
       <h3>Helping Nonprofits Raise Money</h3>
        <button className="signup-button" onClick={handleSignUp}> Sign Up</button>
        <h3><strong>Sign in</strong></h3>
       <form onSubmit={(e) =>
        {   e.preventDefault()
            handleLogin(e, dispatch, props.history)}} >
           {/* <label>username:</label> */}
           <input type='text' placeholder='username'/>
           <br></br>
           {/* <label>password:</label> */}
           <input type='password' placeholder='password'/>
           <br></br>
           <br></br>
           <input className= "button" type='submit' value="Sign In" />
       {/* { props.loggedIn ? <Redirect to= "/HomePage"/> : null } */}
       </form>
        <br></br>
       </div>
    )
}

export default Login


// import React from 'react'
// import { Redirect } from 'react-router-dom'

// const LogIn = props => {


//     return (
//         <div>
//              <h1>Auction App</h1>
//              <h5><strong>Sign in</strong>  </h5>
//         <form onSubmit={props.handleLogin} >
//             <label>username:</label>
//             <input type='text'/>
//             <br></br>
//             <label>password:</label>
//             <input type='password'/>
//             <br></br>
//             <input type='submit' />
//         { props.loggedIn ? <Redirect to= "/HomePage"/> : null }
//         </form>
//         <br>
//         </br>
//         <h5> <strong>Sign up</strong> </h5>
//            <form onSubmit={props.handleSignUp} >
//             <label>name:</label>
//             <input type='text'/>
//             <br></br>
//             <label>email:</label>
//             <input type='text'/>
//             <br></br>
//             <label>username:</label>
//             <input type='text'/>
//             <br></br>
//             <label>password:</label>
//             <input type='password'/>
//             <br></br>
//             <input type='submit' />
//         { props.loggedIn ? <Redirect to= "/HomePage"/> : null }
//         </form>
//         {/* <button>Sign up</button> */}
//         </div>
//     )
// }

// export default LogIn