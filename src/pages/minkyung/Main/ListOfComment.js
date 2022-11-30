import React from 'react';

const ListOfComment = ({ commentBox }) => {
  return (
    <>
      {commentBox.map((value, index) => (
        <li key={index}>
          <span className="commentId">cute_gyuri</span> {value}
        </li>
      ))}
    </>
  );
};

export default ListOfComment;
