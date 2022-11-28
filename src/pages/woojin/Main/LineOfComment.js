import React from 'react';

const LineOfComment = ({ list }) => {
  return (
    <>
      {list.map((list, i) => (
        <li key={i}>
          <span className="profileNameForm">{list.id}</span>
          {list.content}
        </li>
      ))}
    </>
  );
};

export default LineOfComment;
