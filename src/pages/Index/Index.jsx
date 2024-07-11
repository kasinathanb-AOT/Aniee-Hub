import React, { useEffect, useState } from "react";
import "./index.css";
import IndexBanner from "../../components/indexBanner/IndexBanner";
import Header from "../../components/header/header";
import { topSearches, trendingAnimes } from "../../services/animeServices";
import AnimeContainer from "../../components/animeContainer/animeContainer";

function Index() {
  const [top, setTop] = useState({});
  const [query, setQuery] = useState("");
  const [trending, setTrending] = useState({});

  useEffect(() => {
    const fetchTopSearches = async () => {
      try {
        const response = await topSearches();
        setTop(response);
      } catch (error) {
        console.error("Error fetching top searches:", error);
      }
    };

    fetchTopSearches();
  }, []);

  const handleSearch = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    const fetchTrendingAnimes = async () => {
      try {
        console.log("Fetching trending animes in component...");
        const response = await trendingAnimes();
        console.log("Trending animes response in component:", response);
        setTrending(response);
      } catch (error) {
        console.error("Error fetching trending animes in component:", error);
      }
    };

    fetchTrendingAnimes();
  }, []);

  return (
    <div className="indexPage">
      <Header />
      <IndexBanner topSearch={top} onSearch={handleSearch} />
      <AnimeContainer searchQuery={query} trending={trending} />
    </div>
  );
}

export default Index;
