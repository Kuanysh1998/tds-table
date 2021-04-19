import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk";
import tdsTableReducer from "./table-reducer";

let reducers = combineReducers({
    tdsTable: tdsTableReducer,

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store    

export default store;