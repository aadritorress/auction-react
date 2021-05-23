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
            <p> All Items</p>
            {items && items.length > 0 ? items.map((item, idx) => ( <div key={idx}>{item.id}</div>)) : ''}
         {/* {getItems(useDispatch())} */}
        {/* {dispatchSetItem(useDispatch())} */}
            <button className="button" onClick={this.handleHome}> Home </button>
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
