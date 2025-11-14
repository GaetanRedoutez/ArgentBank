import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, updateProfile } from "../../service/user.service";

export const userProfile = createAsyncThunk(
  "user/profile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProfile();
      return response.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ firstName, lastName }, { rejectWithValue }) => {
    try {
      const response = await updateProfile({ firstName, lastName });
      return response.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
