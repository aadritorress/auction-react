

const initialState = {
    charities: []
}

const charityReducer = (state = initialState, action) => {
switch(action.type) {
    case "SET_CHARITY":
        // console.log("hitting reducer")
        return {   
            ...state,
             charities: action.payload
        }  
    default: return state 
    }
}

export default charityReducer


