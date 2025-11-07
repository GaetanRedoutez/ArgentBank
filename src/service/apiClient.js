import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

/**
 * Axios instance configured with a base URL and a timeout.
 * This client is used to make HTTP requests to the API.
 *
 * @constant
 * @type {AxiosInstance}
 * @property {string} baseURL - The base URL for the API requests.
 * @property {number} timeout - The timeout in milliseconds for the requests.
 */
const apiClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      const message = data?.message || "An error occurred";
      throw new Error(`[${status}] ${message}`);
    }
    throw new Error("Network error");
  }
);

export default apiClient;
