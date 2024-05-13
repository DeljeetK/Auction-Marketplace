import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { emailVerify } from "../Api/api";

//---------------------------------------SIGNUP REDUCER-------------------------------

export const emailverify = createAsyncThunk(
  "users/emailVerify",
  async (values) => {
    const response = await emailVerify(values);
    return response;
  }
);

//---------------------------------------LOGIN REDUCER----------------------------------

const EmailVerifySlice = createSlice({
  name: "verify",
  initialState: {
    user: [],
    status: "idle",
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(emailverify.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(emailverify.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(emailverify.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default EmailVerifySlice.reducer;
