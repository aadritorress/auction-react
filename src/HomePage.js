
import './App.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'


class HomePage extends Component {


//active, setActice
//history


  render () {
    return (
      <div >
        <button> My Profile </button>
        {/* display user information */}
        {/* display items that belongs to logged user */}
        <br></br>
        <br></br>
        <button> Search Items </button>
        {/* display all items available */}
        <br></br>
        <br></br>
        <button> Offer Items </button>
        {/* redirect to Item form  */}
        <br></br>
        <br></br>
         <button onClick={this.props.handleLogOut}> Log Out </button>
         {this.props.loggedIn ? null : <Redirect to= "/login"/>}
    </div>
  );
  }
}


export default HomePage;
