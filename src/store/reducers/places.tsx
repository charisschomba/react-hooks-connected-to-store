import {
    ADD_PLACE,
    DELETE_PLACE
  } from '../actions/actionTypes';

  const initialState = {
    listOfPlaces: []
  };
  
  const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case ADD_PLACE:
        return {
          ...state,
          listOfPlaces: state.listOfPlaces.concat(action.placeName)
        };
      case DELETE_PLACE:
        return {
          ...state
        };
      default:
        return state
    }
  };
  
  export default reducer;