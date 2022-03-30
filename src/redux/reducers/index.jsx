import { combineReducers } from "redux";
import count from './countReducer'
import selectedItems from './selectedItemsReducer'

//This is how we combine reduces. Each reduce is mapped to it's part of state here
// ie. line 8 reads "state.count maps to count from countReducer" 
const rootReducer = combineReducers({
    count,
    selectedItems
})

export default rootReducer;