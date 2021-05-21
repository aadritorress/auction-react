import React from 'react'
import Item from "./Item"


const Items = (props) => { 

 
return (
<div>
{props.items.map(item => <Item key={item.id} item={item} editSold={props.editSold} increaseBid={props.increaseBid}/>)}

</div>
)

}


export default Items
