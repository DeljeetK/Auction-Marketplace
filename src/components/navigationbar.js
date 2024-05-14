import React from "react";
import { HandleOpenLogin, HandleOpenmodel } from ".././services/modalService";
import { useDispatch } from "react-redux";
import logo from "../images/dealfoxlogo.svg"
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav style={{margin:"10px"}}className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img style ={{height:"40px", marginRight:"20px" , marginLeft:"20px"}}src={logo} />
        <a style={{fontSize:"bold"}}className="navbar-brand" href="/">
         Dealfox
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a style={{fontFamily:"unset"}}className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a style={{fontFamily:"unset"}}
                className="nav-link active"
                aria-current="page"
                href="/aboutus"
              >
                About us
              </a>
            </li>
            <li className="nav-item">
              <a style={{fontFamily:"unset"}}
                className="nav-link active"
                aria-current="page"
                href="/products"
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a style={{fontFamily:"unset"}}
                className="nav-link active"
                aria-current="page"
                href="/testimonials"
              >
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a style={{fontFamily:"unset"}}
                className="nav-link active"
                aria-current="page"
                href="/contactus"
              >
                Contact us
              </a>
            </li>
            <li>
              <a style={{fontFamily:"unset"}}
                className="btn btn-dark"
                onClick={()=>navigate("/login")}
                aria-current="page"
              >
                Login
              </a>
            </li>
            <li>
              <a style={{fontFamily:"unset"}}
                className="btn btn-dark"
                onClick={() => navigate("/signup")}
                aria-current="page"
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
