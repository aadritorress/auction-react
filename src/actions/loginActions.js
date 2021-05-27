  
export const handleLogin = (e, dispatch, history) => {
     
      let user = {
        name: e.target[0].value,
        password: e.target[1].value,
      }
       let postReq = {
         method: "POST",
         headers: {
           'content-type': 'application/json',
           'accept': 'application/json'
         },
         body: JSON.stringify(user)
       }
       fetch('http://localhost:3000/api/v1/login', postReq)
       .then (resp => resp.json())
       .then(data => {
         // localStorage.token = data.token 
         localStorage.setItem("token", data.token)
   
         dispatch({type: "LOG_IN", user: data})
        data.token ? history.push("/HomePage") : history.push("/login") 
        // console.log(user)
       })
      }




