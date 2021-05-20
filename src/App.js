
import './App.css';
import React, { Component } from 'react';
import Items from './Items'
import Login from './Login'
import HomePage from './HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './Signup';

class App extends Component {

  state = {
    items: [],
    loggedIn: false,
    user: []
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
  .then(items => this.setState ({items:[...this.state.items, ...items]}))
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

render () {

    return (
    //   <div>
    // <h1>My App</h1>
    //    <BrowserRouter>
    //     <Switch>
    //     <Route exact path="/login">
    //     <Login loggedIn={this.state.loggedIn} handleLogin={this.handleLogin}/>
    //     </Route>
    //     <Route exact path="/HomePage">
    //     <HomePage loggedIn={this.state.loggedIn} handleLogOut={this.handleLogOut}/>
    //     </Route>
    //     </Switch>
    //     </BrowserRouter>
    //   </div>
    <div >
    <h1>My App</h1>
     <Login handleLogin={this.handleLogin}/>
     {/* <Signup/> */}
     <Items items={this.state.items}/>
     <br></br>
     <br></br>
    </div>
  );
  }
}


export default App;
