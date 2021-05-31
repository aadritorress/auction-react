import React from 'react'


const Forgot = (props) => {

     const handleSend = () => {
        alert("Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder or click here to request a new link")
    }

      const handleCancel = () => {
        props.history.push("/login")
    }

    return (
    <div className='password-form'>
      
       <br></br>
       <div className='item-formPAGE'>
           <br></br>
           <br></br>
        <br></br>
        <h3> Forgot your Password? </h3>
    <form className = "form-card">
        <h2> Enter the email address associated with your account, and we’ll send you a link to reset your password.</h2>
              <input required type='text' placeholder="email" name='email'/>
              <br></br>
             <button onClick={handleSend} className="forgotPass" type="submit"> Send </button>
             <button onClick={handleCancel} className="forgotPass" type="submit"> Cancel </button>
             <br></br>
             <br></br>
             </form>
             </div>
    </div>
    )
}

export default Forgot


