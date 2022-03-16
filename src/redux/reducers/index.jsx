import { combineReducers } from "redux";
import count from './countReducer'
import selectedItems from './selectedItemsReducer'

const rootReducer = combineReducers({
    count,
    selectedItems
})

export default rootReducer;