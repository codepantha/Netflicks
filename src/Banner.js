import React from 'react';
import './Banner.css';

const Banner = () => {
  const backgroundImage = {
    backgroundSize: 'cover',
    backgroundImage:
      'url("https://i.pinimg.com/550x/8f/6e/5b/8f6e5bb87474fcd8e7a6c96e280b2684.jpg")',
    backgroundPosition: 'center center'
  };

  const truncate = (string, n = 150) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <header className="banner" style={backgroundImage}>
      <div className="banner__content">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">
          {truncate(`This is a test description
        This is a test description
        This is a test description
        This is a test description
        This is a test description
        This is a test description
        This is a test description
        This is a test description
        This is a test description
        This is a test description
        This is a test description
        This is a test description
        This is a test description
        This is a test description
        This is a test description
        This is a test description`)}
        </p>
      </div>

      <div className="banner--fadeButton" />
    </header>
  );
};

export default Banner;
