import { AnyAction } from "redux";
import { LocationReducer } from "../../interfaces";
import {
  GET_SEARCH_CITY,
  SET_SEARCH_CITY_ERROR,
  SET_SEARCH_CITY_RESULT,
} from "../actionTypes";

const initialState: LocationReducer = {
  results: undefined,
  errors: undefined,
};

function locationReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case GET_SEARCH_CITY:
      return {
        ...state,
        results: {
          ...state.results,
          [action.payload.cityIndex]: undefined,
        },
        errors: {
          ...state.errors,
          [action.payload.cityIndex]: undefined,
        },
      };
    case SET_SEARCH_CITY_RESULT:
      return {
        ...state,
        results: {
          ...state.results,
          [action.payload.cityIndex]: action.payload.result,
        },
        errors: {
          ...state.errors,
          [action.payload.cityIndex]: undefined,
        },
      };
    case SET_SEARCH_CITY_ERROR:
      return {
        ...state,
        results: {
          ...state.results,
          [action.payload.cityIndex]: undefined,
        },
        errors: {
          ...state.errors,
          [action.payload.cityIndex]: action.payload.error,
        },
      };
    default:
      return state;
  }
}

export default locationReducer;
