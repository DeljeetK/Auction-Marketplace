import React from "react";


const Searchbar = () => {
  return (
    <div style={{display:"flex", width: "60%", content: "center" , marginLeft:"20%" , marginTop:"20px", marginBottom:"20px" , borderColor:"white" }}>
      <input
        style={{ borderRadius: "10px"  }}
        type="search"
        class="form-control rounded"
        placeholder="What are you looking for"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <button
        style={{
          backgroundColor: "#FF7220",
          color: "white",
          borderColor: "white",
          height: "45px",
          borderRadius: "10px",
        }}
        type="button"
        class="btn btn-outline-primary"
        data-mdb-ripple-init
      >
        search
      </button>
    </div>
  );
};

export default Searchbar;
