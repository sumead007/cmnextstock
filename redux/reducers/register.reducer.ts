//rxreducer
import { RegisterReducer } from "../../types/register.reducer.type";
import {
  REGISTER_SUCCESS,
  REGISTER_FETCHING,
  REGISTER_FAILED,
} from "../saga/actionTypes";
const initialState: RegisterReducer = {
  result: null,
  isFetching: false,
  isFailed: false,
};

export default (state = initialState, { type, payload }): RegisterReducer => {
  switch (type) {
    case REGISTER_FETCHING:
      return { ...state, result: null, isFetching: true, isFailed: false };
    case REGISTER_SUCCESS:
      return {
        ...state,
        result: payload.result,
        isFetching: false,
        isFailed: false,
      };
    case REGISTER_FAILED:
      return { ...state, result: null, isFetching: false, isFailed: true };
    default:
      return state;
  }
};
