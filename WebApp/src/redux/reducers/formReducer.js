/* eslint-disable import/no-anonymous-default-export */

import * as types from "../actions/actionTypes";

import initialState from "./initialState";

export default (state = initialState.form, { type, payload }) => {
	switch (type) {
		// case types.LOAD_CHARACTERS:
		// 	return { ...state, ...payload };

		default:
			return state;
	}
}
