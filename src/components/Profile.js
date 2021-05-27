
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteUser, editUser } from '../actions/userAction'
import { editItem, deleteItem } from '../actions/itemActions'



const mapStateToProps = (state) => {
  return { 
    user: state.loginState.user, 
    item: state.items.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: user => dispatch(deleteUser(user)),
    editUser: user => dispatch(editUser(user)),
    editItem: item => dispatch(editItem(item)),
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
      <div >
         <img src="https://i.ibb.co/gr47YrK/Screen-Shot-2021-05-22-at-12-03-53-PM.png" alt="calendar" width="200" height="200"></img>
         <br></br>
      <button className="button" onClick={this.handleHome}> Home </button>
    <h2>Profile Page</h2>
    <h4>Name: {user.name}</h4>
    <h4>Email: {user.email}</h4>
    <h4>Username: {user.username}</h4>
    <button className="button" onClick={() => this.showProfileForm()}> Edit Account </button>

      {showForm ? 
      <form onSubmit={this.handleEdit}>
        <input type="text" name="name" value={user.name} onChange={this.changeUser}/>
         <br></br>
         <input type="text" name="email" value={user.email} onChange={this.changeUser}/>
          <br></br>
          <input type="text" name="username" value={user.username} onChange={this.changeUser}/>
        <br></br>
        <button className="item-button" onClick={this.handleEdit}>Save</button>
      </form> : ''}



    <p> Your Donations </p>
    {user.items?.map((item, index) => (
    <div className="item-card" key={index}>
    <h4>{item.name}</h4>
    <img src={item.image} alt='' width="100" height="100" ></img>
    <h6>Price: {item.price}</h6>
    <h6>Condition: {item.condition}</h6>
    <h6>City: {item.city}</h6>
    <h6>Item sold: {item.sold ? 'Yes' : "No"}</h6>
    <button onClick={() => this.handleSold(item)} className="item-button"> {item.sold ? 'Available' : "Sold"} </button>
    <button onClick={() => this.deleteItem(item)} className="item-button"> Delete </button>
    <br></br>
    <br></br>
    </div>
    ))}
     <button className="button" onClick={this.handleDelete}> Delete Account </button>
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

