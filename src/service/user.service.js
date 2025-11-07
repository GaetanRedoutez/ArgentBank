import apiClient from "./apiClient";

export const login = async (email, password) => {
  const payload = { email, password };

  const response = await apiClient.post("/user/login", payload);

  return response;
};
