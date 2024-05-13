import React from "react";
import Sidebar from "../../../components/sidebar";
import "./../.././../css/sidebarseperation.css";
import NavigationBar from "../../../components/navigationbar";
import Searchbar from "../../../components/searchbar";

const DeleteAccount = () => {
  return (
    <div>
      <NavigationBar/>
      <Searchbar/>
      <div className="seperate">
        <Sidebar />
        <div className="space">
          <h1 className="heading">delete Account</h1>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
