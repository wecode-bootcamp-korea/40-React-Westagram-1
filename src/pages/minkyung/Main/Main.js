import React, { useEffect, useState } from 'react';
import './Main.scss';

import Comment from './Comment';
import WestaAside from './WestaAside';
import Feed from './Feed';

const MinkyungMain = () => {
  // const [feeds, setFeeds] = useState([]);

  // useEffect(() => {
  //   fetch('/data/userInfoList.json', { method: 'GET' })
  //     .then(response => response.json())
  //     .then(result => {
  //       setFeeds(result.userList);
  //     });
  // });
  return (
    <>
      <div>
        <nav className="navigation">
          <div className="logo">
            <img src="images/minkyung/instagram.png" />
            <span>westagram</span>
          </div>
          <div className="searchBar">
            <input className="searchText" type="text" placeholder="검색" />
          </div>
          <div className="rightSideIcons">
            <img src="images/minkyung/explore.png" alt="Explore" />
            <img src="images/minkyung/heart.png" alt="Heart" />
            <span>
              <img src="images/minkyung/profile.png" alt="Profile" />
            </span>
          </div>
        </nav>
        <div className="line"></div>
      </div>
      <main>
        <div className="feeds">
          <div className="user_profile">
            <div className="userIcon">
              <img
                src="images/minkyung/dog.jpg"
                alt="User Image"
                className="userIcon"
              />
              <div className="userName">cute_gyuri</div>
              <div className="moreInfo">...</div>
            </div>
            <img
              src="images/minkyung/article.jpeg"
              className="articleImage"
              alt="Article Image"
            />
          </div>
          <div className="feedReactions">
            <div className="feedRightIcons">
              <img src="images/minkyung/red_heart.png" alt="heart-icon" />
              <img src="images/minkyung/bubble-chat.png" alt="comment-icon" />
              <img
                src="images/minkyung/direct-instagram.png"
                alt="direct-message"
              />
            </div>
            <span className="saveIcon">
              <img src="images/minkyung/save-instagram.png" alt="저장" />
            </span>
          </div>
          <div className="feedArticle">
            <span>cute_gyuri</span> 8000원이나 주고 산 밀크티. 곰돌이는 맛있어
            엄마곰 아빠곰 애기곰 아빠곰은 뚱뚱해 그래서 먹었지
          </div>
          <Comment />
          <Feed />
        </div>
        <div className="main-right">
          <div className="personalProfile">
            <img src="images/minkyung/dog.jpg" alt="profileImage" />
            <div className="personalId">
              cute_gyuri
              <div id="personalName">maltipoo | 규리</div>
            </div>
          </div>
          <div className="story">
            <div className="storyBar">
              <div>스토리</div>
              <div className="everyone">모두 보기</div>
            </div>
            <ul className="storyPeople">
              <li className="storyContents">
                <img alt="1st-profile" src="images/minkyung/profile1.jpeg" />
                <div className="ProfilesInfo">
                  <strong>r_u_running</strong>
                  16분 전
                </div>
              </li>
              <li className="storyContents">
                <img alt="2nd-profile" src="images/minkyung/profile2.jpeg" />
                <div className="ProfilesInfo">
                  <strong>cantdo_kendo</strong>
                  30분 전
                </div>
              </li>
              <li className="storyContents">
                <img alt="3rd-profile" src="images/minkyung/profile3.jpeg" />
                <div className="ProfilesInfo">
                  <strong>cat_ssg_win</strong>
                  49분 전
                </div>
              </li>
              <li className="storyContents">
                <img alt="4th-profile" src="images/minkyung/profile4.jpeg" />
                <div className="ProfilesInfo">
                  <strong>chocooooooo</strong>
                  1시간 전
                </div>
              </li>
              <li className="storyContents">
                <img alt="5th-profile" src="images/minkyung/profile5.jpeg" />
                <div className="ProfilesInfo">
                  <strong>madoo_love</strong>
                  3시간 전
                </div>
              </li>
              <li className="storyContents">
                <img alt="6th-profile" src="images/minkyung/profile6.jpeg" />
                <div className="ProfilesInfo">
                  <strong>old_n_newyork</strong>
                  20시간 전
                </div>
              </li>
            </ul>
            <div className="recommendation">
              <div className="recommendationBar">
                <div>회원님을 위한 추천</div>
                <div className="everyone">모두 보기</div>
              </div>
              <ul className="recommendationPeople">
                <li className="recoContents">
                  <img alt="7th-profile" src="images/minkyung/profile7.jpeg" />
                  <div className="recoColumn">
                    <strong>tuna_sushi</strong>
                    <p className="recoExp">r_u_running님 외...</p>
                  </div>
                  <span className="blueFollow">팔로우</span>
                </li>
                <li className="recoContents">
                  <img alt="8th-profile" src="images/minkyung/profile8.jpeg" />
                  <div className="recoColumn">
                    <strong>ducklingduckduck</strong>
                    <p className="recoExp">old_n_newyork님...</p>
                  </div>
                  <span className="blueFollow">팔로우</span>
                </li>
                <li className="recoContents">
                  <img alt="9th-profile" src="images/minkyung/profile9.jpeg" />
                  <div className="recoColumn">
                    <strong>5am_cafe</strong>
                    <p className="recoExp">chocooooooo님 외 ...</p>
                  </div>
                  <span className="blueFollow">팔로우</span>
                </li>
              </ul>
            </div>
            <div className="contract">
              <br /> © 2022 WESTAGRAM FROM WECODE
              <WestaAside />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default MinkyungMain;
