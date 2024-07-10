import React, { useEffect, useState } from "react";
import "./index.css";
import IndexBanner from "../../components/indexBanner/IndexBanner";
import Header from "../../components/header/header";
import { topSearches } from "../../services/animeServices";
import AnimeContainer from "../../components/animeContainer/animeContainer";

function Index() {
  const [top, setTop] = useState({});
  const [query, SetQuery] = useState("");

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
    SetQuery(query);
  };

  return (
    <div className="indexPage">
      <Header />
      <IndexBanner topSearch={top} onSearch={handleSearch} />
      <AnimeContainer searchQuery={query} trending={top} />
    </div>
  );
}

export default Index;