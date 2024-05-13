import React from "react";
import "./../.././../css/sidebarseperation.css";
import NavigationBar from "../../../components/navigationbar";
import Sidebar from "../../../components/sidebar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { editProfileSchema } from "../../../../src/services/validator";
import "../../../css/editprofile.css";
import Searchbar from "../../../components/searchbar";

const EditProfile = () => {
  return (
    <div>
      <NavigationBar/>
      <Searchbar/>
      <div className="seperate">
        <Sidebar />
        <div className="space">
          <div className="profile-edit">
            <h1 className="heading">Edit Profile</h1>
          </div>
          <div className="container">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phoneNo: "",
                address: "",
                postalCode: "",
              }}
              validationSchema={editProfileSchema}
              //   onSubmit={handleSubmit}
            >
              {({ values, handleChange }) => (
                <Form className="editprofile-form-container">
                  <div className="editprofile-form-inline">
                    <div className="editprofile-form-field">
                      <label
                        htmlFor="firstName"
                        className="editprofile-formItem"
                      >
                        First Name
                      </label>
                      <Field
                        type="text"
                        name="firstName"
                        className="editprofile-formItem"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="error-message-editprofile-formItem"
                      />
                    </div>
                    <div className="editprofile-form-field">
                      <label
                        htmlFor="lastName"
                        className="editprofile-formItem"
                      >
                        Last Name
                      </label>
                      <Field
                        type="text"
                        name="lastName"
                        className="editprofile-formItem"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="error-message-editprofile-formItem"
                      />
                    </div>
                  </div>
                  <div className="editprofile-form-inline">
                    <div className="editprofile-form-field">
                      <label htmlFor="email" className="editprofile-formItem">
                        Email
                      </label>
                      <Field
                        type="text"
                        name="email"
                        className="editprofile-formItem"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error-message-editprofile-formItem"
                      />
                    </div>
                    <div className="editprofile-form-field">
                      <label htmlFor="phoneNo" className="editprofile-formItem">
                        Phone No
                      </label>
                      <Field
                        type="text"
                        name="phoneNo"
                        className="editprofile-formItem"
                      />
                      <ErrorMessage
                        name="phoneNo"
                        component="div"
                        className="error-message-editprofile-formItem"
                      />
                    </div>
                  </div>
                  <div className="editprofile-form-inline">
                    <div className="editprofile-form-field">
                      <label htmlFor="address" className="editprofile-formItem">
                        Address
                      </label>
                      <Field
                        type="text"
                        name="address"
                        className="editprofile-formItem"
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="error-message-editprofile-formItem"
                      />
                    </div>
                    <div className="editprofile-inline-elements">
                      <div className="editprofile-form-field">
                        <label
                          htmlFor="postalCode"
                          className="editprofile-formItems"
                        >
                          Postal Code
                        </label>
                        <Field
                          type="text"
                          name="postalCode"
                          className="editprofile-formItems"
                        />
                        <ErrorMessage
                          name="postalCode"
                          component="div"
                          className="error-message-editprofile-formItem"
                        />
                      </div>
                      <div className="editprofile-form-field">
                        <label htmlFor="city" className="editprofile-formItems">
                          City
                        </label>
                        <Field
                          type="text"
                          name="city"
                          className="editprofile-formItems"
                        />
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="error-message-editprofile-formItem"
                        />
                      </div>
                      <div className="editprofile-form-field">
                        <label
                          htmlFor="country"
                          className="editprofile-formItems"
                        >
                          Country
                        </label>
                        <Field
                          type="text"
                          name="country"
                          className="editprofile-formItems"
                        />
                        <ErrorMessage
                          name="country"
                          component="div"
                          className="error-message-editprofile-formItem"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="editprofile-inline-button">
                    <button type="submit" className="editprofile-button">
                      Cancel
                    </button>
                    <button type="submit" className="editprofile-button">
                      Save Details
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
