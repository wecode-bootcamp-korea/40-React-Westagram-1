import React from 'react';
import Buttons from './Buttons';
import Comments from './Comments/Comments';

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
            <Buttons userList={user} />
            <section className="contentSection">
              <a href="#" className="profileNameForm">
                {user.userID}
              </a>
              <span className="contentText">{user.content}</span>
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
