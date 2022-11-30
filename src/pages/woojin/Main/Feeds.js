import React from 'react';
import Comments from './Comments';

const Feeds = ({ userList }) => {
  return (
    <article>
      {/* article - header */}
      {userList.map(user => {
        return (
          <div className="feeds" key={user.id}>
            <header>
              <a className="profileLink" href="#">
                <img
                  className="profileForm"
                  alt="profile of author"
                  src={user.srcProfileImage}
                />
                <div>
                  <div className="profileNameForm ">{user.userID}</div>
                  <span className="profileSubTextForm">{user.location}</span>
                </div>
              </a>
            </header>
            <section className="imagePostSection">
              <img
                className="imageOfArticle"
                alt="feed"
                src={user.srcFeedImage}
              />
            </section>
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
            <section className="likeSection">
              <div className="likeText">
                좋아요 <span id="NumOfLike">163347</span>개
              </div>
            </section>
            <section className="contentSection">
              <a href="#" className="profileNameForm">
                {user.userID}
              </a>
              <span className="contentText">
                어디서나 매우 흔하게 보이는 다년생초로서 바닥에 딱 붙어서 꽃대
                대여섯 개가 쏙 올라온다. 톱니 모양의 잎새와 눈에 확 띄는 노란
                꽃이 인상적이다.
              </span>
              <span className="seeMoreContent">... 더 보기</span>
            </section>
            <Comments />
          </div>
        );
      })}
    </article>
  );
};

export default Feeds;
