
const initialState = {
    user: {},
    loggedIn: false,
}

const loginReducer = (state = initialState, action) => {
switch(action.type){
    case "LOG_IN":
   
    return {
        ...state,
        user: action.user.user,
        // username: action.username, 
        // password: action.password, 
        // id: action.id,
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
    case 'DELETE_ITEM':
    return {
          ...state, user: {
          ...state.user, items: state.user.items.filter(item => item.id !== action.payload.id)}
    }

    default: return state 
    }
    
}

export default loginReducer      