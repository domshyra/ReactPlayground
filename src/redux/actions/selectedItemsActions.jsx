import * as types from "./actionTypes";

export function toggleSelectedItems(checked, itemValue, itemId) {
	debugger;
	return { type: types.TOGGLE_SELECTED_ITEMS, checked, itemValue, itemId };
}
