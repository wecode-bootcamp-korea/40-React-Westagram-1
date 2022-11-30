import React from 'react';

const LineOfComment = ({ list }) => {
  return (
    <>
      {list.map((list, i) => (
        <li key={i}>
          <div>
            <span className="profileNameForm">{list.name}</span>
            {list.content}
          </div>
        </li>
      ))}
    </>
  );
};

export default LineOfComment;
