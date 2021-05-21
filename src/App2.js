// import './App.css';
// import React from 'react';
// import Items from './Items'
// import Login from './components/Login'
// import HomePage from './components/HomePage';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// // import Signup from './Signup';
// import ItemForm from './components/ItemForm'
// import { connect } from 'react-redux'
// import { dispatchAddItem, dispatchEditSold, dispatchSetItem } from './actions/itemActions'
// // import { createStore } from 'redux';


// class App extends React.Component {

//   state = {
//     items: [],
//     loggedIn: false,
//     user: '',
//   }

//   // componentDidMount () {
//   // }

// getItems = () => {
//   fetch('http://localhost:3000/api/v1/items', {
//   method: "GET",
//   headers: {
//      'Content-Type': 'application/json',
//      'Accept': 'application/json',
//      'Authorization': `Bearer ${localStorage.token}`
//     }
//   })
//   .then(resp => resp.json())
//   .then(items => 
//     // console.log(items)
//     this.props.dispatchSetItem(items)
//   )
// }

// handleLogin = (e) => {
//   e.preventDefault()
//   let user = {
//     name: e.target[0].value,
//     password: e.target[1].value
//   }

//  let postReq = {
//    method: "POST",
//    headers: {
//      'content-type': 'application/json',
//      'accept': 'application/json'
//    },
//    body: JSON.stringify(user)
//  }

// fetch('http://localhost:3000/api/v1/login', postReq)
// .then (resp => resp.json())
// .then(data => {
//   // localStorage.token = data.token 
//   localStorage.setItem("token", data.token)
//   this.getItems()
//   this.setState({
//     loggedIn: true, user: data.user
// })
// })
// }

// handleSignUp = (e) => {
//   e.preventDefault()

//   console.log('sign up button')

//   let createUser = {
//     name: e.target[0].value,
//     email: e.target[1].value,
//     username: e.target[2].value,
//     password: e.target[3].value
//   }
//   console.log('user:', createUser)

//  let postReq = {
//    method: "POST",
//    headers: {
//      'content-type': 'application/json',
//      'accept': 'application/json'
//    },
//    body: JSON.stringify({user: createUser})
//  }

// fetch('http://localhost:3000/api/v1/users', postReq)
// .then (resp => resp.json())
// .then(data => {
//   // localStorage.token = data.token 
// console.log(data)
// })
// }

//  handleLogOut = () => {
//    this.setState({ loggedIn: false })
//    localStorage.clear()
   
//   //clear my state 
//   //dispatch actions - redux 
// }

//   addItem = (e) => {
//     e.preventDefault()

//     let newItem = { 
//       name: e.target[0].value, 
//       picture: e.target[1].value,
//       initial_price: e.target[2].value,
//       condition: e.target[3].value,
//       city: e.target[4].value,
//       sold: false,
//       user_id: this.state.user.id
//     }
//     console.log(newItem)

//     fetch("http://localhost:3000/api/v1/items", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${localStorage.token}`
//       },
//       body: JSON.stringify(newItem)
//     })
//       .then(resp => resp.json())
//       .then(item => 
//         // console.log(item)
//         this.props.dispatchAddItem(item)
//       )
//     e.target.reset();
//   }

//   editSold = (item) => {
  
//   console.log('edit sold') 
//   //event?
//   fetch(`http://localhost:3000/api/v1/items/${item.id}`, {
//       method: "PATCH",
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${localStorage.token}`
//       },
//       body: JSON.stringify(item.id)
//     })
//       .then(resp => resp.json())
//       .then(item => 
//         console.log(item)
//         // this.props.dispatchEditSold(item)
//       )
//   this.props.dispatchEditSold(item)
//   }


// render () {

//   return (
//     <div>
//        <BrowserRouter>
//         <Switch>
//         <Route exact path="/login">
//         <Login loggedIn={this.state.loggedIn} handleLogin={this.handleLogin} handleSignUp={this.handleSignUp}/>
//         </Route>
//         <Route exact path="/HomePage">
//         <HomePage loggedIn={this.state.loggedIn} handleLogOut={this.handleLogOut}/>
//         <Items items={this.props.items} editSold={this.editSold} increaseBid={this.increaseBid}/>
//         <ItemForm addItem={this.addItem}/>
//         </Route>
//         <Redirect to='/login'/>
//         </Switch>
//         </BrowserRouter>
//       </div>
//     // <div >
//     //  <Login handleLogin={this.handleLogin}/>
//     //  {/* <Signup/> */}
//     //  <Items items={this.state.items}/>
//     //  <br></br>
//     //  <br></br>
//     // </div>
//   );
//   }
// }

// const mapStateToProps = (state) => {
//   const {items} = state
//   // console.log(state)
// return {items}
// // return {
// //   items: state.items}
// }


// const mapDispatchToProps = {
//   dispatchAddItem, 
//   dispatchEditSold, 
//   dispatchSetItem,
// }


// export default connect(mapStateToProps, mapDispatchToProps)(App);
