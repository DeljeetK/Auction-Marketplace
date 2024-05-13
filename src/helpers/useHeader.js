import { useSelector } from "react-redux";

function useHeaders() {
  const otptoken = useSelector((state) => state?.user.token);
    const headers = {
      headers: {
        Authorization: `Bearer ${otptoken}`,
      },
    };
    return headers;
  }
  export default useHeaders;