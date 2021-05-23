import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getItems } from '../actions/itemActions' 
// import { useDispatch } from 'react-redux'


const mapStateToProps = (state) => {
    return { items: state.items.items};
};

const mapDispatchToProps = (dispatch) => {
    return {
            getItems: () => dispatch(getItems()),
    }
};

class Items extends Component { 
    handleHome = () =>{ 
        this.props.history.push("/HomePage");
    }

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const items = this.props.items;
        return (
      <div>
                 <img src="https://i.ibb.co/gr47YrK/Screen-Shot-2021-05-22-at-12-03-53-PM.png" alt="calendar" width="200" height="200"></img>
           <br></br>
            <button className="button" onClick={this.handleHome}> Home </button>
            <p> All Items</p>
            {items.map((item, index) => 
            ( 
                <div key={index}>
                <br></br>
                <h3>{item.name}</h3>
                <br></br>
                <img src={item.picture} alt='' width="100" height="100" ></img>
                <br></br>
                <h4>Price: {item.initial_price}</h4>
                <h4>Condition: {item.condition}</h4>
                <h4>City: {item.city}</h4>
                <h4>Item sold: {item.sold ? 'Yes' : "No"}
                <br></br>
                <br></br>
                <button className="action-button"> Bid </button></h4>
                <br></br>
                </div>
            ))}
                <br></br>
                <button className="button" onClick={this.handleHome}> Home </button>
         {/* {getItems(useDispatch())} */}
        {/* {dispatchSetItem(useDispatch())} */}
        <br></br>
        </div>
    ) 
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);






// import React from 'react'
// import Item from "./components/Item"


// const Items = (props) => { 

 
// return (
// <div>
// {props.items.map(item => <Item key={item.id} item={item} editSold={props.editSold} increaseBid={props.increaseBid}/>)}

// </div>
// )

// }


// export default Items
