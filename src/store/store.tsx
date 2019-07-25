import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const middlewares: any = [];

const configureStore = () => createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
  );

export default configureStore;
