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

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      const message = data?.message || "Une erreur est survenue";
      throw new Error(`[${status}] ${message}`);
    }
    throw new Error("Erreur réseau - vérifiez votre connexion");
  }
);

export default apiClient;
