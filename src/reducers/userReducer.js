
const initialState = {
    user: []
}        

const userReducer = (state = initialState, action) => {

switch(action.type){
case "CREATE_USER":
    return {
        ...state, 
        user: [...state.user, action.payload]
    }
    case "GET_USER":
    return {
        ...state, 
        user: [...state.user, action.payload]
    }
    case 'EDIT_USER':
      return {
        ...state, 
        user: [...state.user, action.payload]
      }   
    case 'DELETE_USER':
      return {
          user: state.user.filter(currentUser => currentUser !== action.payload)
        }

    default: return state
    }
}

export default userReducer