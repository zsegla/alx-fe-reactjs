// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
});

export const fetchUserData = async (username) => {
  try {
    const response = await axiosInstance.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
