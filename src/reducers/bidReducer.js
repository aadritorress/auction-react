


const initialState = {
    bids: []
}   

const bidReducer = (state = initialState, action) => {
switch(action.type) {
    case "GET_BIDS":
        return {
            ...state,
             bids: action.payload
        }  
    case "ADD_BID":
        return {
            ...state, 
            bids: [...state.bids, action.payload] 
        }  
    default: return state 
    }
}     

export default bidReducer

       