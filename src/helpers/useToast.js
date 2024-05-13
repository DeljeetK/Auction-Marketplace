function useToast() {
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    rtl: false,
    theme: "dark",
  };
  return toastOptions;
}
export default useToast;
