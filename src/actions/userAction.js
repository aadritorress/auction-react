
   

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

   
export const getUser = () => async (dispatch) => {
    fetch('http://localhost:3000/api/v1/users', {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
    })
    .then (resp => resp.json())
    .then(user => {
        const payload = user;
        // console.log(user)
        dispatch({type: "GET_USER", payload})
    })
}


export const deleteUser = (user) => async (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
        method: "DELETE",
    })
        const payload = user;
        // console.log(user)
        dispatch({type: "DELETE_USER", payload})
}



export const editUser = (user) => async (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
    method: "PATCH",
    headers: {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': `Bearer ${localStorage.token}`
        },
    body: JSON.stringify({user})
    })
    .then (resp => resp.json())
    .then(user => {
        // console.log(user)
        const payload = user;
        dispatch({type: "EDIT_USER", payload})
    })
}










// export const dispatchCreateUser = user =>({
// type: "CREATE_USER",
// payload: user
// })

// export const dispatchGetUser = user => ({
//     type: "GET_USER", 
//     payload: user 
// })



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