import React from "react";
import Sidebar from "../../../components/sidebar";
import NavigationBar from "../../../components/navigationbar";
import "./../.././../css/sidebarseperation.css";
import Searchbar from "../../../components/searchbar";

const Payments = () => {
  return (
    <div>
      <NavigationBar/>
      <Searchbar/>
      <div className="seperate">
        <Sidebar />
        <div className="space">
          <h1 className="heading">Payments</h1>
        </div>
      </div>
    </div>
  );
};

export default Payments;
