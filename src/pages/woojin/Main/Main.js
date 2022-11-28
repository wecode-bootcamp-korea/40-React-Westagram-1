import React from 'react';
import './Main.scss';

function WoojinMain() {
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
        {/* article */}
        <article>
          {/* article - header */}
          <header>
            <a className="profileLink" href="#">
              <img
                className="profileForm"
                alt="profile of author"
                src="/images/woojin/MainPosts/flower.jpg"
              />
              <div>
                <div className="profileNameForm ">Front-end Woojin Lim</div>
                <span className="profileSubTextForm">wework</span>
              </div>
            </a>
          </header>
          {/* article - posting image */}
          <section className="imagePostSection">
            <div className="imageOfArticle" />
          </section>
          {/* article - line of buttons */}
          <section className="buttonOfArticle">
            <div className="buttonLeft">
              <button className="likeButtonArticle">
                <img
                  alt="like button "
                  src="/images/woojin/MainLayout/heart.png"
                />
              </button>
              <button className="commentsButtonArticle">
                <img
                  alt="watch comments button"
                  src="/images/woojin/MainLayout/speech-bubble.png"
                />
              </button>
              <button className="sendButtonArticle">
                <img
                  alt="send button"
                  src="/images/woojin/MainLayout/send.png"
                />
              </button>
            </div>
            <div>
              <button className="bookMarkButtonArticle">
                <img
                  alt="book mark button"
                  src="/images/woojin/MainLayout/ribbon.png"
                />
              </button>
            </div>
          </section>
          {/* article - `like` count */}
          <section className="likeSection">
            <div className="likeText">
              좋아요 <span id="NumOfLike">163347</span>개
            </div>
          </section>
          {/* article - content include name of author, see more */}
          <section className="contentSection">
            <a href="#" className="profileNameForm">
              Front-end_Woojin_Lim
            </a>
            <span className="contentText">
              어디서나 매우 흔하게 보이는 다년생초로서 바닥에 딱 붙어서 꽃대
              대여섯 개가 쏙 올라온다. 톱니 모양의 잎새와 눈에 확 띄는 노란 꽃이
              인상적이다.
            </span>
            <span className="seeMoreContent">... 더 보기</span>
          </section>
          {/* article - hidden section for posted comments */}
          <section>
            <ul className="commentListSection"></ul>
          </section>
          {/* article - uploaded date */}
          <div className="uploadDate">1일 전</div>
          {/* article - to write new comments input */}
          <section className="commentSection">
            <img
              className="commentEmoji"
              alt="emoji icon for comments"
              src="/images/woojin/MainLayout/smile.png"
            />
            <div>
              <input
                className="addCommentText"
                type="text"
                placeholder="댓글 달기..."
              />
            </div>
            <button className="addCommentButton">게시</button>
          </section>
          {/* end of article */}
        </article>
        {/* main-right section */}
        <aside>
          {/* main-right profile section */}
          <div id="myProfileInfo">
            <div className="profileImgAndName">
              <a href="#">
                <img
                  id="myProfile"
                  alt="my profile logo"
                  src="/images/woojin/MainPosts/flower.jpg"
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
            <div className="storyTitleLine">
              <div className="asideTitle">스토리</div>
              <a href=" " className="seeAllOfList">
                모두보기
              </a>
            </div>
            {/* main-right - story box to scroll */}
            <div className="storyScrollBox">
              <div className="cellOfAside">
                <a href="#">
                  <img
                    className="profileImageForm"
                    alt="first stroy logo"
                    src="/images/woojin/MainPosts/beer.jpg"
                  />
                </a>
                <div>
                  <a href="" className="profileNameForm">
                    we_are_beer
                  </a>
                  <div className="profileSubTextForm">5분 전</div>
                </div>
              </div>

              <div className="cellOfAside">
                <a href="">
                  <img
                    className="profileImageForm"
                    alt="second stroy logo"
                    src="/images/woojin/MainPosts/cake.jpg"
                  />
                </a>
                <div>
                  <a href=" " className="profileNameForm">
                    we_are_cake
                  </a>
                  <div className="profileSubTextForm">19분 전</div>
                </div>
              </div>

              <div className="cellOfAside">
                <a href="">
                  <img
                    className="profileImageForm"
                    alt="third stroy logo"
                    src="/images/woojin/MainPosts/code.jpg"
                  />
                </a>
                <div>
                  <a href="" className="profileNameForm">
                    we_are_coder
                  </a>
                  <div className="profileSubTextForm">2시간 전</div>
                </div>
              </div>

              <div className="cellOfAside">
                <a href="">
                  <img
                    className="profileImageForm"
                    alt="fourth stroy logo"
                    src="/images/woojin/MainPosts/flower.jpg"
                  />
                </a>
                <div>
                  <a href=" " className="profileNameForm">
                    woojin_sub
                  </a>
                  <div className="profileSubTextForm">20시간 전</div>
                </div>
              </div>
            </div>
          </section>
          {/* main-right - recommendation */}
          <div className="recommendationTitleLine">
            <div className="asideTitle">회원님을 위한 추천</div>
            <a href="" className="seeAllOfList">
              모두보기
            </a>
          </div>
          {/* main-right - recommendation box */}
          <div className="nonScrollBox">
            <div className="cellOfAside">
              <div className="flexRaw">
                <a href="">
                  <img
                    className="profileImageForm"
                    alt="first recommendation friend"
                    src="/images/woojin/MainPosts/flower.jpg"
                  />
                </a>
                <div>
                  <a href="" className="profileNameForm">
                    wecode_bootcamp
                  </a>
                  <div className="profileSubTextForm">회원님을 위한 추천</div>
                </div>
              </div>
              <button className="asideButtons">팔로우</button>
            </div>

            <div className="cellOfAside">
              <div className="@">
                <a href="">
                  <img
                    className="profileImageForm"
                    alt="second recommendation friend"
                    src="/images/woojin/MainPosts/beach.jpg"
                  />
                </a>
                <div>
                  <a href="" className="profileNameForm">
                    wecode_Frontend
                  </a>
                  <div className="profileSubTextForm">
                    wecode님 외 1명이 팔로우합니다
                  </div>
                </div>
              </div>
              <button className="asideButtons">팔로우</button>
            </div>

            <div className="cellOfAside">
              <div className="flexRaw">
                <a href="">
                  <img
                    className="profileImageForm"
                    alt="third recommendation friend"
                    src="/images/woojin/MainPosts/coffee.jpg"
                  />
                </a>
                <div>
                  <a href="" className="profileNameForm">
                    wecode_Backend
                  </a>
                  <div className="profileSubTextForm">
                    wecode님 외 4명이 팔로우합니다
                  </div>
                </div>
              </div>
              <button className="asideButtons">팔로우</button>
            </div>

            <div className="cellOfAside">
              <div className="flexRaw">
                <a href="">
                  <img
                    className="profileImageForm"
                    alt="fourth recommendation friend"
                    src="/images/woojin/MainPosts/rabbits.jpg"
                  />
                </a>
                <div>
                  <a href="" className="profileNameForm">
                    wecode_Fullstack
                  </a>
                  <div className="profileSubTextForm">
                    wecode님이 팔로우합니다
                  </div>
                </div>
              </div>
              <button className="asideButtons">팔로우</button>
            </div>
          </div>
          {/* main-right - infos */}
          <div className="infoLetters">
            소개, 도움말, 홍보 센터, API, 채용 정보,
            <br />
            개인정보처리방침, 약관, 위치, 언어
          </div>
          <div className="infoLetters">2022 WESTAGRAM FROM WECODE</div>
        </aside>
      </main>
    </>
  );
}

export default WoojinMain;
