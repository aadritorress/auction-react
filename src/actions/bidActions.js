export const getBids = () => (dispatch) => {
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
    console.log(bids)
    // const payload = bids;
    // dispatch({type: "GET_BIDS", payload});
    //dispatchGetBids(bids)
  });
}


export const dispatchGetBids = bids =>({
type: "GET_BIDS",
payload: bids
})   