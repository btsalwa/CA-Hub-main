import axios from "axios";
import { getToken } from "./auth";

const API_URL = "http://localhost:5000/api";

// Create axios instance with auth header
const createAuthAxios = () => {
  const token = getToken();
  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};

// News Items API
export const getNewsItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/news`);
    return response.data;
  } catch (error) {
    console.error("Error fetching news items:", error);
    return [];
  }
};

export const getNewsItem = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/news/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching news item ${id}:`, error);
    return null;
  }
};

export const createNewsItem = async (data) => {
  try {
    const authAxios = createAuthAxios();
    const response = await authAxios.post(`/news`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating news item:", error);
    throw error;
  }
};

export const updateNewsItem = async (id, data) => {
  try {
    const authAxios = createAuthAxios();
    const response = await authAxios.put(`/news/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating news item ${id}:`, error);
    throw error;
  }
};

export const deleteNewsItem = async (id) => {
  try {
    const authAxios = createAuthAxios();
    await authAxios.delete(`/news/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting news item ${id}:`, error);
    return false;
  }
};

// Events API
export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const getEvent = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/events/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching event ${id}:`, error);
    return null;
  }
};

export const createEvent = async (data) => {
  try {
    const authAxios = createAuthAxios();
    const response = await authAxios.post(`/events`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const updateEvent = async (id, data) => {
  try {
    const authAxios = createAuthAxios();
    const response = await authAxios.put(`/events/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating event ${id}:`, error);
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    const authAxios = createAuthAxios();
    await authAxios.delete(`/events/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting event ${id}:`, error);
    return false;
  }
};

// Newsletters API
export const getNewsletters = async () => {
  try {
    const response = await axios.get(`${API_URL}/newsletters`);
    return response.data;
  } catch (error) {
    console.error("Error fetching newsletters:", error);
    return [];
  }
};

export const getNewsletter = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/newsletters/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching newsletter ${id}:`, error);
    return null;
  }
};

export const createNewsletter = async (data) => {
  try {
    const authAxios = createAuthAxios();
    const response = await authAxios.post(`/newsletters`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating newsletter:", error);
    throw error;
  }
};

export const updateNewsletter = async (id, data) => {
  try {
    const authAxios = createAuthAxios();
    const response = await authAxios.put(`/newsletters/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating newsletter ${id}:`, error);
    throw error;
  }
};

export const deleteNewsletter = async (id) => {
  try {
    const authAxios = createAuthAxios();
    await authAxios.delete(`/newsletters/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting newsletter ${id}:`, error);
    return false;
  }
};

// Success Stories API
export const getSuccessStories = async () => {
  try {
    const response = await axios.get(`${API_URL}/success-stories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching success stories:", error);
    return [];
  }
};

export const getSuccessStory = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/success-stories/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching success story ${id}:`, error);
    return null;
  }
};

export const createSuccessStory = async (data) => {
  try {
    const authAxios = createAuthAxios();
    const response = await authAxios.post(`/success-stories`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating success story:", error);
    throw error;
  }
};

export const updateSuccessStory = async (id, data) => {
  try {
    const authAxios = createAuthAxios();
    const response = await authAxios.put(`/success-stories/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating success story ${id}:`, error);
    throw error;
  }
};

export const deleteSuccessStory = async (id) => {
  try {
    const authAxios = createAuthAxios();
    await authAxios.delete(`/success-stories/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting success story ${id}:`, error);
    return false;
  }
};

// Technical Resources API
export const getTechnicalResources = async () => {
  try {
    const response = await axios.get(`${API_URL}/technical-resources`);
    return response.data;
  } catch (error) {
    console.error("Error fetching technical resources:", error);
    return [];
  }
};

export const getTechnicalResource = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/technical-resources/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching technical resource ${id}:`, error);
    return null;
  }
};

export const createTechnicalResource = async (data) => {
  try {
    const authAxios = createAuthAxios();
    const response = await authAxios.post(`/technical-resources`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating technical resource:", error);
    throw error;
  }
};

export const updateTechnicalResource = async (id, data) => {
  try {
    const authAxios = createAuthAxios();
    const response = await authAxios.put(`/technical-resources/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating technical resource ${id}:`, error);
    throw error;
  }
};

export const deleteTechnicalResource = async (id) => {
  try {
    const authAxios = createAuthAxios();
    await authAxios.delete(`/technical-resources/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting technical resource ${id}:`, error);
    return false;
  }
};
