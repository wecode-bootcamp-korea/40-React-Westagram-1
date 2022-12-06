import React, { useState } from 'react';

function Buttons({ userList }) {
  const [switchOn, setSwitchOn] = useState(false);
  const switchColorEventHandler = () => {
    setSwitchOn(!switchOn);
  };

  const colorOfHeart = switchOn
    ? '/images/woojin/MainLayout/colorheart.png'
    : '/images/woojin/MainLayout/heart.png';

  const classNameForAnimation = switchOn ? 'clickAnimation' : null;

  const numberOfLike = switchOn
    ? Number(userList.countOfLike) + 1
    : userList.countOfLike;

  return (
    <>
      <section className="buttonOfArticle">
        <div className="buttonLeft">
          <button className="likeButtonArticle">
            <img
              className={classNameForAnimation}
              alt="like button "
              src={colorOfHeart}
              onClick={switchColorEventHandler}
            />
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
      <section className="likeSection">
        <div className="likeText">
          좋아요 <span id="NumOfLike">{numberOfLike}</span>개
        </div>
      </section>
    </>
  );
}

export default Buttons;
