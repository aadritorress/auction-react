import React, {Component} from 'react';


class Charity extends Component {
  
    handleHome = () =>{ 
  this.props.history.push("/HomePage");
  }
  render() {

    return (
    <div >
       <img src="https://i.ibb.co/gr47YrK/Screen-Shot-2021-05-22-at-12-03-53-PM.png" alt="calendar" width="200" height="200"></img>
      <p> Charity Page </p> 
       <button className="button" onClick={this.handleHome}> Home </button>
    </div>
    )
  }
}

export default Charity

