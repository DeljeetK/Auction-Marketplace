import React , { useEffect }  from "react";
import Modal from "react-modal";
import {
  HandleClosemodel,
  HandleOpenSignup,
} from "../../../services/modalService";
import { useDispatch, useSelector } from "react-redux";

const SelectUser = ({ isOpen }) => {
  const modal = useSelector((state) => state?.model?.isopen);
  console.log("Modal", modal);
  const dispatch = useDispatch();
  const handleOpenAndCloseSignup = (e) => {
    HandleOpenSignup(e, dispatch);
    HandleClosemodel(dispatch);
  };

  useEffect(() => {
    Modal.setAppElement("#root"); // Replace "#root" with the id of your root element
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <div>
        <h1>Join Us Today</h1>
        <button
          type="button"
          onClick={() => HandleClosemodel(dispatch)}
          className="btn-close"
          aria-label="Close"
        ></button>
        <p>
          Welcome to our Platform ! Whether you are looking to buy unique
          products or sell your own creation , we have got you covered .Signup
          now as a Vendor or Buyer and unlock the World of Possibilities.
        </p>
        <a
          className="btn btn-primary"
          value="buyer"
          onClick={(e) => handleOpenAndCloseSignup(e)}
          role="button"
        >
          Signup as a Buyer
        </a>
        <a
          className="btn btn-primary"
          value="vendor"
          onClick={(e) => handleOpenAndCloseSignup(e)}
          role="button"
        >
          Signup as a Vendor
        </a>
      </div>
    </Modal>
  );
};

export default SelectUser;
