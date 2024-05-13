import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar";
import "../../../css/sidebarseperation.css";
import NavigationBar from "../../../components/navigationbar";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Searchbar from "../../../components/searchbar";
const BidHistory = () => {
  const columns = [
    { field: "id", headerName: "Order ID", width: 150 },
    { field: "firstName", headerName: "Bid Id", width: 150 },
    { field: "lastName", headerName: "Order Date", width: 150 },
    { field: "email", headerName: "Item Details", width: 150 },
    { field: "address", headerName: "Amount", width: 150 },
    { field: "city", headerName: "Auction Status", width: 150 },
    { field: "country", headerName: "Details", width: 150 },

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
            <h1 className="heading">Bid History</h1>
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

export default BidHistory;
