
import React from 'react'
import { addItem } from '../actions/itemActions' 
import {useDispatch} from 'react-redux'

const ItemForm = (props) => {
     const dispatch = useDispatch()

     const handleHome = () =>{ 
  props.history.push("/HomePage");
  }


  return (
      <div>
            <button className="button" onClick={handleHome}> Home </button>
             <h3>Donation Form</h3>
             <form onSubmit={(e)=>{
                 e.preventDefault()
                 addItem(e, dispatch, props.history)}}>
             <input type="text" name="name" placeholder="name"></input>
             <br></br>
              <input type='text' placeholder="image" name='image'/>
              <br></br>
             <input type="text" name="initial_price" placeholder="price" ></input>
             <br></br>
             <input type="text" name="condition" placeholder="condition" ></input>
             <br></br>
             <input type="text" name="city" placeholder="city" ></input>
             <br></br>
             <button className="button" type="submit">Add Item</button>
             <br></br>
             <br></br>
             </form>
        </div>
    )
}

export default ItemForm


// import './App.css';
// import React, { Component } from 'react';


// class ItemForm extends Component {
//     render() {
//         return (
//               <div className="row">
//           <div className="column">
//             <div className="card">
//             <br></br>
//             </div>
//             </div>
//             </div>
//         )
//     }

// }

// export default ItemForm