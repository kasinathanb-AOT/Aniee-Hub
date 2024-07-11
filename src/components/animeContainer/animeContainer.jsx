import React from "react";
import "./animeContainer.css";

function AnimeContainer({ searchQuery, trending }) {


  
  return (
    <div className="animeContainer">
      {searchQuery ? (
        <>
          <h1>
            You searched for:
            {searchQuery}
          </h1>
          <div className="aniCardContainer">
            <div className="aniCard"></div>
          </div>
        </>
      ) : (
        <div className="animeContainer">
          <h1>Trending</h1>
          <div className="animeContainerSub">
            {trending && trending.length > 0 ? (
              trending.map((anime, index) => (
                <div className="aniCardContainer" key={index}>
                  <div className="leftContainer">
                    <div className="rating">{anime.rank}</div>
                    <div className="titleContainer">
                      <p>{anime.name} ⭐</p>
                    </div>
                  </div>
                  <div className="aniCard">
                    <img src={anime.poster} alt="Anime Image" />
                  </div>
                </div>
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AnimeContainer;
