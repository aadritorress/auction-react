import React, {Component} from 'react';
import { getCharities } from '../actions/charityActions' 
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  // debugger
    return { 
   charities: state.charities.charities
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCharities: () => dispatch(getCharities()),
    }
};

class Charity extends Component {
  
  handleHome = () =>{ 
  this.props.history.push("/HomePage");
  }


 componentDidMount() {
        this.props.getCharities();
    }


  render() {
   const charities = this.props.charities 
   console.log(charities)


    return (
    <div >
       <img src="https://i.ibb.co/gr47YrK/Screen-Shot-2021-05-22-at-12-03-53-PM.png" alt="logo" width="200" height="200"></img>
       <br></br>
            <button className="button" onClick={this.handleHome}> Home </button>
            <h2> Currently helping:</h2>
            <br></br>
      {charities.map((charity, index) => 
      <div key={index} className="charity-card">
        <h3>{charity.name}</h3>
        {/* maybe a logo?? */}
        <h5>{charity.address}</h5>
        <h5>{charity.bio}</h5>
        <h4>${charity.donations} raised</h4>
      </div>)}
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Charity);

