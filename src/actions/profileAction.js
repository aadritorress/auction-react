export const handleProfile = (dispatch) => {

fetch('http://localhost:3000/api/v1/profile', {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${localStorage.token}`
        },
      })
      .then(resp => resp.json())
      .then(user => 
        // console.log(user)
      dispatch({type: "LOG_IN", user: user}))
      }