import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) setShow(true);
    else setShow(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
          className="nav__logo"
        />
        <img
          src="https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black-thumbnail.png"
          alt="avatar"
          className="nav__avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
