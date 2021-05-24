
import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { getUser } from '../actions/userAction'
// import { handleLogin } from '../actions/loginActions'


const mapStateToProps = (state) => {
  console.log(state.loginState.user)
  return { user: state.loginState.user};
};

const mapDispatchToProps = (dispatch) => {
  return {
   
  }
};

class Profile extends Component {
  handleHome = () =>{ 
  this.props.history.push("/HomePage");
  }

  componentDidMount() {
  
  }

  render() {
const user = this.props.user
// debugger 
// array with all users 
    return (
      <div >
      <button className="button" onClick={this.handleHome}> Home </button>
    <h2>Profile Page</h2>
    <h4>Name: {user.name}</h4>
    <h4>Email: {user.email}</h4>
    <h4>Username: {user.username}</h4>
    <button className="button"> Edit your Information </button>
    <p> Items you have offered </p>
    {user.items?.map((item, index) => (
    <div className="item-card" key={index}>
    <h4>{item.name}</h4>
    <img src={item.image} alt='' width="100" height="100" ></img>
    <br></br>
    <button className="sold-button"> Edit </button>
    <h6>Price: {item.price}</h6>
    <h6>Condition: {item.condition}</h6>
    <h6>City: {item.city}</h6>
    <h6>Item sold: {item.sold ? 'Yes' : "No"}</h6>
    <button className="sold-button"> {item.sold ? 'Available' : "Sold"} </button>
    <br></br>
    <br></br>
    </div>
    ))}
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);




// import './App.css';
// import React from 'react';



// export default function Profile () {


//     return (
//     <div >
//       <h1> Profile Page </h1>
//     </div>
//   );
//   }
