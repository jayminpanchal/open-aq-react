import { createSelector } from "reselect";
import { AppState, CityIndex, LocationReducer } from "../../interfaces";

const locationSelector = (state: AppState) => state.location;

export const getLocation = (cityIndex: CityIndex) =>
  createSelector(
    locationSelector,
    (location: LocationReducer) => location.results?.[cityIndex]
  );

export const getError = (cityIndex: CityIndex) =>
  createSelector(
    locationSelector,
    (location: LocationReducer) => location.errors?.[cityIndex]
  );
