import axios from "axios";

// const API_KEY = "f36afb8376msh9c4bcfbe1f16216p188ce2jsn15cffa42f239";
const base_url = "https://api.jikan.moe/v4";

export const topSearches = async () => {
  const response = await axios.get(`${base_url}/top/anime`);
  return response.data.data.slice(0, 5);
};