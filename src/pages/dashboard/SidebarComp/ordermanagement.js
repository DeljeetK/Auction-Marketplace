import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar";
import NavigationBar from "../../../components/navigationbar";
import "./../.././../css/sidebarseperation.css";
import "../../../css/editprofile.css";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Searchbar from "../../../components/searchbar";

// import SearchBar from "material-ui-search-bar";

const OrderManagement = () => {
  const columns = [
    { field: "id", headerName: "Order ID", width: 100 },
    { field: "firstName", headerName: "Order Date", width: 100 },
    { field: "email", headerName: "Item Details", width: 150 },
    { field: "email", headerName: "Order Status", width: 150 },
    { field: "address", headerName: "Bid Status", width: 150 },
    { field: "city", headerName: "Amount", width: 150 },
    { field: "country", headerName: "Payment", width: 150 },
    { field: "country", headerName: "history", width: 150 },

    // Add more columns as needed
  ];
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4567/auth/users");
      const formattedData = response.data.data.map((item) => ({
        ...item,
        id: item._id, // Assuming _id is a unique identifier for each row
      }));
      console.log(response, "this is response");
      setData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
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
            <h1 className="heading">Order Management</h1>
          </div>
          <div className="container">
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                pagination
                paginationMode="client"
                disableSelectionOnClick={true}
                // pageSize={25}
                rowsPerPageOptions={[25]}
                autoHeight
                checkboxSelection
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
