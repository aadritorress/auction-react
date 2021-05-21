
import './App.css';
import React, { Component } from 'react';



class ItemForm extends Component {
    render() {
        return (
            <div className="form">
            <br></br>
            <h3>Donation Form</h3>
            <form onSubmit={this.props.addItem}>
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
            <button type="submit">Add Item</button>
            <br></br>
            <br></br>
            </form>
            </div>
        )
    }

}

export default ItemForm