import React from 'react';
import './animeCard.css';

const AnimeCard = ({ anime }) => {
  return (
    <div className="aniCardContainer">
      <div className="leftContainer">
        <div className="rating">{anime.rank || anime.rating || "N/A"}</div>
        <div className="titleContainer">
          <p>{anime.name} ⭐</p>
        </div>
      </div>
      <div className="aniCard">
        <img src={anime.poster} alt="Anime Image" />
      </div>
    </div>
  );
};

export default AnimeCard;
