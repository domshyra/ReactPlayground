import * as types from '../actions/actionTypes';

import initialState from './initialState';

export default function selectedItemsReducer(state = initialState.selectedItems, action) {
    switch (action.type) {
        case types.TOGGLE_SELECTED_ITEMS:
            return pushOrSpliceSelectedItemsArray(action.checked, action.itemId, state);
        default:
            return state;
    }
}


//Add or remove from our state.selectedItems array
const pushOrSpliceSelectedItemsArray = (checked, itemId, state) => {
    let selectedItems = [...state];
    checked ? selectedItems.push(itemId) : selectedItems.splice(state.indexOf(itemId), 1);
    
    return selectedItems;
};
  
  