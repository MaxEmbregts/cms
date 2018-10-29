import {DECREMENT, INCREMENT} from "../actions/actions";

const initialState = {
    count: 0
};

export default function countReducers(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: action.payload
            };
        case "DECREMENT":
            return {
                ...state,
                count: action.payload
            };
        default:
            return state;
    }
}
