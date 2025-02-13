import streamService from "../apis/streams";
import history from "../utils/history";
import {
  SIGN_IN,
  SIGN_OUT,
  AUTH_ERROR,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";
import authService from "../apis/auth";

export const signUp = (email, password) => async (dispatch) => {
  try {
    const response = await authService.post("/register", {
      email,
      password,
    });
    dispatch({
      type: SIGN_IN,
      payload: { token: response.data.token, userId: response.data.userId },
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
      type: SIGN_IN,
      payload: { token: response.data.token, userId: response.data.userId },
    });
    localStorage.setItem("user", response.data.userId);
  } catch {
    dispatch({
      type: AUTH_ERROR,
      payload: "Invalid login credentials",
    });
  }
};

export const signOut = () => {
  localStorage.removeItem("user");
  return {
    type: SIGN_OUT,
    payload: "",
  };
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streamService.get("/streams");

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streamService.get(`/streams/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: response.data,
  });
};

export const createStream = (title, description) => async (
  dispatch,
  getState
) => {
  const { userId } = getState().auth;
  const response = await streamService.post("/streams", {
    title,
    description,
    userId,
  });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
  history.push("/");
};

export const editStream = (id, title, description) => async (dispatch) => {
  const response = await streamService.patch(`/streams/${id}`, {
    title,
    description,
  });

  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await streamService.delete(`/streams/${id}`);

  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
  history.push("/");
};
