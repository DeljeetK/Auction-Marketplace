import React from "react";
import Sidebar from "../../../components/sidebar";
import NavigationBar from "../../../components/navigationbar";
import "./../.././../css/sidebarseperation.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "../../../css/notification.css";
import Searchbar from "../../../components/searchbar";

const Notification = () => {
  return (
    <div>
      <NavigationBar/>
      <Searchbar/>
      <div className="seperate">
        <Sidebar />
        <div className="space">
          <div className="profile-edit">
            <h1 className="heading">Notifications</h1>
          </div>
          <div className="container">
            <div className="notification-box">
              <h4 className="heading">Push Notification</h4>
              <div className="notification-form-inline">
                <p>
                  I want to be informed about the upcoming end of an auction I
                  am participating in
                </p>
                <FormControlLabel control={<Switch defaultChecked={false} />} />
              </div>
              <div className="notification-form-inline">
                <p>
                  I am participating in, I should be informed 24 hours before
                  the end that it is concluding
                </p>
                <FormControlLabel control={<Switch defaultChecked={false} />} />
              </div>
              <div className="notification-form-inline">
                <p>
                  I want to be informed about the status of the auction so I can
                  respond accordingly
                </p>
                <FormControlLabel control={<Switch defaultChecked={false} />} />
              </div>
              <div className="notification-form-inline">
                <p>If the auction is over and I have won </p>
                <FormControlLabel control={<Switch defaultChecked={false} />} />
              </div>
              <div className="notification-form-inline">
                <p>If the auction is over and I have lost </p>
                <FormControlLabel control={<Switch defaultChecked={false} />} />
              </div>
            </div>
            <div className="notification-box">
              <h4 className="heading">Email Notification</h4>
              <div className="notification-form-inline">
                <p>
                  I want to be informed about the upcoming end of an auction I
                  am participating in
                </p>
                <FormControlLabel control={<Switch defaultChecked={false} />} />
              </div>
              <div className="notification-form-inline">
                <p>
                  I am participating in, I should be informed 24 hours before
                  the end that it is concluding
                </p>
                <FormControlLabel control={<Switch defaultChecked={false} />} />
              </div>
              <div className="notification-form-inline">
                <p>
                  I want to be informed about the status of the auction so I can
                  respond accordingly
                </p>
                <FormControlLabel control={<Switch defaultChecked={false} />} />
              </div>
              <div className="notification-form-inline">
                <p>If the auction is over and I have won </p>
                <FormControlLabel control={<Switch defaultChecked={false} />} />
              </div>
              <div className="notification-form-inline">
                <p>If the auction is over and I have lost </p>
                <FormControlLabel control={<Switch defaultChecked={false} />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
