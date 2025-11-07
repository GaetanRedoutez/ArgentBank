import apiClient from "./apiClient";

export const getProfile = async () => {
  const response = await apiClient.post("/user/profile");
  console.log(response);
  return response.data;
};
