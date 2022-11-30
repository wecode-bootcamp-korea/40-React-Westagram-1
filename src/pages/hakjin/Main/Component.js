import React from 'react';

const CommentList = props => {
  return (
    <div className="userCommentBox">
      <p className="userName">{props.userName}</p>
      <div className="userComment">{props.userComment}</div>
      {/* <p className="userHeart" /> */}
    </div>
  );
};

export default CommentList;
