import React, { useEffect, useState } from "react";
import "./index.css";
import IndexBanner from "../../components/indexBanner/IndexBanner";
import Header from "../../components/header/header";
import { SearchAnime, topSearches, trendingAnimes } from "../../services/animeServices";
import AnimeContainer from "../../components/animeContainer/animeContainer";
import LoadingPage from "../../components/loadingPage/LoadingPage";

function Index() {
  const [mainLoading, setMainLoading] = useState(true);
  const [top, setTop] = useState({});
  const [query, setQuery] = useState("");
  const [trending, setTrending] = useState({});
  const [loading, setLoading] = useState(false);
  const [animeResult, setAnimeResult] = useState([]);

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

  const handleSearch = async (query) => {
    setQuery(query);
    setLoading(true);
    try {
      const response = await SearchAnime(query);
      setAnimeResult(response.animes);
      console.log('Anime search result:', response.animes);
    } catch (error) {
      console.error("Error in index while searching...", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchTrendingAnimes = async () => {
      try {
        const response = await trendingAnimes();
        setTrending(response);
        setMainLoading(false);
      } catch (error) {
        console.error("Error fetching trending animes in component:", error);
      }
    };

    fetchTrendingAnimes();
  }, []);

  return (
    <>
      {mainLoading ? (
        <LoadingPage />
      ) : (
        <div className="indexPage">
          <Header />
          <IndexBanner topSearch={top} onSearch={handleSearch} />
          <AnimeContainer searchQuery={query} trending={trending} animeResult={animeResult} loading={loading} />
        </div>
      )}
    </>
  );
  
}

export default Index;
