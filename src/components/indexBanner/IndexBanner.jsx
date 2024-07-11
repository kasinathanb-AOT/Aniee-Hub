import React, { useState, useEffect } from "react";
import "./indexBanner.css";
import BannerImg from "../../assets/anw-min.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../loader";

function IndexBanner({ topSearch, onSearch }) {
  const [loading, setLoading] = useState(true);
  const [topSearches, setTopSearches] = useState([]);
  const [query, setQuery] = useState("");


  useEffect(() => {
    if (topSearch && Array.isArray(topSearch)) {
      setTopSearches(topSearch);
      setLoading(false);
    }
  }, [topSearch]);

  // passing the search query to the index page with props "onSearch"
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="indexBanner">
      <div className="indexBannerSub">
        <div className="left-container">
          <h1>An!ee Hub</h1>
          <div className="searchContainer">
            <input
              type="text"
              placeholder="Search Anime..."
              value={query}
              onChange={handleInputChange}
            />
            <button className="iconBtn" onClick={handleSearchClick}>
              <FontAwesomeIcon icon={faSearch} size="xl" />
            </button>
          </div>
          <div className="topSearch">
            <p>
              <strong>Top Search :</strong>
            </p>
            {loading ? (
              <Loader/>
            ) : (
              <div className="topText">
                {topSearches.map((anime, index) => (
                  <p key={index}>{anime.name}⭐</p>
                ))}
              </div>
            )}
          </div>
          <button className="iconBtn btnText">Watch An!me</button>
        </div>
        <div className="bannerImgContainer">
          <img src={BannerImg} alt="Banner" />
        </div>
      </div>
    </div>
  );
}

export default IndexBanner;
