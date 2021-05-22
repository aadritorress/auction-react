

import React from 'react'

const Profile = (props) => {

 const handleHome = () =>{ 
  props.history.push("/HomePage");
  }

  return (
    <div>
      <p>Profile Page</p>
      <button className="button" onClick={handleHome}> Home </button>
    </div>
  )
}

export default Profile



// import './App.css';
// import React from 'react';



// export default function Profile () {


//     return (
//     <div >
//       <h1> Profile Page </h1>
//     </div>
//   );
//   }
