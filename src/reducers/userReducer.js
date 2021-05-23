
const initialState = {
    user: ''
}   

const userReducer = (state = initialState, action) => {

switch(action.type){
case "CREATE_USER":
    return {
        ...state, 
        user: [...state.user, action.payload]
    }
    default: return user 
    }
}

export default userReducer