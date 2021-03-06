import React, {useState} from 'react'
// import { Redirect } from 'react-router'
import {signUp} from '../actions/userAction'
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch) => 
{
    return {
        signUp: (user) => dispatch(signUp(user))
    };
};


const Signup = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const handleLogin = () => {
    //     props.history.push("/login");
    // }
   
     const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name, email, username, password
        };
        props.signUp(user);
        props.history.push(("/login")) 
    }

    return (
    <div className='item-form'>
      
       <br></br>
       <div className='item-formPAGE'>
           <br></br>
           <br></br>
        <br></br>
    {/* <h3 >Sign Up!</h3> */}
        <h3> Online giving is the fastest-growing method that donors give. Join our community!</h3>
    <form className = "form-card" onSubmit={handleSubmit}>
        <h2> Create an Account </h2>
             <input required type="text" value={name} onChange={e => setName(e.target.value)} name="name" placeholder="name"></input>
             <br></br>
              <input required type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder="email" name='email'/>
              <br></br>
             <input required type="text" value={username} name="username" onChange={e => setUsername(e.target.value)}  placeholder="username" ></input>
             <br></br>
             <input required type="password" value={password} name="password" onChange={e => setPassword(e.target.value)} placeholder="password" ></input>
             <br></br>
             <br></br>
             <button className="button" type="submit"> Register </button>
             <br></br>
             <br></br>
             </form>
             </div>
   
    </div>
    )
}

export default connect(null, mapDispatchToProps)(Signup)


