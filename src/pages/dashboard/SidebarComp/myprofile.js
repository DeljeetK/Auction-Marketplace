import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar";
import NavigationBar from "../../../components/navigationbar";
import "./../.././../css/sidebarseperation.css";
import { Link } from "react-router-dom";
import "../../../css/myprofile.css";
import axios from "axios";
import Searchbar from "../../../components/searchbar";

const MyProfile = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        if (!token) {
          console.log("Not Getting Token");
          return;
        }

        const headerResponse = await axios.get(
          `http://localhost:3001/header/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(headerResponse.data.userDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavigationBar/>
      <Searchbar/>
      <div className="seperate">
        <Sidebar />
        <div className="space">
          <div className="profile-edit">
            <h1 className="heading">My Profile</h1>
            <Link to="/myaccount/myprofile/editprofile">
              <button className="editprofile-button">Edit Profile</button>
            </Link>
          </div>
          <div className="container">
            <h3 className="heading">Personal details</h3>
            <div className="myprofile-box">
              <div className="myprofile-form-inline">
                <div className="myprofile-component">
                  <label className="myprofile-formItem1">
                    {data.firstName}
                  </label>
                  <label className="myprofile-formItem2">Phoneno</label>
                </div>
                <div className="myprofile-component">
                  <label className="myprofile-formItem1">Email</label>
                  <label className="myprofile-formItem2">-</label>
                </div>
                <div className="myprofile-component">
                  <label className="myprofile-formItem1">Address</label>
                  <label className="myprofile-formItem2">-</label>
                </div>
              </div>
              <div className="myprofile-form-inline">
                <div className="myprofile-component">
                  <label className="myprofile-formItem1">Member Since</label>
                  <label className="myprofile-formItem2">-</label>
                </div>
                <div className="myprofile-component">
                  <label className="myprofile-formItem1">Sold Auction</label>
                  <label className="myprofile-formItem2">-</label>
                </div>
                <div className="myprofile-component">
                  <label className="myprofile-formItem1">Current Offers</label>
                  <label className="myprofile-formItem2">-</label>
                </div>
                <div className="myprofile-component">
                  <label className="myprofile-formItem1">
                    Purchases Auctions
                  </label>
                  <label className="myprofile-formItem2">-</label>
                </div>
              </div>
            </div>
            <div className="profile-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
