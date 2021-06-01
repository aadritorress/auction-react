
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteUser, editUser } from '../actions/userAction'
import { editItem, deleteItem } from '../actions/itemActions'
import { getBids } from '../actions/bidActions' 



const mapStateToProps = (state) => {
  return { 
    user: state.loginState.user, 
    bids: state.bids.bids,
    item: state.items.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: user => dispatch(deleteUser(user)),
    editUser: user => dispatch(editUser(user)),
    editItem: item => dispatch(editItem(item)),
    getBids: () => dispatch(getBids()),
    deleteItem: item => dispatch(deleteItem(item))
  }
};


class Profile extends Component {
  state = {
    showForm: false,
    user: this.props.user
  }

  handleHome = () =>{ 
    this.props.history.push("/HomePage");
  }

  handleEdit = (e) => {
  e.preventDefault();
    console.log('clicked')
    this.props.editUser(this.props.user);
    this.setState({showForm: false})
  }

  changeUser = (e) => {
    e.preventDefault();
    const currentUser = this.props.user;
    const property = e.target.name;
    const value = e.target.value;
    currentUser[property] = value;
    this.setState({user: currentUser});
  }

  handleSold = (item) => {
  this.props.editItem(item);
  }

  deleteItem = (item) => {
    console.log('clicked') 
    this.props.deleteItem(item);
  }

  handleDelete = () => {
    console.log('clicked')
  this.props.deleteUser(this.props.user);
  this.props.history.push("/bye");
  }

  componentDidMount() {
   this.props.getBids();
  }

  showProfileForm = () => {
    this.setState({showForm: true});
  }

  render() {
const user = this.props.user
// console.log('user:', user)
const showForm = this.state.showForm;
// debugger 
// array with all users 
    return (
      <div className="profile">
      <div className='container'>
      <div className="profile-card">
       <h1 className="profile-font">Profile Page</h1>
        {/* <img src="https://i.ibb.co/kMhP07G/Screen-Shot-2021-05-28-at-6-00-33-PM.png" alt="" width="1400" height="350"></img> */}
       <br></br>
         <br></br>
      <button className="button" onClick={this.handleHome}> Home </button>
    <h4 className="profile-font">Name: {user.name}</h4>
    <h4 className="profile-font">Email: {user.email}</h4>
    <h4  className="profile-font">Username: {user.username}</h4>
    <button className="profile-button" onClick={() => this.showProfileForm()}> Edit Account </button>

      {showForm ? 
      <form onSubmit={this.handleEdit}>
        <input type="text" name="name" value={user.name} onChange={this.changeUser}/>
         <br></br>
         <input type="text" name="email" value={user.email} onChange={this.changeUser}/>
          <br></br>
          <input type="text" name="username" value={user.username} onChange={this.changeUser}/>
          <br></br>
           <input type="password" name="password" placeholder='change your password' onChange={this.changeUser}/>
        <br></br>
        <button className="item-button" onClick={this.handleEdit}>Save</button>
      </form> : ''}
<br></br>
<br></br>
<button className="profile-button" onClick={this.handleDelete}> Delete Account </button>
    </div>


    <div className="profile-card">
    <h1> Your Donations </h1>
    {user.items?.map((item, index) => (
    <div className="item-card" key={index}>
    <h4>{item.name}</h4>
    <img src={item.image} alt='' width="100" height="100" ></img>
    <h6>Initial Price: {item.price}</h6>
    {item.bids ?  
     <h5>Final Price: ${Math.max(...item.bids.map(bid => bid.amount))}</h5> : ''}
    <h6>Condition: {item.condition}</h6>
    <h6>City: {item.city}</h6>
    <h6>Item sold: {item.sold ? 'Yes' : "No"}</h6>
    <button onClick={() => this.handleSold(item)} className="item-button"> {item.sold ? 'Available' : "Sold"} </button>
    <button onClick={() => this.deleteItem(item)} className="item-button"> Delete </button>
    <br></br>
    <br></br>
    </div>
    ))}
    </div>
    </div>
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

