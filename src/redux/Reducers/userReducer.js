import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Loginuser, SignupUser } from "../Api/api";




//---------------------------------------SIGNUP REDUCER-------------------------------
export const addUser = createAsyncThunk("users/adduser", async (values) => {
  const response = await SignupUser(values);
  return response;
});

//---------------------------------------LOGIN REDUCER----------------------------------
export const loginUser = createAsyncThunk("users/loginUser", async (values) => {
  const response = await Loginuser(values);
  return response;
});



const signupSlice = createSlice({
  name: "users",
  initialState: {
    user: [],
    token: "",
    status: "idle",
    error: null,
    
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
        state.token= action.payload.data.otpToken;
        state.error = null;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});



export default signupSlice.reducer;
