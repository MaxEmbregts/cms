import {DECREMENT, INCREMENT} from "../../app1/src/actions/types";

export class GlobalEventDistributor {
    constructor() {
        this.stores = [];
    }

    registerStore(store) {
        this.stores.push(store);
    }

    increment(count) {
        this.stores.forEach(s => s.dispatch({
            type: INCREMENT,
            payload: count + 1
        }));
    }

    decrement(count) {
        this.stores.forEach(s => s.dispatch({
            type: DECREMENT,
            payload: count - 1
        }));
    }
}
