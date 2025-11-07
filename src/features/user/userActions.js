import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "../../service/user.service";

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
