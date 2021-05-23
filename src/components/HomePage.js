import React from 'react'



const HomePage = (props) => {
 
 
const handleItems = () =>{ 
props.history.push("/Items");
}
 
const handleProfile = () =>{ 
props.history.push("/Profile");
}
 
const handleOffer = () =>{ 
props.history.push("/ItemForm");
}

const handleLogOut = () => {
props.history.push("/login");
}


  return (
    <div>
       <img src="https://i.ibb.co/gr47YrK/Screen-Shot-2021-05-22-at-12-03-53-PM.png" alt="calendar" width="200" height="200"></img>
      <p> Home Page </p>
      <button className="button" onClick={handleProfile}> My Profile </button>
      <br></br>
      <br></br>
      <button className="button" onClick={handleItems}> Search Items </button>
      <br></br>
      <br></br>
      <button className="button" onClick={handleOffer}> Offer Item </button>
      <br></br>
      <br></br>
      <button className="button" onClick={handleLogOut}> Log Out </button>
     </div>
      );
    }
    
    export default HomePage
    
    
    
    


// import './App.css';
// import React from 'react';
// import { Redirect, useHistory } from 'react-router-dom'



// // class HomePage extends Component {

// function HomePage(props) {
// //active, setActice
// //history

// const history = useHistory();

// const handleItems = () =>{ 
// history.push("/Item");
// }

// const handleProfile = () =>{ 
// history.push("/Profile");
// }

// const handleOffer = () =>{ 
// history.push("/ItemForm");
// }


//   // render () {
//     return (
//       <div >
//         <h1> Auction App </h1>
//         <button onClick={handleProfile}> My Profile </button>
//         {/* display user information */}
//         {/* display items that belongs to logged user */}
//         <br></br>
//         <br></br>
//         <button onClick={handleItems}> Search Items </button>
//         {/* display all items available */}
//        <br></br>
//        <br></br>
//         <button onClick={handleOffer}> Offer Items </button>
//         {/* redirect to Item form  */}
//      <br></br>
//      <br></br>
//         <button onClick={props.handleLogOut}> Log Out </button>
//         {props.loggedIn ? null : <Redirect to= "/login"/>}
//     </div>
//   );
//   }
// // }


// export default HomePage;
