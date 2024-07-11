import React from "react";
import "./animeContainer.css";
import Loader from "../loader";
import AnimeSearchCard from "../AnimeSearchCard/AnimeSearchCard";
import AnimeCard from "../AnimeCard/AnimeCard";

function AnimeContainer({ searchQuery, trending, animeResult, loading }) {
  return (
    <div className="animeContainer">
      {loading ? (
        <Loader />
      ) : (
        <>
          {searchQuery ? (
            <div className="animeContainer">
              <h1>You searched for: {searchQuery}</h1>
              <div className="animeContainerSub">
                {animeResult && animeResult.length > 0 ? (
                  animeResult.map((anime, index) => (
                    <AnimeSearchCard key={index} anime={anime} />
                  ))
                ) : (
                  <p>No results found</p>
                )}
              </div>
            </div>
          ) : (
            <div className="animeContainer">
                <h1>Trending</h1>
              <div className="animeContainerSub">
                {trending && trending.length > 0 ? (
                  trending.map((anime, index) => (
                    <AnimeCard key={index} anime={anime} />
                  ))
                ) : (
                  <Loader />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AnimeContainer;