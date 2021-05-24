import React, {useEffect} from 'react'
import Routes from './Routes'
import { handleProfile } from './actions/profileAction'
import {useDispatch} from 'react-redux'

const App = () => {
const dispatch = useDispatch()

useEffect(() => {
  if (localStorage.token) {
    handleProfile(dispatch)
  }
}, []) 

  return (
    <div>
    <Routes />
    </div>
  )
}

export default App
