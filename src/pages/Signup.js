import React from "react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
import { SignupSchema } from "../services/validator";
import useToast from "../helpers/useToast";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../css/signup.css";
import { addUser } from "../redux/Reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import {
  HandleCloseSignup,
  HandleOpenEmailVerify,
} from "../services/modalService";

const Signup = ({ isOpenSignup }) => {
  // const navigate = useNavigate();
  const toastOptions = useToast();
  const dispatch = useDispatch();
  const signUpRole = useSelector((state) => state?.model?.signUpRole);
  const openEmail = useSelector((state) => state?.model?.isopenEmailVerify);
  // ------------------------For Password Show--------------------
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  //------------------------Handle Submit----------------------------------
  const handleSubmit = async (values) => {
    console.log(values);
    dispatch(addUser(values)).then((result) => {
      if (result.payload) {
        console.log(result.payload, "result.payload >>>>>>>>>>>>>")
        HandleCloseSignup(dispatch);
        HandleOpenEmailVerify(dispatch);
        toast.success("Signup successful", toastOptions);
        console.log(openEmail, "this is the value of email open");
      } else {
        toast.error(("Email already exists", toastOptions));
      }
    });
  };

  return (
    // <Modal
    //   isOpen={isOpenSignup}
    //   // onAfterOpen={afterOpenModal}
    //   // onRequestClose={closeModal}
    //   contentLabel="Example Modal"
    // >
      <div className="container">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            postalCode: "",
            city: "",
            country: "",
            password: "",
            confirmPassword: "",
            userType: signUpRole,
            conditions: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange }) => (
            <Form className="signup-form-container">
              <h1>Welcome to dealfox</h1>
              <button
                type="button"
                onClick={() => HandleCloseSignup(dispatch)}
                className="btn-close"
                aria-label="Close"
              ></button>
              <div className="signup-form-field">
                <label htmlFor="firstName" className="signup-formItem">
                  First Name
                </label>
                <Field
                  type="text"
                  name="firstName"
                  className="signup-formItem"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error-message-signup-formItem"
                />
              </div>
              <div className="signup-form-field">
                <label htmlFor="lastName" className="signup-formItem">
                  Last Name
                </label>
                <Field
                  type="text"
                  name="lastName"
                  className="signup-formItem"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error-message-signup-formItem"
                />
              </div>
              <div className="signup-form-field">
                <label htmlFor="email" className="signup-formItem">
                  Email
                </label>
                <Field type="text" name="email" className="signup-formItem" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message-signup-formItem"
                />
              </div>
              <div className="signup-form-field">
                <label htmlFor="address" className="signup-formItem">
                  Address
                </label>
                <Field type="text" name="address" className="signup-formItem" />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error-message-signup-formItem"
                />
              </div>
              <div className="signup-form-field">
                <label htmlFor="postalCode" className="signup-formItem">
                  Postal Code
                </label>
                <Field
                  type="number"
                  name="postalCode"
                  className="signup-formItem"
                />
                <ErrorMessage
                  name="postalCode"
                  component="div"
                  className="error-message-signup-formItem"
                />
              </div>
              <div className="signup-form-field">
                <label htmlFor="city" className="signup-formItem">
                  City
                </label>
                <Field type="text" name="city" className="signup-formItem" />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="error-message-signup-formItem"
                />
              </div>
              <div className="signup-form-field">
                <label htmlFor="country" className="signup-formItem">
                  Country
                </label>
                <Field type="text" name="country" className="signup-formItem" />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="error-message-signup-formItem"
                />
              </div>
              <div className="signup-form-field">
                <label htmlFor="password" className="signup-formItem">
                  Password
                </label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="signup-formItem"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message-signup-formItem"
                />
                <button type="button" className="eye" onClick={togglePassword}>
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
              <div className="signup-form-field">
                <label htmlFor="confirmPassword" className="signup-formItem">
                  Confirm Password
                </label>
                <Field
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="signup-formItem"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error-message-signup-formItem"
                />
                <button
                  type="button"
                  className="eye"
                  onClick={toggleConfirmPassword}
                >
                  {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
              <div className="signup-form-field">
                <label htmlFor="conditions" className="signup-formItem">
                  I agree to dealfox Terms and Conditions
                </label>
                <Field
                  type="checkbox"
                  name="conditions"
                  className="signup-formItem"
                />
                <ErrorMessage
                  name="conditions"
                  component="div"
                  className="error-message-signup-formItem"
                />
              </div>
              <button type="submit" className="signup-button">
                SignUp
              </button>
            </Form>
          )}
        </Formik>
      </div>
    // </Modal>
  );
};

export default Signup;
