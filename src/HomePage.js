
import './App.css';
import React from 'react';
import { Redirect, useHistory } from 'react-router-dom'



// class HomePage extends Component {

function HomePage(props) {
//active, setActice
//history

const history = useHistory();

 const handleRoute = () =>{ 
    history.push("/Items");
  }


  // render () {
    return (
      <div >
        <h1> My App </h1>
        <button> My Profile </button>
        {/* display user information */}
        {/* display items that belongs to logged user */}
        <br></br>
        <br></br>
        <button onClick={handleRoute}> Search Items </button>
        {/* display all items available */}
        <br></br>
        <br></br>
        <button> Offer Items </button>
        {/* redirect to Item form  */}
        <br></br>
        <br></br>
        <button onClick={props.handleLogOut}> Log Out </button>
        {props.loggedIn ? null : <Redirect to= "/login"/>}
    </div>
  );
  }
// }


export default HomePage;
