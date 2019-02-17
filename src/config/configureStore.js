import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers';
import DevTools from './DevTools'

const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
);

export default function configureStore(initialState) {
    return createStore(rootReducer,initialState, enhancer);
}