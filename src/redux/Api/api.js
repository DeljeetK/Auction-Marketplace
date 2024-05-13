import axios from "axios";
import path from "../../path.js";

// ----------------------User API----------------------------------------
export const SignupUser = async (values) => {
  try {
    const response = await axios.post(`${path}/auth/signup`, values);
    return response.data; // Access data directly, Axios already parses JSON
  } catch (error) {
    throw new Error("Failed to Signup");
  }
};

export const Loginuser = async (values) => {
  try {
   console.log(values,"vvvvvv------------")

    const response = await axios.post(`${path}/auth/login`, values);
    console.log(response,"response--------------")
    return response.data;
  } catch (error) {
    throw new Error("Failed to Login");
  }
};
//---------------Email Verify API

export const emailVerify = async (values) => {
  try {
    const response = await axios.post(`${path}/`, values);
    return response.data;
  } catch (error) {
    throw new Error("Failed to send OTP");
  }
};
