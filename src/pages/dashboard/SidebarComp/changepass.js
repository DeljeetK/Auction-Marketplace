import React, { useState } from "react";
import Sidebar from "../../../components/sidebar";
import NavigationBar from "../../../components/navigationbar";
import "./../.././../css/sidebarseperation.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { changePasswordSchema } from "../../../services/validator";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import "../../../css/editprofile.css";
import Searchbar from "../../../components/searchbar";

const ChangePassword = () => {
  //------------------------FOR PASSWORD SHOW---------------------
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewConfirmPassword, setShowNewConfirmPassword] = useState(false);
  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };
  const toggleNewConfirmPassword = () => {
    setShowNewConfirmPassword(!showNewConfirmPassword);
  };
  return (
    <div>
      <NavigationBar/>
      <Searchbar/>
      <div className="seperate">
        <Sidebar />
        <div className="space">
          <div className="profile-edit">
            <h1 className="heading">Change Password</h1>
          </div>
          <div className="container">
            <Formik
              initialValues={{
                oldpassword: "",
                newPassword: "",
                confirmNewPassword: "",
              }}
              validationSchema={changePasswordSchema}
              //   onSubmit={handleSubmit}
            >
              {({ values, handleChange }) => (
                <Form className="editprofile-form-container">
                  <div className="editprofile-form-field">
                    <label htmlFor="password" className="editprofile-formItem">
                      Old Password
                    </label>
                    <Field
                      type={showOldPassword ? "text" : "password"}
                      name="oldpassword"
                      className="editprofile-formItem"
                    />
                    <ErrorMessage
                      name="oldpassword"
                      component="div"
                      className="error-message-editprofile-formItem"
                    />
                    <button
                      type="button"
                      className="eye"
                      onClick={toggleOldPassword}
                    >
                      {showOldPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  <div className="editprofile-form-field">
                    <label
                      htmlFor="newPassword"
                      className="editprofile-formItem"
                    >
                      New Password
                    </label>
                    <Field
                      type={showNewPassword ? "text" : "password"}
                      name="newPassword"
                      className="editprofile-formItem"
                    />
                    <ErrorMessage
                      name="newPassword"
                      component="div"
                      className="error-message-editprofile-formItem"
                    />
                    <button
                      type="button"
                      className="eye"
                      onClick={toggleNewPassword}
                    >
                      {showNewPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>

                  <div className="editprofile-form-field">
                    <label
                      htmlFor="confirmPassword"
                      className="editprofile-formItem"
                    >
                      Confirm Password
                    </label>
                    <Field
                      type={showNewConfirmPassword ? "text" : "password"}
                      name="confirmNewPassword"
                      className="editprofile-formItem"
                    />
                    <ErrorMessage
                      name="confirmNewPassword"
                      component="div"
                      className="error-message-editprofile-formItem"
                    />
                    <button
                      type="button"
                      className="eye"
                      onClick={toggleNewConfirmPassword}
                    >
                      {showNewConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  <button className="confirmpassword-button" type="submit">
                    Change Password
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
