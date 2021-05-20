import React from 'react'

const Item = (props) => { 

console.log(props)

    return (

        <div>
        <h3> {props.item.name} 
        <br></br>
        <img src={props.item.picture} alt ='' style={{width:'100px'}} ></img>
        <br></br>
        {props.item.initial_price}<br></br>
        {props.item.condition} <br></br>
        {props.item.city}<br></br>
        </h3>
        <button>Bid</button>
        </div>
        
     )
}

export default Item