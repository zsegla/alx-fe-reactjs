// src/services/githubApi.js
import axios from "axios";

const BASE_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
});

export const searchUsers = async (query) => {
  const response = await axiosInstance.get(`/search/users`, {
    params: { q: query },
  });
  return response.data;
};

export const getUser = async (username) => {
  const response = await axiosInstance.get(`/users/${username}`);
  return response.data;
};
