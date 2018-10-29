import {DECREMENT, INCREMENT} from "./types";

// export const incrementCounter = count => ({
//     type: 'INCREMENT',
//     count: count + 1
// });

export const incrementCount = (count) => dispatch => {
    dispatch({
        type: INCREMENT,
        payload: count + 1
    })
};

export const decrementCount = (count) => dispatch => {
    dispatch({
        type: DECREMENT,
        payload: count - 1
    })
};