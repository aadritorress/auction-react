
const initialState = {
    username: null,
    password: null,
    loggedIn: false,
    id: null,
}

const loginReducer = (state = initialState, action) => {
switch(action.type){
    case "LOG_IN":
    return {
        ...state,
        username: action.username, 
        password: action.password, 
        id: action.id,
        loggedIn: true 
    }
    case "LOG_OUT":
    return {
        ...state, 
        username: null,
        password: null,
        id: null,
        loggedIn: false 
    }
    default: 
    return state 
    }
}

export default loginReducer      