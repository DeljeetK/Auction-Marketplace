import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./../.././../css/sidebarseperation.css";
import NavigationBar from "../../../components/navigationbar";
import Sidebar from "../../../components/sidebar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { editProfileSchema } from "../../../../src/services/validator";
import "../../../css/editprofile.css";
import Searchbar from "../../../components/searchbar";
import { useNavigate } from "react-router-dom";


const EditProfile = () => {
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("Not Getting Token");
        return;
      }
      const headerResponse = await axios.get(
        `http://localhost:4567/auth/user?id=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log('...........datauser', headerResponse.data.data  )
      setUserDetails(headerResponse.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    try {
      console.log(values, ">>>>>>>>>>>>>>>>>");
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("Not Getting Token");
        return;
      }
      const headerResponse = await axios.put(
        `http://localhost:4567/auth/user?id=${userId}`, values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(headerResponse, ">>>>>>>>>>>>>>>>>")
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


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
                firstName: userDetails.firstName || "",
                lastName: userDetails.lastName || "",
                email: userDetails.email || "",
                phoneNo: userDetails.phoneNo || "",
                address: userDetails.address || "",
                postalCode: userDetails.postalCode || "",
                city: userDetails.city || "",
                country: userDetails.country || "",
              }}
              validationSchema={editProfileSchema}
                onSubmit={handleSubmit}
                enableReinitialize
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
                        disabled
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
                    <button type="submit" className="editprofile-button" onClick={()=>navigate('/myaccount/myprofile')}>
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
