import React, { useEffect } from "react";
import "./indexBanner.css";
import BannerImg from "../../assets/anw-min.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IndexBanner({ topSearch }) {
  useEffect(() => {
    const animeList = topSearch;
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
              <strong>Top Search:</strong>
            </p>
              {topSearch.map((anime, index) => (
                <p key={index}>{anime}</p>
              ))}
          </div>
        </div>
        <div className="bannerImgContainer">
          <img src={BannerImg} />
        </div>
      </div>
    </div>
  );
}

export default IndexBanner;
