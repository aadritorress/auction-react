

const initialState = {
    charities: []
}

const charityReducer = (state = initialState, action) => {
switch(action.type) {
    case "SET_CHARITY":
        return {   
            ...state,
             charities: action.payload
        }  
        case "EDIT_DONATION":
        console.log("reducer")
        let updatedCharity = action.payload
        return {   
            ...state,
            charities: state.charities.map(charity => charity.id === updatedCharity.id ? updatedCharity : charity)
        }  
    default: return state 
    }
}    


export default charityReducer


