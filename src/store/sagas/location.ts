import { AnyAction } from "redux";
import axios, { AxiosResponse } from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { CityLocationResponse, Measurement } from "../../interfaces";
import {
  hideLoader,
  setSearchCityError,
  setSearchCityResult,
  showLoader,
} from "../actions";
import { GET_SEARCH_CITY } from "../actionTypes";

function* getCityLocations(action: AnyAction) {
  const cityIndex = action.payload.cityIndex;
  try {
    yield put(showLoader(cityIndex));
    const response: AxiosResponse<CityLocationResponse> = yield call(
      axios.get,
      `https://api.openaq.org/v2/latest?limit=10&page=1&city=${action.payload.cityName}`
    );
    if (response.data.results.length > 0) {
      const location = response.data.results[0];
      if (location.measurements.length > 0) {
        location.measurementsObj = location.measurements.reduce(
          (obj: Record<string, Measurement>, param) => {
            obj[param.parameter] = param;
            return obj;
          },
          {}
        );
      }
      yield put(setSearchCityResult(cityIndex, response.data.results[0]));
    } else {
      yield put(setSearchCityError(cityIndex, "No data found for the city"));
    }
  } catch (error) {
    yield put(setSearchCityError(cityIndex, error as string));
  } finally {
    yield put(hideLoader(cityIndex));
  }
}

export function* watchGetCityLocations() {
  yield takeLatest(GET_SEARCH_CITY, getCityLocations);
}
