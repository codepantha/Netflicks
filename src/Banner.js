import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from './requests';

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const data = await response.data.results;
      setMovie(data[Math.floor(Math.random() * data.length - 1)]);
      return response;
    }

    fetchData();
  }, []);

  const backgroundImage = {
    backgroundSize: 'cover',
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition: 'center center'
  };

  const truncate = (string, n = 150) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <header className="banner" style={backgroundImage}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">{truncate(movie?.overview)}</p>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
