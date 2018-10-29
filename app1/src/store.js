import {createStore} from "redux";
import countReducers from "./reducers/countReducers";

export const storeInstance = createStore(countReducers);
