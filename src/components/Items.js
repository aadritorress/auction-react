import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions' 
import { getBids, addBid } from '../actions/bidActions' 

const mapStateToProps = (state) => {
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
   
        console.log('item:', item)
        
        let higherAmount = Math.max(...item.bids.map(bid => bid.amount))

        // if (item.bids.length === 0 && bid.amount > item.price)  {
        //     props.addBid(bid); 
        // } else 
        if
            (bid.amount > higherAmount && bid.amount >= item.price) {
                props.addBid(bid); 
            }
        else {
        alert('bid cannot be lower than current price');
        }
        e.target.reset()
    }

        useEffect( ()=>{
            if (props.items.length === 0){
                props.getItems();
            }
            props.getBids();
         }, [] );
        

         
        const [searchTerm, setSearchTerm] = useState(' ')

        const items = props.items;
        // console.log(props.items)
       
        return (

            <div>
                <br></br>
                <h1>All Items</h1>
                
            <button className="button" onClick={handleHome}> Home </button> 
            <br></br>
             <br></br>
              <br></br>
          <input type="text" placeholder='Search...' onChange={e => {setSearchTerm(e.target.value)}} />

            <div> 
            {/* <h3> Experiences</h3>  */}
            </div>
            {/* <h3> All Items</h3> */}
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
                <h5>Condition: {item.condition}</h5>
                <h5>City: {item.city}</h5>
                <h5>Initial Price: ${item.price}</h5>     
                {item?.bids?.length?  
                <h5>Current Price: ${Math.max(...item.bids.map(bid => bid.amount))}</h5> : ''}
                    {item.sold ? 
                    <div>
                    <h4>ITEM SOLD 
                        <br></br>
                    Final Price: ${Math.max(...item.bids.map(bid => bid.amount))}</h4> 
                    </div> :
                    <form onSubmit={(e) => handleSubmit(e, item)} >
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