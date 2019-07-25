import {
    ADD_PLACE,
    DELETE_PLACE,
  } from "./actionTypes";
  
  export const addPlace = (place: string) => {
    return {
      type: ADD_PLACE,
      placeName: place
    }
  };
  
  export const deletePlace = (key: number) => {
    return {
      type: DELETE_PLACE,
      placeKey: key
    }
  };