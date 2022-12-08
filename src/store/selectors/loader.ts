import { createSelector } from "reselect";
import { AppState, CityIndex, LoaderReducer } from "../../interfaces";

const loaderSelector = (state: AppState) => state.loader;

export const getIsLoading = (cityIndex: CityIndex) =>
  createSelector(
    loaderSelector,
    (loader: LoaderReducer) => loader.loading?.[cityIndex]
  );
