import { combineReducers } from "redux";
import math from './mathReducer'
import selectedItems from './selectedItemsReducer'

const rootReducer = combineReducers({
    math,
    selectedItems
})

export default rootReducer;