import React from "react";
import Modal from "react-modal";
import { useDispatch} from "react-redux";
import { HandleCloseEmailVerify } from "../../../services/modalService";
import "../../../css/emailverify.css";
import { useNavigate } from "react-router-dom";
import useToast from "../../../helpers/useToast";
import { toast } from "react-toastify";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useHeaders from "../../../helpers/useHeader";

const EmailVerify = ({ isOpenEmailVerify }) => {
  const dispatch = useDispatch();
  const header = useHeaders();
  const navigate = useNavigate();
  const toastOptions = useToast();

  const handleVerifyOTP = async (values, { setSubmitting }) => {
    try {
      // console.log(otptoken)
      const response = await axios.post(
        "http://localhost:4567/auth/otp",
        {
          otp: values.otp,
        },
        header
      );

      console.log(response, "this is response");
      if (response.data.statusCode == 200) {
        toast.success("Email verified successfully", toastOptions);
        HandleCloseEmailVerify(dispatch);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error verifying OTP. Please try again.", toastOptions);
    }
    setSubmitting(false);
  };

  return (
    <Modal
      isOpen={isOpenEmailVerify}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <Formik initialValues={{ otp: "" }} onSubmit={handleVerifyOTP}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <button
                type="button"
                onClick={() => HandleCloseEmailVerify(dispatch)}
                className="btn-close"
                aria-label="Close"
              ></button>
              <p>Please enter the OTP sent to your email address.</p>
              <div className="input-group mb-3">
                <Field
                  type="text"
                  name="otp"
                  className="form-control otp-input"
                  maxLength="6" // Adjust the max length as needed
                />
              </div>
              <ErrorMessage
                name="otp"
                component="div"
                className="error-message"
              />
              <button type="submit" disabled={isSubmitting}>
                Verify OTP
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default EmailVerify;
