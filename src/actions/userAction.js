


export const signUp = (user) => async (dispatch) => {

    
    fetch('http://localhost:3000/api/v1/users', {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({user})
    })
    .then (resp => resp.json())
    .then(user => {
        // console.log(data)
        const payload = user;
        dispatch({type: "CREATE_USER", payload})
    })
}

export const dispatchCreateUser = user =>({
type: "CREATE_USER",
payload: user
})



    //   let createUser = {
    //     name: e.target[0].value,
    //     email: e.target[1].value,
    //     username: e.target[2].value,
    //     password: e.target[3].value
    //   }
    //   console.log('user:', createUser)
    
    //  let postReq = {
    //    method: "POST",
    //    headers: {
    //      'content-type': 'application/json',
    //      'accept': 'application/json'
    //    },
    //    body: JSON.stringify({user: createUser})
    //  }}