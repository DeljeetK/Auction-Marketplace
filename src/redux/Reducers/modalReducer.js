import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "model",
  initialState: {
    isopen: false,
    isopenLogin: false,
    isopenSignup: false,
    isopenEmailVerify:false,
    signUpRole: null  
  },
  reducers: {
    openModal: (state) => {
      state.isopen = true;
    },
    closeModal: (state, action) => {
      state.isopen = false;
    },
    openLogin: (state, action) => {
      state.isopenLogin = true;
    },
    closeLogin: (state, action) => {
      state.isopenLogin = false;
    },
    openSignup: (state, action) => {
      state.isopenSignup = true;
    },
    closeSignup: (state, action) => {
      state.isopenSignup = false;
    },
    openEmailVerify:(state,action) =>{
      state.isopenEmailVerify = true;
    },
    closeEmailVerify:(state,action) =>{
      state.isopenEmailVerify = false;
    },
    setSignUpRole: (state,action) => {
      state.signUpRole = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  openLogin,
  closeLogin,
  openSignup,
  closeSignup,
  openEmailVerify,
  closeEmailVerify,
  setSignUpRole
} = modelSlice.actions;

export default modelSlice.reducer;
