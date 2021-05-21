
import './App.css';
import React from 'react';
import Items from './Items'
import Login from './Login'
import HomePage from './HomePage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import Signup from './Signup';
import ItemForm from './ItemForm'
import { connect } from 'react-redux'
import { dispatchAddItem, dispatchEditSold, dispatchSetItem, dispatchIncreaseBid } from './actions/itemActions'


class App extends React.Component {

  state = {
    items: [],
    loggedIn: false,
    user: '',
  }

  // componentDidMount () {
  // }

getItems = () => {
  fetch('http://localhost:3000/api/v1/items', {
  method: "GET",
  headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Authorization': `Bearer ${localStorage.token}`
    }
  })
  .then(resp => resp.json())
  .then(items => 
    // console.log(items)
    this.props.dispatchSetItem(items)
  )
}


handleLogin = (e) => {
  e.preventDefault()
  let user = {
    name: e.target[0].value,
    password: e.target[1].value
  }

 let postReq = {
   method: "POST",
   headers: {
     'content-type': 'application/json',
     'accept': 'application/json'
   },
   body: JSON.stringify(user)
 }

fetch('http://localhost:3000/api/v1/login', postReq)
.then (resp => resp.json())
.then(data => {
  // localStorage.token = data.token 
  localStorage.setItem("token", data.token)
  this.getItems()
  this.setState({
    loggedIn: true, user: data.user
})
})
}


 handleLogOut = () => {
  localStorage.clear()
  this.setState({ loggedIn: false })
}



  addItem = (e) => {
    e.preventDefault()

    let newItem = { 
      name: e.target[0].value, 
      picture: e.target[1].value,
      initial_price: e.target[2].value,
      condition: e.target[3].value,
      city: e.target[4].value,
      sold: false,
      user_id: this.state.user.id
    }
    console.log(newItem)

    fetch("http://localhost:3000/api/v1/items", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(newItem)
    })
      .then(resp => resp.json())
      .then(item => 
        // console.log(item)
        this.props.dispatchAddItem(item)
      )
    e.target.reset();
  }


  editSold = (item) => {
  console.log('edit sold') 
  //event
  this.props.dispatchEditSold(item)
  }

  increaseBid = () => {
  console.log('increase bid') 
  //event
  // this.props.dispatchIncreaseBid(item)
  }


render () {

    return (
      <div>
       <BrowserRouter>
        <Switch>
        <Route exact path="/login">
        <Login loggedIn={this.state.loggedIn} handleLogin={this.handleLogin}/>
        </Route>
        <Route exact path="/HomePage">
        <HomePage loggedIn={this.state.loggedIn} handleLogOut={this.handleLogOut}/>
        <Items items={this.props.items} editSold={this.editSold} increaseBid={this.increaseBid}/>
        <ItemForm addItem={this.addItem}/>
        </Route>
        <Redirect to='/login'/>
        </Switch>
        </BrowserRouter>
      </div>
    // <div >
    //  <Login handleLogin={this.handleLogin}/>
    //  {/* <Signup/> */}
    //  <Items items={this.state.items}/>
    //  <br></br>
    //  <br></br>
    // </div>
  );
  }
}

const mapStateToProps = (state) => {
  const {items} = state
  // console.log(state)
return {items}
// return {
//   items: state.items}
}


const mapDispatchToProps = {
  dispatchAddItem, 
  dispatchEditSold, 
  dispatchSetItem,
  dispatchIncreaseBid
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
