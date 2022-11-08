import api from "./apiConfig.js";

//NOTE: This is a template to be updated for products CRUD operations
// Another files called users.js will be created with this format for users to sign up, update, or delete their
// shopper profiles

export const getProducts = async () => {
  try {
    const response = await api.get("/students");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await api.get(`/students/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (studentData) => {
  try {
    const response = await api.post("/students", studentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (id, studentData) => {
  try {
    const response = await api.put(`/students/${id}`, studentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/students/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
