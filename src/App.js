import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingLayout from "./Layouts/LandingLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import LandingPage from "./pages/dashboard/landingPage/landingpage";
import AboutUs from "./pages/dashboard/Commonpage/aboutus";
import Contactus from "./pages/dashboard/Commonpage/contactus";
import Products from "./pages/dashboard/Commonpage/products";
import Testimonials from "./pages/dashboard/Commonpage/testimonials";
import SelectUser from "./pages/dashboard/Modals/selectUser";
import EmailVerify from "./pages/dashboard/Modals/emailVerify";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import MyProfile from "./pages/dashboard/SidebarComp/myprofile";
import FavouriteItem from "./pages/dashboard/SidebarComp/favouriteitem";
import BidHistory from "./pages/dashboard/SidebarComp/bidhistory";
import OrderManagement from "./pages/dashboard/SidebarComp/ordermanagement";
import MyAuctions from "./pages/dashboard/SidebarComp/myauctions";
import Payments from "./pages/dashboard/SidebarComp/payments";
import ChangePassword from "./pages/dashboard/SidebarComp/changepass";
import Notification from "./pages/dashboard/SidebarComp/notification";
import DeleteAccount from "./pages/dashboard/SidebarComp/deleteaccount";
import EditProfile from "./pages/dashboard/SidebarComp/editprofile";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer";

function App() {
  const modal = useSelector((state) => state?.model?.isopen);
  const loginModal = useSelector((state) => state?.model?.isopenLogin);
  console.log("loginSelector", loginModal);
  const signupModal = useSelector((state) => state?.model?.isopenSignup);
  console.log("signUpSelector", signupModal);
  const emailVerifyModal = useSelector(
    (state) => state?.model?.isopenEmailVerify
  );
  // console.log(openEmailVerify, "isopenEmailVerify this is the value app.js");
  console.log("emailVerifyModal", emailVerifyModal);

  return (
    <>
      <BrowserRouter>
      
      
        <div>
          <SelectUser isOpen={modal} />
          <Login isOpenLogin={loginModal} />
          <Signup isOpenSignup={signupModal} />
          <EmailVerify isOpenEmailVerify={emailVerifyModal} />
        </div>
        {/* <Elements stripe={stripePromise}>
          <PaymentGateway />
        </Elements> */}
        <Routes>
          {/* -----------------------------LANDING LAYOUT------------------------------- */}
          <Route to="/" element={<LandingLayout />}>
            <Route index element={<LandingPage />} />
              <Route path="/myaccount" element={<MyProfile />}></Route>
                <Route path="/myaccount/myprofile" element={<MyProfile />}/>
                <Route path="/myaccount/myprofile/editprofile" element={<EditProfile />}/>
                <Route path="/myaccount/ordermanagement" element={<OrderManagement />} />
                <Route path="/myaccount/favouriteitem" element={<FavouriteItem />} />
                <Route path="/myaccount/bidhistory" element={<BidHistory />} />
                <Route path="/myaccount/myauctions" element={<MyAuctions />} />
                <Route path="/myaccount/payments" element={<Payments />} />
                <Route path="/myaccount/changepassword" element={<ChangePassword />} />
                <Route path="/myaccount/notification" element={<Notification />} />
                <Route path="/myaccount/deleteaccount" element={<DeleteAccount />} />
             
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/products" element={<Products />} />
            <Route path="/emailverify" element={<EmailVerify />} />
            <Route path="/testimonials" element={<Testimonials />} />
            {/* <Route path="/pay" element={<PaymentGateway />} /> */}
          </Route>

          {/* ----------------------------BUYER COMPONENTS--------------------------------- */}
          {/* <Route path="/buyer/dashboard" element={<BuyerLayout />}>
            <Route index element={<BidNow />} />
            <Route path="biddingengine" element={<BiddingEngine />} />
            <Route path="priceverification" element={<PriceVerification />} />
            <Route path="itemdetailpage" element={<ItemDetailPage />} />
            <Route path="itemsearch" element={<ItemSearch />} />
            <Route path="questionrealated" element={<QuestionRealated />} />
            <Route path="bookmarkeditem" element={<BookmarkedItem />} />
  
            <Route path="deletedaccount" element={<DeleteAccount />} />

            <Route path="notification" element={<Notification />} />
            <Route path="ordermanagement" element={<OrderManagement />} />
            <Route path="staticscreen" element={<StaticScreen />} />
            <Route path="trustlevel" element={<TrustLevel />} />
            <Route path="buyerprofile" element={<BuyerProfile />} />
          </Route> */}
          {/* --------------------------SELLER COMPONENTS--------------------------------- */}
          {/* <Route path="/seller/dashboard" element={<SellerLayout />}>
            <Route index element={<AuctionManagement />} />
            <Route path="itemmanagement" element={<ItemManagement />} />
            <Route path="managebids" element={<ManageBids />} />
            <Route path="ordermanagement" element={<OrderManagement />} />
            <Route path="paymentmanagement" element={<PaymentManagement />} />
            <Route path="questionmanagement" element={<QuestionManagement />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
      <ToastContainer/>
    </>
  );
}

export default App;
