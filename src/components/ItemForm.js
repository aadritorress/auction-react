
import React, {useState} from 'react'
// import {useDispatch} from 'react-redux'
import {addItem} from '../actions/itemActions' 
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
            addItem: (item) => dispatch(addItem(item)),
    };
};

const ItemForm = (props) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [condition, setCondition] = useState('');
    const [city, setCity] = useState('');
    const [errors, setErrors] = useState([]);

    const handleHome = () => { 
        props.history.push("/HomePage");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        const item = {
            name, image, price, condition, city, sold: false, user_id: 26, charity_id: 1
        };

        const errors = [];

        for (const property in item){
            if (property !== 'sold' && !item[property]){
                errors.push(`${property} cannot be blank`);
            }
        }
        if (errors.length > 0){
            //display the errors
            setErrors(errors);
            return;
        }
        props.addItem(item);       
    }


  return (
      <div>
            <img src="https://i.ibb.co/gr47YrK/Screen-Shot-2021-05-22-at-12-03-53-PM.png" alt="calendar" width="250" height="250"></img>
            <br></br>
            <button className="button" onClick={handleHome}> Home </button>
            <h3>Donation Form</h3>
            {errors && errors.length > 0 ? errors.map((error, idx) => (<div key={idx}>{error}</div>)) : ''}
             <form className = "form-card" onSubmit={handleSubmit}>
             <input type="text" value={name} onChange={e => setName(e.target.value)} name="name" placeholder="name"></input>
             <br></br>
              <input type='text' value={image} onChange={e => setImage(e.target.value)} placeholder="image" name='image'/>
              <br></br>
             <input type="text" value={price} name="price" onChange={e => setPrice(e.target.value)}  placeholder="price" ></input>
             <br></br>
             <input type="text" value={condition} name="condition" onChange={e => setCondition(e.target.value)} placeholder="condition" ></input>
             <br></br>
             <input type="text" value={city} name="city" onChange={e => setCity(e.target.value)} placeholder="city" ></input>
             <br></br>
             <br></br>
             <button className="button" type="submit">Add Item</button>
             <br></br>
             <br></br>
             </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(ItemForm)


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