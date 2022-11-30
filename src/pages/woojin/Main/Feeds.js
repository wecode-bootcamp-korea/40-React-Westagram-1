import React from 'react';
import Comments from './Comments';

function Feeds() {
  return (
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
            <img alt="like button " src="/images/woojin/MainLayout/heart.png" />
          </button>
          <button className="commentsButtonArticle">
            <img
              alt="watch comments button"
              src="/images/woojin/MainLayout/speech-bubble.png"
            />
          </button>
          <button className="sendButtonArticle">
            <img alt="send button" src="/images/woojin/MainLayout/send.png" />
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
          어디서나 매우 흔하게 보이는 다년생초로서 바닥에 딱 붙어서 꽃대 대여섯
          개가 쏙 올라온다. 톱니 모양의 잎새와 눈에 확 띄는 노란 꽃이
          인상적이다.
        </span>
        <span className="seeMoreContent">... 더 보기</span>
      </section>
      {/* article - hidden section for posted comments */}
      <Comments />
      {/* end of article */}
    </article>
  );
}

export default Feeds;
