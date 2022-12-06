import React, { useState } from 'react';
import LineOfComment from './LineOfComment';

function Comments() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  // state of input's value
  const saveTextInValue = event => {
    setText(event.target.value);
  };

  // add click event for upload comments
  const addCommentClickEvent = () => {
    setText('');
    setList([...list, { name: 'woojin', content: text }]);
  };

  // check exist of text in input field
  const checkExistText = () => {
    const check = text.length > 0 ? addCommentClickEvent() : null;
    return check;
  };

  // add keydown event(enter key) for upload comments
  const addCommentKeydownEvent = event => {
    if (event.keyCode === 13) {
      checkExistText();
    }
  };

  // change color(validation) post button
  const postButtonActive = text.length > 0 ? 'active' : null;

  // JSX
  return (
    <>
      <section>
        <ul className="commentListSection">
          <LineOfComment list={list} setList={setList} />
        </ul>
      </section>
      <div className="uploadDate">1일 전</div>
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
            value={text}
            onChange={saveTextInValue}
            onKeyDown={addCommentKeydownEvent}
          />
        </div>
        <button
          className={`addCommentButton ${postButtonActive}`}
          onClick={checkExistText}
        >
          게시
        </button>
      </section>
    </>
  );
}

export default Comments;
