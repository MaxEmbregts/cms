import {DECREMENT, INCREMENT} from "./types";

export const Increment = count => ({
    type: 'INCREMENT',
    count: count + 1
});

export function Decrement(count) {
    return {type: DECREMENT, count};
}