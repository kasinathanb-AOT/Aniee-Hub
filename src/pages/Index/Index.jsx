import React, { useEffect, useState } from "react";
import "./index.css";
import IndexBanner from "../../components/indexBanner/IndexBanner";
import Header from "../../components/header/header";
import { topSearches } from "../../services/animeServices";

function Index() {
  const [top, setTop] = useState({});

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

  return (
    <div className="indexPage">
      <Header />
      <IndexBanner topSearch={top} />
    </div>
  );
}

export default Index;
