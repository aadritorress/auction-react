
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/userAction'



const mapStateToProps = (state) => {
  return { user: state.user};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    // getUser: (user) => dispatch(getUser(user)),
  }
};

class Profile extends Component {
  handleHome = () =>{ 
  this.props.history.push("/HomePage");
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
// const user = this.props.user
// array with all users 
    return (
    <div>
    <p>Profile Page</p>
    <button className="button" onClick={this.handleHome}> Home </button>
    {/* <h3>{user.name}</h3> */}
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
