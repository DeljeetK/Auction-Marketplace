// import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const PaymentGateway = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }
//     const cardElement = elements.getElement(CardElement);
//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: "card",
//         card: cardElement,
//       });
//       if (error) {
//         setError(error.message);
//       } else {
//         // Send paymentMethod.id to your server to process the payment.
//         console.log("PaymentMethod:", paymentMethod);
//         // Handle server-side payment processing here
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//     setLoading(false);
//   };
//   return (
//     // <div>PaymentGateway</div>
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe || loading}>
//         {loading ? "Processing..." : "Pay"}
//       </button>
//       {error && <div>{error}</div>}
//     </form>
//   );
// };
// export default PaymentGateway;
