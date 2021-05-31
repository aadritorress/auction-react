import React, {Component} from 'react';
import { getCharities, editDonation } from '../actions/charityActions' 
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
        editDonation: charity => dispatch(editDonation(charity)),
    }
};

class Charity extends Component {

  state = { 
   donationsInput: false, 
  }
  
  handleHome = () =>{ 
  this.props.history.push("/HomePage");
  }


 componentDidMount() {
        this.props.getCharities();
    }


  handleSubmit = (e, charity) => {
    e.preventDefault();      
    let donation = { donation: e.target[0].value }
    console.log('donation:', donation.donation)
    console.log('charity:', charity.donations)
    // console.log('user:', this.props.user)
    let charityDonation = parseInt(charity.donations)
    let userDonation = parseInt(donation.donation)
    let totalDonations = charityDonation + userDonation
    console.log('total donation:', totalDonations)
    this.props.editDonation(charity); 
    }

  donationsInput = () => {
    this.setState({ donationsInput: !this.state.donationsInput });
  }

  render() {

   const charities = this.props.charities 
    return (
    <div >
       <br></br>
       <h1>About us</h1>
       <br></br>
            <button className="button" onClick={this.handleHome}> Home </button>
            <br></br>
            <br></br>
            <h3>OA is a place to fundraise, whether you are an individual, group, or organization. <br></br>
            Donors can securely donate furniture, classes, workshops and more to help the causes they are most passionate about.<br></br>
            </h3>
            <br></br>
            <h2> Currently helping:</h2>
            <br></br>
            <div className="container">
      {charities.map((charity, index) => 
      <div key={index} className="charity-card">
        <img src={charity.image} alt='' width="220" height="150" ></img>
        <h3>{charity.name}</h3>
        <h5>{charity.address}</h5>
        <h5>{charity.bio}</h5>
        <h4>${charity.donations} raised</h4>
        <button className="donate" onClick={this.donationsInput}> Make a donation </button>
        { this.state.donationsInput ? 
        <form onSubmit={(e) => this.handleSubmit(e, charity)} >               
        <input type="number"name="amount"placeholder="amount"></input>
        <br></br>
        <button type="submit" className="donation-button"> Donate </button>
        </form> : ''}
      </div>)}
    </div>
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Charity);

