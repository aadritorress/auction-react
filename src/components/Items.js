import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions' 
import { getBids, addBid } from '../actions/bidActions'  
// import { useDispatch } from 'react-redux'


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

// bidState = useSelector(state => state) 

class Items extends Component { 
    handleHome = () =>{ 
        this.props.history.push("/HomePage");
    }


    handleSubmit = (e, item) => {
    e.preventDefault();
    // console.log(e.target[0].value)
        // debugger
    let bid = 
    { 
        amount: e.target[0].value, 
        item_id: item.id,
        user_id: this.props.user.id
    }
    // console.log(bid)
    // console.log('user:', this.props.user)
    // console.log('item:', item)
    this.props.addBid(bid); 
    }

    componentDidMount() {
        this.props.getItems();
        this.props.getBids();
    }
    
    render() {
        const items = this.props.items;
        // console.log('items:', items)
        // debugger
        return (
      <div >
          <div >
         <img src="https://i.ibb.co/gr47YrK/Screen-Shot-2021-05-22-at-12-03-53-PM.png" alt="calendar" width="200" height="200"></img>
           <br></br>
            <button className="button" onClick={this.handleHome}> Home </button>
            <p> All Items</p>
            {items.map((item, index) => 
            ( 
                <div className="item-card"  key={index}>
                <br></br>
                <h3>{item.name}</h3>
                <br></br>
                <img src={item.image} alt='' width="100" height="100" ></img>
                <br></br>
                <h4>Condition: {item.condition}</h4>
                <h4>City: {item.city}</h4>
                <h4>Initial Price: {item.price}</h4>
                <h4>Item sold: {item.sold ? 'Yes' : "No"}</h4>
                {/* Bids */}
                {item.bids.map((bid, index) => (<div key={index}>
                <h4>Current Price: {bid.amount}</h4>
                </div>))}
                <form onSubmit={(e) => this.handleSubmit(e, item)} >
                {/* <form > */}
                <input type="number"name="amount"placeholder="amount"></input>
                <button type="submit"  className="action-button"> Bid </button>
                </form>
                <br></br>
                </div>
                ))}
                <br></br>
                <button className="button" onClick={this.handleHome}> Home </button>
        <br></br>
        </div>
        </div>
    ) 
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);






