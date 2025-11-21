import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../service/auth.service";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await login(email, password);

      localStorage.setItem("token", data.body.token);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "auth/logout" });
};

export const checkAuth = () => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({
    type: "auth/checkAuth",
    payload: { token, isAuthenticated: !!token },
  });
};
