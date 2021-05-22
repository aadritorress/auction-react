import React from 'react'
// import { getItems } from '../actions/itemActions' 
// import { useDispatch } from 'react-redux'


const Items = (props) => {

  const handleHome = () =>{ 
  props.history.push("/HomePage");
  }

  return (
      <div>
            <p> All Items</p>
         {/* {getItems(useDispatch())} */}
        {/* {dispatchSetItem(useDispatch())} */}
            <button className="button" onClick={handleHome}> Home </button>
        </div>
    )
}

export default Items






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
