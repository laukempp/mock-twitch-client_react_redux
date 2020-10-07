import { AUTH_USER, AUTH_ERROR } from "./types";
import authService from "../apis/auth";

export const signUp = (email, password) => async (dispatch) => {
  try {
    const response = await authService.post("/register", {
      email,
      password,
    });
    dispatch({
      type: AUTH_USER,
      payload: response.data.token,
    });
    localStorage.setItem("token", response.data.token);
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Email already in use",
    });
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    const response = await authService.post("/login", { email, password });

    dispatch({
      type: AUTH_USER,
      payload: response.data.token,
    });
    localStorage.setItem("token", response.data.token);
  } catch {
    dispatch({
      type: AUTH_ERROR,
      payload: "Invalid login credentials",
    });
  }
};

export const signOut = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: "",
  };
};
