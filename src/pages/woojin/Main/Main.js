import React, { useEffect, useState } from 'react';
import './Main.scss';
import Feeds from './Feeds';
import AsideBottom from './AsideBottom';
import StoryAside from './StoryAside';
import RecommendationAside from './RecommendationAside';

function WoojinMain() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch('/data/woojin/userData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setUserList(data);
      });
  }, []);

  return (
    <>
      {/* navigator */}
      <nav className="navigator">
        <div className="navLeftSection">
          <img
            className="WestagramLogo navImages"
            alt="logo"
            src="/images/woojin/MainLayout/instagram.png"
          />
          <img
            className="navImages"
            src="/images/woojin/MainLayout/line.png"
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
              src="/images/woojin/MainLayout/explore.png"
            />
          </button>
          <button className="navButton">
            <img
              className="navImages"
              alt="heart"
              src="/images/woojin/MainLayout/heart.png"
            />
          </button>
          <button className="navButton">
            <img
              className="navImages"
              alt="profile"
              src="/images/woojin/MainLayout/profile.png"
            />
          </button>
        </div>
      </nav>
      {/* main page */}
      <main id="mainOfMain">
        <Feeds userList={userList} />
        <aside>
          {/* main-right profile section */}
          <div id="myProfileInfo">
            <div className="profileImgAndName">
              <a href="#">
                <img
                  id="myProfile"
                  alt="my profile logo"
                  src="/images/woojin/UserProfileimages/flower.jpg"
                />
              </a>
              <a className="profileNameForm" href=" ">
                woojin
              </a>
            </div>
            <button className="asideButtons">전환</button>
          </div>
          {/* main-right story section */}
          <section>
            {/* main-right - story box to scroll */}
            <StoryAside userList={userList} />
          </section>
          {/* main-right - recommendation */}
          <RecommendationAside userList={userList} />
          {/* main-right - infos */}
          <AsideBottom />
        </aside>
      </main>
    </>
  );
}

export default WoojinMain;
