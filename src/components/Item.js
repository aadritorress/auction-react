import React from 'react'

const Item = (props) => { 

// console.log(props)

    return (

     <div className="row">
          <div className="column">
          <div className="card">
        <h3> {props.item.name} </h3>
        <button onClick={props.increaseBid}>Bid</button>
        <br></br>
        <br></br>
        <img src={props.item.picture} alt ='' style={{width:'100px'}} ></img>
        <br></br>
        <h5>
        Current Price: {props.item.initial_price}<br></br>
        Condition: {props.item.condition} <br></br>
        City: {props.item.city}
        <br></br>
        Item sold: {props.item.sold ? 'Yes' : 'No' }
        <br></br>
        <button onClick={props.editSold}> Sold </button>
        <br></br>
        </h5>
        </div>
        </div>
        </div>
     )
}

export default Item