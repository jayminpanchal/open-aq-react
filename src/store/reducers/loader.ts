import { AnyAction } from "redux";
import { LoaderReducer } from "../../interfaces";
import { HIDE_LOADER, SHOW_LOADER } from "../actionTypes";

const initialState: LoaderReducer = {
  loading: undefined,
};

function loaderReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload.cityIndex]: true,
        },
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload.cityIndex]: false,
        },
      };
    default:
      return state;
  }
}

export default loaderReducer;
