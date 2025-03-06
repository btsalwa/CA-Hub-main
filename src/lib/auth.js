import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Store token in localStorage
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem("token");
};

// Remove token from localStorage
export const removeToken = () => {
  localStorage.removeItem("token");
};

// Store user in localStorage
export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

// Get user from localStorage
export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Remove user from localStorage
export const removeUser = () => {
  localStorage.removeItem("user");
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return getToken() !== null;
};

// Check if user is admin
export const isAdmin = () => {
  const user = getUser();
  return user && user.is_admin;
};

// Register a new user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login user
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    const { access_token, user } = response.data;

    // Store token and user in localStorage
    setToken(access_token);
    setUser(user);

    return { access_token, user };
  } catch (error) {
    throw error.response.data;
  }
};

// Logout user
export const logout = () => {
  removeToken();
  removeUser();
};

// Create axios instance with auth header
export const authAxios = () => {
  const token = getToken();
  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};
