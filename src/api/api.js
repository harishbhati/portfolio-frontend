import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, 
  // send cookies if needed
});

// Generic request wrapper with error handling
const request = async (method, url, data = null) => {
  try {
    const response = await axiosInstance({ method, url, data });
    return response.data;
  } catch (error) {
    console.error(`API Error [${method.toUpperCase()} ${url}]:`, error.message);
    throw error;
  }
};

// Specific API functions
export const getUserPortfolio = () => request("get", "/user/me/portfolio");
export const getTimeline = () => request("get", "/timeline/fetch");
export const getSkill = () => request("get", "/skill/fetch");
export const getProject = () => request("get", "/project/fetch");
export const getApplication = () => request("get", "/softwareapplication/fetch");

// Add more API calls here
// export const getProjects = () => request("get", "/projects");
// export const getSkills = () => request("get", "/skills");
// export const createApplication = (payload) => request("post", "/applications", payload);
