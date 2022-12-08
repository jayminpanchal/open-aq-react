import { AnyAction } from "redux";
import axios, { AxiosResponse } from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { LocationResponse, Parameter } from "../../interfaces";
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
    const response: AxiosResponse<LocationResponse> = yield call(
      axios.get,
      `https://api.openaq.org/v2/locations?limit=10&page=1&city=${action.payload.cityName}`
    );
    if (response.data.results.length > 0) {
      const location = response.data.results[0];
      if (location.parameters.length > 0) {
        location.parameterObj = location.parameters.reduce(
          (obj: Record<string, Parameter>, param) => {
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
