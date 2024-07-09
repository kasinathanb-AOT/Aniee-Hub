import React, { useState, useEffect } from "react";
import "./indexBanner.css";
import BannerImg from "../../assets/anw-min.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IndexBanner({ topSearch }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (topSearch && typeof topSearch === 'object' && topSearch.title) {
      setLoading(false);
    }
  }, [topSearch]);

  return (
    <div className="indexBanner">
      <div className="indexBannerSub">
        <div className="left-container">
          <h1>An!ee Hub</h1>
          <div className="searchContainer">
            <input type="text" placeholder="Search Anime..." />
            <button className="iconBtn">
              <FontAwesomeIcon icon={faSearch} size="xl" />
            </button>
          </div>
          <div className="topSearch">
            <p>
              <strong>Top Search :</strong>
            </p>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div>
                <p>{topSearch.title}⭐</p>
              </div>
            )}
          </div>
        </div>
        <div className="bannerImgContainer">
          <img src={BannerImg} alt="Banner" />
        </div>
      </div>
    </div>
  );
}

export default IndexBanner;
