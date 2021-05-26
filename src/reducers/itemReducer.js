//function that will change store/state

const initialState = {
    items: []
}       

const itemReducer = (state = initialState, action) => {
//change state based on actions
//conditional logic 
switch(action.type) {
    case "SET_ITEM":
        // console.log("hitting reducer")
        return {   
            ...state,
             items: action.payload
        }  
    case "ADD_ITEM":
        return {
            ...state, 
            items: [...state.items, action.payload] 
        }
    case "EDIT_SOLD":
    let updatedItem = action.payload
    // updatedItem.sold = !updatedItem.sold
        return {
            ...state, 
            items: state.items.map(item => item.id === updatedItem.id ? updatedItem : item)
        }

        
    default: return state 
}
}

export default itemReducer