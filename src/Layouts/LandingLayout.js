import { Navigate, Outlet } from "react-router-dom";
import path from "../path"
import { useSelector } from "react-redux";
import axios from "axios";
import useHeaders from "../helpers/useHeader";
import { useEffect, useState } from "react";

function LandingLayout() {
    const headers = useHeaders();
    // const { Buyertoken } = useSelector(state => state.buyerReducer);
    // const { SellerToken } = useSelector(state => state.sellerReducer);
    const [isAuthenticated, setisAuthenticated] = useState(false);

    // useEffect(() => {
    //   const authenticate = async function() {
    //     try {
    //         if(Buyertoken) {
    //             const res = await axios.get(`${path}/`, headers);
    //             setisAuthenticated(true);
    //         }

    //         if(SellerToken) {
    //             const res = await axios.get(`${path}/`, headers);
    //             setisAuthenticated(true);
    //         }

    //     } catch (error) {
    //         console.log(error)
    //     }
    //   }


    //   authenticate()
    // }, [])
    

    // if(isAuthenticated && Buyertoken) {
    //     return <Navigate to="/buyer/dashboard"/>
    // }

    // else if(isAuthenticated &&SellerToken) {
    //     return <Navigate to="/seller/dashboard"/>
    // }

    return (

      <Outlet/>
    )
}

export default LandingLayout