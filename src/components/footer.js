import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import dealfoxlogo from "../images/dealfoxlogo.svg"

const Footer = () => {
  return (
    <div style={{backgroundColor:"ButtonFace"}}>
    <footer style={{backgroundColor:"#F5F5F5"}} class="text-center text-lg-start text-muted">
      <section class="d-flex justify-content-center justify-content-lg-between border-bottom">
        <div class="me-5 d-none d-lg-block"></div>
      </section>
      <section class="">
        <div class="container text-center text-md-start mt-5">
          {/* <!-- Grid row --> */}
          <div class="row mt-3">
            {/* <!-- Grid column --> */}
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
              <h6 class="text-uppercase fw-bold mb-4">
                <img style ={{height:"70px"}}src={dealfoxlogo}/>
                <i class="fas fa-gem me-3"></i>Dealfox
              </h6>
              <p>Copyright © 2024 Dealfox</p>
              <p>All rights reserved</p>
              <div>
                <a href="" class="me-4 text-reset">
                  <i class="fab fa-facebook-f">
                    <FaInstagram />
                  </i>
                </a>
                <a href="" class="me-4 text-reset">
                  <i class="fab fa-twitter">
                    <FaTwitter />
                  </i>
                </a>
                <a href="" class="me-4 text-reset">
                  <i class="fab fa-google">
                    <FaYoutube />
                  </i>
                </a>
                <a href="" class="me-4 text-reset">
                  <i class="fab fa-instagram">
                    <GoGlobe />
                  </i>
                </a>
              </div>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <a href="aboutus" class="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Blog
                </a>
              </p>
              <p>
                <a href="contactus" class="text-reset">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="/testimonials" class="text-reset">
                  Testimonials
                </a>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">Support</h6>
              <p>
                <a href="#!" class="text-reset">
                  Help center
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Terms of service
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Legal
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Status
                </a>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">Category</h6>
              <p>
                <a href="#!" class="text-reset">
                  Sporting Goods
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Property
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  clothing for Women
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Bags and wallets
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Instruments
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Links  --> */}

      {/* <!-- Copyright --> */}
      {/* <div class="text-center p-4">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div> */}
      {/* <!-- Copyright --> */}
    </footer>
    </div>
  );
};

export default Footer;
