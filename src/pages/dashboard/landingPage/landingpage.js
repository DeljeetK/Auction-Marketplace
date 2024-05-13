import React from "react";
import NavigationBar from "../../../components/navigationbar";
import Searchbar from "../../../components/searchbar";
import TopCategory from "./topcategory";
import DiscoverLatest from "./discoverlatest";
import TrendingAuction from "./trendingauction";

const LandingPage = () => {
  return (
    <div>
      <NavigationBar />
      <div style={{ marginLeft: "12%" }}>
        <h1 style={{ margin: "20px", display: "inline-flex" }}>
          Join the{" "}
          <h1
            style={{
              color: "#FF7220",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            {" "}
            DealFox{" "}
          </h1>{" "}
          sell and buy products with new way
        </h1>
      </div>
      <Searchbar />
      {/* ----------------------SECTION 1------------------------------------ */}
      <section>
        <div>
          <h2 style={{ margin: "20px", display: "inline-flex" }}>
            Top Bidding{" "}
            <h2
              style={{
                color: "#FF7220",
                marginLeft: "10px",
              }}
            >
              {" "}
              Category{" "}
            </h2>
          </h2>
        </div>
        <div>
          <TopCategory />
        </div>
      </section>
      {/* ----------------------------SECTION 2 ---------------------------------- */}
      <section></section>
      {/* -----------------------------SECTION 3 --------------------------------- */}
      <section>
        <div>
          <h2 style={{ margin: "20px", display: "inline-flex" ,marginTop:"70px"}}>
            Trending{" "}
            <h2
              style={{
                color: "#FF7220",
                marginLeft: "10px",
              }}
            >
              {" "}
              Auctions{" "}
            </h2>
          </h2>
          <div>
            <TrendingAuction/>
          </div>
        </div>
      </section>
      {/* -----------------------------SECTION 4 --------------------------------- */}
      <section>
        <div>
          <h2 style={{ margin: "20px", display: "inline-flex" }}>
            Discover the{" "}
            <h2
              style={{
                color: "#FF7220",
                marginLeft: "10px",
              }}
            >
              {" "}
              latest{" "}
            </h2>
          </h2>
        </div>
        <div>
          <DiscoverLatest/>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
