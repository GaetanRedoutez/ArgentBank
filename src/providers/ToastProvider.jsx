import { ToastContainer } from "react-toastify";
import "./toast.css";

export default function ToastProvider({ children }) {
  return (
    <>
      {children}
      <ToastContainer
        icon={false}
        autoClose={4000}
        closeOnClick={true}
        toastClassName={(context) =>
          `toast toast-${context?.type || "default"} toast-${
            context?.position || "top-right"
          }`
        }
      />
    </>
  );
}
