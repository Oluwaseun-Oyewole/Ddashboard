import { toast, ToastOptions } from "react-hot-toast";

export class Toasts {
  static success(message: string, options?: ToastOptions) {
    return toast.success(message, {
      ...options,
      style: {
        background: "green",
        color: "white",
      },
      className: "pakam-toast",
    });
  }

  static error(message: string, options?: ToastOptions) {
    return toast.error(message, {
      ...options,
      style: {
        background: "red",
        color: "white",
      },
      className: "pakam-toast",
    });
  }
}
