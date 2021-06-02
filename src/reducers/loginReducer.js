
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
    case "ADD_ITEM":
        return {
            ...state, user: {
            ...state.user, items: [action.payload, ...state.user.items] }
        }
    case "ADD_BID":
        return {
            ...state, user: {
            ...state.user, items: state.user.items.map( item => item.id === action.payload.item_id ? {...item, bids: [...item.bids, action.payload] } : item)}
        }  

    default: return state 
    }
    
}

export default loginReducer      