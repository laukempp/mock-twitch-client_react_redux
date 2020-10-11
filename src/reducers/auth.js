import { SIGN_IN, SIGN_OUT, AUTH_ERROR } from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        authenticated: action.payload.token,
        userId: action.payload.userId,
      };
    case "SIGN_OUT":
      return {
        ...state,
        authenticated: "",
        userId: null,
      };
    case "AUTH_ERROR":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
