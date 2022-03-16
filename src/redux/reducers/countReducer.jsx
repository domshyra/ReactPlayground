import * as types from '../actions/actionTypes';

export default function countReducer(state, action) {
    if (typeof state === 'undefined') {
        state = 0;
    }
    switch (action.type) {
        case types.ADD:
            return state + 1;
        default:
            return state;
    }
}
