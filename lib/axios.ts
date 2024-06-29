/**
 * Creates an Axios instance with the specified base URL, timeout, and headers.
 *
 * @return {AxiosInstance} The created Axios instance.
 */
import axios from "axios";

export default function AxiosInstance() {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      "secret-key": "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      // Authorization: "Bearer your-token",
    },
  });

  return axiosInstance;
}
