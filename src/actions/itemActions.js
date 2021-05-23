

export const getItems = () => async (dispatch) => {
  fetch('http://localhost:3000/api/v1/items', {
  method: "GET",
  headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Authorization': `Bearer ${localStorage.token}`
    }
  })
  .then(resp => resp.json())
  .then(items => {
    // console.log(items)
    const payload = items;
    dispatch({type: "SET_ITEM", payload});
    //dispatchSetItem(items)
  });
}
  
export const addItem = (item) => async(dispatch, getState) => {
    // console.log(item)
    fetch("http://localhost:3000/api/v1/items", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(item)
    })
      .then(resp => resp.json())
      .then((item) => {
        const payload = item;
        dispatch({type: "ADD_ITEM", payload})
        // console.log(item)
      })   
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

   