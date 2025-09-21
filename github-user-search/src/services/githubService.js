// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
});

// Advanced search for users by username, location, and minRepos
// Uses: https://api.github.com/search/users?q={query}
export const fetchUserData = async ({
  username,
  location,
  minRepos,
  page = 1,
  perPage = 10,
}) => {
  let query = "";
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;
  query = query.trim();
  try {
    const response = await axiosInstance.get(`/search/users`, {
      params: {
        q: query,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
