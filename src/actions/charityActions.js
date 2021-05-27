

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