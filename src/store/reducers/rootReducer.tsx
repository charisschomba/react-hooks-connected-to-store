import {combineReducers} from "redux";
import {places} from './index';

const rootReducer = combineReducers({
    places: places
  });

export default rootReducer;