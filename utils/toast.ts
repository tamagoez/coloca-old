import { toast } from "react-toastify";

export function errortoast(message: string) {
  console.error(message);
  toast.error(message, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
