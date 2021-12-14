import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer  from "./reducers/index";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(RootReducer, composedEnhancer);

export default store;