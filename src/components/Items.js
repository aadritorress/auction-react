import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions' 
import { getBids, addBid } from '../actions/bidActions' 



const mapStateToProps = (state) => {
    // debugger
    return { 
        items: state.items.items, 
        bids: state.bids.bids,
        user: state.loginState.user
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => dispatch(getItems()),
        getBids: () => dispatch(getBids()),
        addBid: (bid) => dispatch(addBid(bid))
    }
};


const Items = (props) => {
    
    
    const handleHome = () =>{ 
        props.history.push("/HomePage");
    }
    
    
   const handleSubmit = (e, item) => {
        e.preventDefault();
        
        let bid = 
        { 
            amount: e.target[0].value, 
            item_id: item.id,
            user_id: props.user.id
        }
        console.log(bid)
        // console.log('user:', this.props.user)
        console.log('item:', item)
        
        let higherAmount = Math.max(...item.bids.map(bid => bid.amount))

        if (bid.amount > higherAmount) {
            props.addBid(bid); 
            // this.props.addBid(bid)
        }
        // else {
            // some error
            // }
        }
        
        useEffect( ()=>{
        props.getItems();
        props.getBids();
         }, [] );
        
        const [searchTerm, setSearchTerm] = useState(' ')

        const items = props.items;
       
        return (
            <div>
            <img src="https://i.ibb.co/gr47YrK/Screen-Shot-2021-05-22-at-12-03-53-PM.png" alt="calendar" width="200" height="200"></img>
            <br></br>
            <button className="button" onClick={handleHome}> Home </button> 
            <br></br>
          <input type="text" placeholder='Search...' onChange={e => {setSearchTerm(e.target.value)}} />
            <h3> All Items</h3>
            <div className="container">
            {items.filter(item => {
                if (searchTerm === ' ') {
                    return item
                } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                {
                    return item 
                }
                }).map((item, key) => {
                return (
                    <div className="item-card" key={key}>
                <h4>{item.name}</h4>
                <br></br>
                <img src={item.image} alt='' width="100" height="100" ></img>
                <br></br>
                <h4>Condition: {item.condition}</h4>
                <h4>City: {item.city}</h4>
                <h4>Initial Price: ${item.price}</h4>
                             
                {item.bids ?  
                <h4>Current Price: ${Math.max(...item.bids.map(bid => bid.amount))}</h4> : ''}
                {/* <h4>Item sold: {item.sold ? 'Yes' : "No"}</h4> */}
                {/* Bids */}
                {/* {item.bids.map((bid, index) => (<div key={index}>
                <h4>Current Price: ${bid.amount}</h4>
                 </div>))} */}
    
                                 {item.sold ? 'ITEM SOLD' :
                                 <form onSubmit={(e) => handleSubmit(e, item)} >
                                 {/* <form > */}
                                 <input type="number"name="amount"placeholder="amount"></input>
                                 <br></br>
                                 <button type="submit"  className="action-button"> Bid </button>
                                 </form>}
                        
                    </div>
                );
            })}
            </div>
            <br></br>
            <button className="button" onClick={handleHome}> Home </button>
            </div>
    ) 
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);






