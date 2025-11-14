import apiClient from "./apiClient";

export const getProfile = async () => {
  const response = await apiClient.post("/user/profile");
  return response.data;
};
