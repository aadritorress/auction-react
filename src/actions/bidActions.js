export const getBids = () => async (dispatch) => {
fetch('http://localhost:3000/api/v1/bids', {
  method: "GET",
  headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Authorization': `Bearer ${localStorage.token}`
    }
  })
  .then(resp => resp.json())
  .then(bids => {
    // console.log(bids)
    const payload = bids;
    dispatch({type: "GET_BIDS", payload});
    //dispatchGetBids(bids)
  });
}


export const addBid = (bid) => async (dispatch) => {
  // debugger
    fetch(`http://localhost:3000/api/v1/bids/`, {
    method: "POST",
    headers: {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': `Bearer ${localStorage.token}`
        },
    // body: JSON.stringify({bid})
    body: JSON.stringify(bid)
    })
    .then (resp => resp.json())
    .then(bid => {
        const payload = bid;
        dispatch({type: "ADD_BID", payload})
    })
}