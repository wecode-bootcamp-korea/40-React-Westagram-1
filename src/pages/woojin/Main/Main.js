import React, { useEffect, useState } from 'react';
import './Main.scss';
import Feeds from './Feeds/Feeds';
import AsideBottom from './Aside/AsideBottom';
import StoryAside from './Aside/StoryAside';
import RecommendationAside from './Aside/RecommendationAside';
import MyProfileAside from './Aside/MyProfileAside';

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
      {/* main page */}
      <main id="mainOfMain">
        <Feeds userList={userList} />
        <aside>
          {/* main-right profile section */}
          <MyProfileAside />
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
