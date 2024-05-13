import NavigationBar from "../../../components/navigationbar";
import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Searchbar from "../../../components/searchbar";

const Products = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "city", headerName: "City", width: 150 },
    { field: "country", headerName: "Country", width: 150 },
    { field: "postalCode", headerName: "Postal Code", width: 150 },
    { field: "userType", headerName: "User Type", width: 150 },

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
      <NavigationBar />
      <Searchbar/>
      <div>
        <h1>Listing User Data</h1>
      </div>

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
  );
};

export default Products;
