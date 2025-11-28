import { createSlice } from "@reduxjs/toolkit";
import { userProfile, updateUserProfile } from "./userActions";

const initialState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  createdAt: null,
  updatedAt: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userProfile.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.id = payload.id;
        state.email = payload.email;
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
        state.createdAt = payload.createdAt;
        state.updatedAt = payload.updatedAt;
      })
      .addCase(userProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
        state.updatedAt = payload.updatedAt;
      })
      .addCase(updateUserProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
