

export const getCharities = () => async (dispatch) => {
  fetch('http://localhost:3000/api/v1/charities', {
  method: "GET",
  headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Authorization': `Bearer ${localStorage.token}`
    }
  })  
  .then(resp => resp.json())
  .then(charities => {
    // console.log(items)
    const payload = charities;
    dispatch({type: "SET_CHARITY", payload});
  });
}   
    
  
export const editDonation = (data) => async (dispatch) => {
  console.log(data.totalDonations)
    fetch(`http://localhost:3000/api/v1/charities/${data.charity.id}`, {
    method: "PATCH",
    headers: {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': `Bearer ${localStorage.token}`
        },
    body: JSON.stringify({donations: data.totalDonations})
    })
    .then (resp => resp.json())
    .then(charity => {
        console.log('charity:', charity)
        const payload = charity;
        dispatch({type: "EDIT_DONATION", payload})
    })
}
     