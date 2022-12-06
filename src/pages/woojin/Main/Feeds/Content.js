import React from 'react';

function Content({ userList }) {
  const checkLengthContent = userList => {
    const contentLength = userList.content.length;
    const a =
      contentLength >= 15
        ? userList.content.slice(0, 16)
        : userList.content.toString();
    const userListData = a.split(' ');
  };

  return (
    <section className="contentSection">
      <a href="#" className="profileNameForm">
        {userList.userID}
      </a>
      <span className="contentText">{checkLengthContent(userList)}</span>
      <span className="seeMoreContent">... 더 보기</span>
    </section>
  );
}

export default Content;
