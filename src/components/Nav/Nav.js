import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="navigator">
      <div className="navLeftSection">
        <img
          className="WestagramLogo navImages"
          alt="logo"
          src="/images/Nav/instagram.png"
        />
        <img
          className="navImages"
          src="/images/Nav/line.png"
          alt="vertical line"
        />
        <h1>
          <a href="#" className="WestagramTitle">
            Westagram
          </a>
        </h1>
      </div>
      <div className="navMiddleSection">
        <input type="text" className="searchBar" placeholder="검색" />
      </div>
      <div className="navRightSection">
        <button className="navButton">
          <img
            className="navImages"
            alt="explore"
            src="/images/Nav/explore.png"
          />
        </button>
        <button className="navButton">
          <img className="navImages" alt="heart" src="/images/Nav/heart.png" />
        </button>
        <button className="navButton">
          <img
            className="navImages"
            alt="profile"
            src="/images/Nav/profile.png"
          />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
