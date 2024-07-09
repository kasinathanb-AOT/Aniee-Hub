import axios from "axios";

const API_KEY = "f36afb8376msh9c4bcfbe1f16216p188ce2jsn15cffa42f239";
const base_url = "https://anime-db.p.rapidapi.com";

export const topSearches = async () => {
  const response = await axios.get(`${base_url}/anime/?page=1&size=5`, {
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "anime-db.p.rapidapi.com",
    },
  });

  return response.data
};
