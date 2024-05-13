import { configureStore } from "@reduxjs/toolkit";
import signupreducer from "../Reducers/userReducer";
import modelReducer from "../Reducers/modalReducer";
import emailVerifyReducer from "../Reducers/emailVerifyReducer";

const store = configureStore({
    reducer: {
      user: signupreducer,
      model: modelReducer,
      emailVerify:emailVerifyReducer
    },
  });

  export default store;