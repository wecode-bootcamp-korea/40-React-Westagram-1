import React, { useState } from 'react';
import ListofComment from './ListOfComment';
// import './Main.scss';

const Comment = () => {
  //input에서 댓글 값 받기
  const [comment, setComment] = useState('');
  const onChange = e => setComment(e.target.value);
  //input에서 받은 댓글 값 배열에 넣기
  const [commentBox, setCommentBox] = useState([]);
  const commentSubmit = e => {
    e.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentBox(commentValueList => [...commentValueList, comment]);
    setComment('');
  };

  //JSX
  return (
    <section className="user-comment">
      <div className="commentLine">
        <ul className="commentList">
          <ListofComment commentBox={commentBox} />
          <form onSubmit={commentSubmit}>
            <input
              type="text"
              className="commentSpace"
              placeholder="댓글 달기..."
              value={comment}
              onChange={onChange}
            />
            <button
              type="button"
              className="commentBtn"
              onClick={commentSubmit}
            >
              게시
            </button>
          </form>
        </ul>
      </div>
    </section>
  );
};

export default Comment;
