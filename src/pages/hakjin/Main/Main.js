import React from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';

function HakjinMain() {
  return (
    <>
      <nav className="header">
        <div id="header_box">
          <div id="elements">
            <img
              alt="instargram logo"
              id="instaLogo"
              src="./images/hakjin/instagram_logo.png"
            />
            <div className="line" />
            <span id="logo">Westagram</span>
          </div>
          <div id="search_bar">
            <input id="search" type="text" placeholder="검색" />
            <img
              alt="Magnifying Glass"
              id="search_img"
              src="./images/hakjin/topsearch.png"
            />
          </div>

          <div id="icons">
            <img
              alt="compass"
              className="icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              alt="heart"
              className="icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              alt="human"
              className="icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </div>
      </nav>
      <main className="main">
        <div id="feeds">
          <article id="article">
            <img alt="my profile" id="me" src="./images/hakjin/me.jpg" />
            <span id="feeds_profile">metamro</span>
            <img alt="More options" id="more" src="./images/hakjin/more.png" />
            <img
              alt="watc"
              id="early_bird"
              src="./images/hakjin/early_bird.jpg"
            />
            <img alt="heart" className="icon" src="./images/hakjin/heart.png" />
            <img alt="chet" className="icon" src="./images/hakjin/chat.png" />
            <img alt="share" className="icon" src="./images/hakjin/share.png" />
            <img
              alt="save"
              className="icon"
              id="save"
              src="./images/hakjin/save-instagram.png"
            />
            <p className="mention">
              <img
                alt="acorn_down"
                id="other"
                src="./images/hakjin/acorn_down.jpg"
              />{' '}
              <b>acorn</b>님<b>외 4명</b>이 좋아합니다
            </p>
            <p className="mention">metamro "첫 시작인만큼 빠르게 도착!"</p>
            <div className="comment_box" />
            <div className="comment_bar">
              <input
                className="ripple_bar"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="ripple_button">게시</button>
            </div>
          </article>
        </div>
        {/* <!-- 오른쪽 프로필 --> */}
        <div className="right">
          <div id="main-right">
            <Link className="logout" to="../Login/Login.js">
              로그아웃
            </Link>
            <div id="right_profile">
              <img alt="my profile" id="profile" src="./images/hakjin/me.jpg" />
              <ul id="profile_text">
                <li id="nickname">metamro</li>
                <li id="my_name">김학진</li>
              </ul>
            </div>
          </div>

          {/* <!-- 스토리 --> */}
          <div id="story">
            <span className="right_title">스토리</span>
            <span className="right_more">모두 보기</span>
            <ul className="story_list">
              <li>
                <div className="story_profile">
                  <img
                    alt="acorn_down"
                    className="other_story"
                    src="./images/hakjin/acorn_down.jpg"
                  />
                  <ul className="other_profile_text">
                    <li className="other_nickname">metamro</li>
                    <li className="other_name">김학진</li>
                  </ul>
                </div>
              </li>
            </ul>

            <ul className="story_list">
              <li>
                <div className="story_profile">
                  <img
                    alt="acorn_down"
                    className="other_story"
                    src="./images/hakjin/acorn_down.jpg"
                  />
                  <ul className="other_profile_text">
                    <li className="other_nickname">metamro</li>
                    <li className="other_name">김학진</li>
                  </ul>
                </div>
              </li>
            </ul>

            <ul className="story_list">
              <li>
                <div className="story_profile">
                  <img
                    alt="acorn_down"
                    className="other_story"
                    src="./images/hakjin/acorn_down.jpg"
                  />
                  <ul className="other_profile_text">
                    <li className="other_nickname">metamro</li>
                    <li className="other_name">김학진</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* <!-- 친구추천 --> */}
          <div id="add_friends">
            <span className="right_title">회원님을 위한 추천</span>
            <span className="right_more">모두 보기</span>
            <ul className="story_list">
              <li>
                <div className="story_profile">
                  <img
                    alt="acorn_ghost"
                    className="other_story"
                    src="./images/hakjin/acorn_ghost.jpg"
                  />
                  <ul className="other_profile_text">
                    <li className="other_nickname">metamro</li>
                    <li className="other_name">김학진</li>
                  </ul>
                </div>
              </li>
            </ul>

            <ul className="story_list">
              <li>
                <div className="story_profile">
                  <img
                    alt="acorn_ghost"
                    className="other_story"
                    src="./images/hakjin/acorn_ghost.jpg"
                  />
                  <ul className="other_profile_text">
                    <li className="other_nickname">metamro</li>
                    <li className="other_name">김학진</li>
                  </ul>
                </div>
              </li>
            </ul>

            <ul className="story_list">
              <li>
                <div className="story_profile">
                  <img
                    alt="acorn_ghost"
                    className="other_story"
                    src="./images/hakjin/acorn_ghost.jpg"
                  />
                  <ul className="other_profile_text">
                    <li className="other_nickname">metamro</li>
                    <li className="other_name">김학진</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default HakjinMain;
