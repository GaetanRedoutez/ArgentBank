import apiClient from "./apiClient";

export const getProfile = async () => {
  const response = await apiClient.post("/user/profile");
  return response.data;
};

export const updateProfile = async ({ firstName, lastName }) => {
  const body = {
    firstName,
    lastName,
  };

  const response = await apiClient.put("/user/profile", body);
  return response.data;
};
