import * as types from '../actions/actionTypes';

export default function selectedItemsReducer(state, action) {
    if (typeof state === 'undefined') {
        state = [1];
    }
    debugger;
    switch (action.type) {
        case types.TOGGLE_SELECTED_ITEMS:
            return pushOrSpliceSelectedItemsArray(action.checked, action.itemId, state);
        default:
            return state;
    }
}


//Add or remove from our state.selectedItems array
const pushOrSpliceSelectedItemsArray = (checked, itemId, state) => {
    return checked ? [...state.push(itemId)] : [...state.splice(state.indexOf(itemId), 1)];
};
  
  