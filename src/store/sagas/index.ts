import { all } from "redux-saga/effects";
import { watchGetCityLocations } from "./location";

export default function* rootSaga() {
  yield all([watchGetCityLocations()]);
}
