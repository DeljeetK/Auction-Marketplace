import React from "react";
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="seperation">
      <div className="side-nav">
        {/* dashboard */}
        <div className="nav-category">
          
        </div>
        {/* options*/}
        <div className="navbar">
          <Link
            to="/myaccount/myprofile"
            className="option underline-remover"
          >
            <div className="dasboard ">
              
              <p className="nav-items">My Profile</p>
            </div>
          </Link>
          <Link
            to="/myaccount/ordermanagement"
            className="option underline-remover"
          >
            <div className="dasboard">
             
              <p className="nav-items">OrderManagement</p>
            </div>
          </Link>
          <Link
            className="option underline-remover"
            to="/myaccount/favouriteitem"
          >
            <div className="dasboard">
             
              <p className="nav-items">Favourite Item </p>
            </div>
          </Link>
          <Link
            className="option underline-remover"
            to="/myaccount/bidhistory"
          >
            <div className="dasboard">
              
              <p className="nav-items">Bid History</p>
            </div>
          </Link>
          <Link
            to="/myaccount/myauctions"
            className="option underline-remover"
          >
            <div className="dasboard">
              
              <p className="nav-items">my Auctions</p>
            </div>
          </Link>

          <Link
            to="/myaccount/payments"
            className="option underline-remover"
          >
            <div className="dasboard">
              
              <p className="nav-items">Payments</p>
            </div>
          </Link>
          <Link
            to="/myaccount/changepassword"
            className="option underline-remover"
          >
            <div className="dasboard">
              
              <p className="nav-items">Change Password</p>
            </div>
          </Link>
          <Link
            to="/myaccount/notification"
            className="option underline-remover"
          >
            <div className="dasboard">
              
              <p className="nav-items">Notifications</p>
            </div>
          </Link>
          <Link
            to="/myaccount/deleteaccount"
            className="option underline-remover"
          >
            <div className="dasboard">
              
              <p className="nav-items">Delete Account</p>
            </div>
          </Link>

          <Link to="/" className="option logout">
            <div className="dasboard">
              
              <p className="nav-items">Logout</p>

            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
