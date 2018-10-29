import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers/countReducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

export const storeInstance = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
