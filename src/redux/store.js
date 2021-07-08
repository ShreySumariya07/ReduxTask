import { createStore,applyMiddleware } from "redux";
import todoReducer from './todo/todoReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const store = createStore(todoReducer,composeWithDevTools(applyMiddleware(logger,thunk)));

export default store;