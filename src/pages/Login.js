import React from "react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../services/validator";
import useToast from "../helpers/useToast";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../css/signup.css";
import { loginUser } from "../redux/Reducers/userReducer";
import { useDispatch } from "react-redux";
import { HandleCloseLogin } from "../services/modalService";
import Modal from "react-modal";

const Login = ({ isOpenLogin }) => {
  const navigate = useNavigate();
  const toastOptions = useToast();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (values) => {
    console.log(values);
    dispatch(loginUser(values)).then((result) => {
      if (result.payload) {
        HandleCloseLogin(dispatch);
        // HandleOpenEmailVerify(dispatch);
        toast.success("Login successful", toastOptions);
        navigate("/products");
      } else {
        toast.error("Login Failed", toastOptions);
      }
    });
  };

  return (
    <Modal
      isOpen={isOpenLogin}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      contentLabel = "Example Modal"
    >
      <div className="container">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange }) => (
            <Form className="signup-form-container">
              <h1>Welcome to dealfox</h1>
              <button
                type="button"
                onClick={() => HandleCloseLogin(dispatch)}
                className="btn-close"
                aria-label="Close"
              ></button>
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
              <button type="submit" className="signup-button">
                SignUp
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default Login;
