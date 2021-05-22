

export const getItems = () =>{
  fetch('http://localhost:3000/api/v1/items', {
  method: "GET",
  headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Authorization': `Bearer ${localStorage.token}`
    }
  })
  .then(resp => resp.json())
  .then(items => 
    // console.log(items)
    dispatchSetItem(items)
  )
}

export const addItem = (e) => {
    e.preventDefault()

    let newItem = { 
      name: e.target[0].value, 
      picture: e.target[1].value,
      initial_price: e.target[2].value,
      condition: e.target[3].value,
      city: e.target[4].value,
      sold: false,
      // user_id: this.props.user.id
    }
    console.log(newItem)

    fetch("http://localhost:3000/api/v1/items", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(newItem)
    })
      .then(resp => resp.json())
      .then(item => 
        // console.log(item)
      dispatchAddItem(item)
      )
    e.target.reset();
  }
 
export const dispatchSetItem = items =>({
type: "SET_ITEM",
payload: items
})   

export const dispatchAddItem = item =>({
type: "ADD_ITEM",
payload: item
})

export const dispatchEditSold = item =>({
type: "EDIT_SOLD",
payload: item
})

   