import React from 'react';
import './animeSearchCard.css';

const AnimeSearchCard = ({ anime }) => {
  return (
    <div className="searchCard">
      <div className="rank">{anime.rating || 'N/A'}</div>
      <img src={anime.poster} alt="Anime Image" />
      <div className="title">{anime.name}</div>
    </div>
  );
};

export default AnimeSearchCard;
