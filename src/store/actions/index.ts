import { CityLocation } from "../../interfaces";
import {
  GET_SEARCH_CITY,
  HIDE_LOADER,
  SET_SEARCH_CITY_ERROR,
  SET_SEARCH_CITY_RESULT,
  SHOW_LOADER,
} from "../actionTypes";

export const getSearchCity = (cityName: string, cityIndex: string) => ({
  type: GET_SEARCH_CITY,
  payload: {
    cityIndex,
    cityName,
  },
});

export const setSearchCityResult = (cityIndex: string, result: CityLocation) => ({
  type: SET_SEARCH_CITY_RESULT,
  payload: {
    cityIndex,
    result,
  },
});

export const setSearchCityError = (cityIndex: string, error: string) => ({
  type: SET_SEARCH_CITY_ERROR,
  payload: {
    cityIndex,
    error,
  },
});

export const showLoader = (cityIndex: string) => ({
  type: SHOW_LOADER,
  payload: {
    cityIndex,
  },
});

export const hideLoader = (cityIndex: string) => ({
  type: HIDE_LOADER,
  payload: {
    cityIndex,
  },
});
