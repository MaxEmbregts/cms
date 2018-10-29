import {DECREMENT, INCREMENT} from "./types";

export function Increment(count) {
    return {type: INCREMENT, count};
}

export function Decrement(count) {
    return {type: DECREMENT, count};
}
