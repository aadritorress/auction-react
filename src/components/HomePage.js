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
localStorage.clear()
props.history.push("/login");
}

const handleCharity = () =>{ 
props.history.push("/Charity");
}


  return (

    <div className='homepage'>
        {/* <img src="https://i.ibb.co/kMhP07G/Screen-Shot-2021-05-28-at-6-00-33-PM.png" alt="" width="1400" height="350"></img> */}
       <br></br>
       <div className='homePAGE'>
       {/* <h1>Homepage</h1> */}
       <br></br>
      <button className="button" onClick={handleCharity}> About us </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className="button" onClick={handleProfile}> My Profile </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className="button" onClick={handleItems}> Search Items </button>
     <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className="button" onClick={handleOffer}> Offer Item </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className="button" onClick={handleLogOut}> Log Out </button>
      <br></br>
      <br></br>
      </div>
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
