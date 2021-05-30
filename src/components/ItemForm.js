
import React, {useEffect, useState} from 'react'
// import {useDispatch} from 'react-redux'
import {addItem} from '../actions/itemActions' 
import { getCharities } from '../actions/charityActions' 
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    // debugger 
    return { 
        user: state.loginState.user,
        charities: state.charities.charities
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
            addItem: (item) => dispatch(addItem(item)),
            getCharities: () => dispatch(getCharities()),
    };
};

const ItemForm = (props) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [condition, setCondition] = useState('');
    const [city, setCity] = useState('');
    const [errors, setErrors] = useState([]);
    const [charity, setCharity] = useState(0);
   

    const handleHome = () => { 
        props.history.push("/HomePage");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        
        const item = {
            name, image, price, condition, city, sold: false, user_id: props.user.id, charity_id: charity
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
        props.history.push(("/Items")) 
    }

    useEffect(() => {
        props.getCharities();
    }, [])


  return (
      <div className='item-form'>
    
                <br></br>
                {/* <h1>Donate</h1> */}
            <br></br>
        <div className='item-formPAGE'>
            <button className="button" onClick={handleHome}> Home </button>
            <br></br>
            <br></br>
            {errors && errors.length > 0 ? errors.map((error, idx) => (<div key={idx}>{error}</div>)) : ''}
             <form className = "form-card" onSubmit={handleSubmit}>
            <h3> Please fill out the form below </h3>
          
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
              <h3>Choose the fundraiser you would like to help</h3>
             <select name="charity" className="" value={charity} onChange={(e) => setCharity(e.target.value)}>
                 {props.charities ? props.charities.map((singleCharity, idx) => (
                    <option key={idx} value={singleCharity.id}>{singleCharity.name}</option>
                 )) : ''}
             </select>
             <br></br>
             <br></br>
         
             <button className="signup-button" type="submit">Add Item</ button>
             <br></br>
             <br></br>
             </form>
             </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm)


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