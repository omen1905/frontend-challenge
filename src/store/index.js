import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import combineReducers from './combineReducers';

function getEnhancers() {
    const isBrowserWithExtension = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    if (isBrowserWithExtension) {
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }

    return compose();
}

export function makeStore() {
    const composeEnhancers = getEnhancers();

    return createStore(combineReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
}
