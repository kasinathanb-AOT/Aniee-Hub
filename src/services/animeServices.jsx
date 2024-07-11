import axios from "axios";

// const API_KEY = "f36afb8376msh9c4bcfbe1f16216p188ce2jsn15cffa42f239";
// const base_url = "https://api.jikan.moe/v4";
const base_url = "http://localhost:4000"

export const topSearches = async () => {
  const response = await axios.get(`${base_url}/anime/home`);
  return response.data.top10Animes.today.slice(0, 3);
};


export const trendingAnimes = async () => {
  try {
    const response = await axios.get(`${base_url}/anime/home`);
    const top10Animes = response.data.trendingAnimes;
    return top10Animes.slice(0, 50);
  } catch (error) {
    console.error("Error fetching trending animes:", error);
  }
};


export const SearchAnime = async (title) => {
  try {
    console.log('SearchAnime function called with title:', title);
    
    if (!title) {
      throw new Error('Title parameter is required');
    }

    const response = await axios.get(`${base_url}/anime/search?q=${title}&page=1`);

    console.log('Response status:', response.status);
    console.log('Response data:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error while searching:', error.message);
    if (error.response) {
      console.error('Error response status:', error.response.status);
      console.error('Error response data:', error.response.data);
    }
  }
};