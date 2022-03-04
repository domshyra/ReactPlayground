import * as types from '../actions/actionTypes';

export default function courseReducer(state = {selectedItems : []}, action) {
    switch (action.type) {
        case types.TOGGLE_SELECTED_ITEMS:
            return pushOrSpliceSelectedItemsArray(action.checked, action.itemId, state);
        default:
            return state;
    }
}


//Add or remove from our state.selectedItems array
const pushOrSpliceSelectedItemsArray = (checked, itemId, state) => {
    const selectedItems =  checked ? [...state.selectedItems.push(itemId)] : [...state.selectedItems.splice(state.selectedItems.indexOf(itemId), 1)];
    return {
        ...state,
        selectedItems
    }
};
  
  