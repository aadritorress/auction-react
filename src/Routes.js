import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect  } from 'react-router-dom'
import Login from './components/Login'
// import Signup from './components/Signup'
import HomePage from './components/HomePage'
import Items from './components/Items'
import Profile from './components/Profile'
import ItemForm from './components/ItemForm'
import Signup from './components/Signup'
import Charity from './components/Charity'
import Bye from './components/Bye'


const Routes = (props) => {
    return (
        <div>
            <Router >
            {!localStorage.token && <Redirect to="/login"/>}
                <Switch>
                    <Route path="/login" exact component = {props => <Login {...props}/>}/>
                    {/* <Route path="/Signup" exact component = {props => <Signup {...props}/>}/> */}
                    <Route path="/Signup" exact component = {props => <Signup {...props}/>}/>
                    <Route path="/HomePage" exact component = {props => <HomePage {...props}/>}/>
                    <Route path="/Items" exact component = {props => <Items {...props}/>}/>
                    <Route path="/Profile" exact component = {props => <Profile {...props}/>}/>
                    <Route path="/ItemForm" exact component = {props => <ItemForm {...props}/>}/>
                    <Route path="/Charity" exact component = {props => <Charity {...props}/>}/>
                     <Route path="/Bye" exact component = {props => <Bye {...props}/>}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes

