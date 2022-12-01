import React, { useEffect, useState } from 'react';
import Comment from './Comment';

const Feed = ({}) => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('/data/userInfoList.json', { method: 'GET' })
      .then(response => response.json())
      .then(result => {
        setFeeds(result.userList);
      });
  });
  return (
    <div>
      {feeds.map(feed => {
        return (
          <>
            <div key={feed.feedId} userList={feed} />
            <div className="user_profile">
              <div className="userIcon">
                <img
                  src={feed.feedImage}
                  alt="User Image"
                  className="userIcon"
                />
                <div className="userName">{feed.userName}</div>
                <div className="moreInfo">...</div>
              </div>
              <div>
                <img
                  src={feed.feedImage}
                  alt="Article Image"
                  className="articleImage"
                />
              </div>
              <div className="feedReactions">
                <div className="feedRightIcons">
                  <img src="images/minkyung/red_heart.png" alt="heart-icon" />
                  <img
                    src="images/minkyung/bubble-chat.png"
                    alt="comment-icon"
                  />
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
                <span>{feed.userName}</span> {feed.content}
              </div>
              <Comment />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Feed;
