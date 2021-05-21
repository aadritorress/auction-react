
export const dispatchSetItem = items =>({
type: "SET_ITEM",
payload: items
})   

export const dispatchAddItem = item =>({
type: "ADD_ITEM",
payload: item
})

export const dispatchEditSold = item =>({
type: "EDIT_SOLD",
payload: item
})

