import {
  openModal,
  closeModal,
  openLogin,
  closeLogin,
  openSignup,
  closeSignup,
  openEmailVerify,
  closeEmailVerify,
  setSignUpRole,
} from "../redux/Reducers/modalReducer";

export const HandleOpenmodel = (dispatch) => {
  dispatch(openModal());
};

export const HandleClosemodel = (dispatch) => {
  dispatch(closeModal());
};

export const HandleOpenLogin = (dispatch) => {
  dispatch(openLogin());
};

export const HandleCloseLogin = (dispatch) => {
  dispatch(closeLogin());
};

export const HandleOpenSignup = (e, dispatch) => {
  let value = e.target.getAttribute("value");
  dispatch(setSignUpRole(value));
  dispatch(openSignup());
};

export const HandleCloseSignup = (dispatch) => {
  dispatch(closeSignup());
};

export const HandleOpenEmailVerify = (dispatch) => {
  dispatch(openEmailVerify());
};

export const HandleCloseEmailVerify = (dispatch) => {
  dispatch(closeEmailVerify());
};
