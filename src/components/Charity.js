import React, {Component} from 'react';


class Charity extends Component {
  
    handleHome = () =>{ 
  this.props.history.push("/HomePage");
  }
  render() {

    return (
    <div >
       <img src="https://i.ibb.co/gr47YrK/Screen-Shot-2021-05-22-at-12-03-53-PM.png" alt="logo" width="200" height="200"></img>
      <p> Charity Page </p> 
       <button className="button" onClick={this.handleHome}> Home </button>
       <h3>Currently helping:</h3>
       <br></br>
      <h3>Changing the Way the World Supports Refugees</h3>
      <h4>Austin, TX</h4> 
      <h4> Bio: The refugee crisis is global, but most of it is invisible. Over 60% of the global refugee population resides in cities, underserved by an international system that has relied on camps to access those in need. The result: over 12 million urban refugees struggle to survive, facing precarious living conditions, discrimination, and a lack of access to basic services like healthcare, education, and livelihoods. As the refugee crisis continues to grow, so does the need for sustainable solutions.</h4>
      {/* <img src="https://www.commondreams.org/sites/default/files/styles/cd_large/public/headlines/resolution-refugees-welcome-50.jpg?itok=R2rhT0nj" alt="calendar" width="400" height="200"></img> */}
      <h4> $'amount goes here' raised</h4>
      <img src="https://www.wamc.org/sites/wamc/files/styles/medium/public/201501/refugees-welcome-ctsy-open-clip-art-publicdomain.png" alt="logo" width="100" height="100"></img>
    </div>
    )
  }
}

export default Charity

