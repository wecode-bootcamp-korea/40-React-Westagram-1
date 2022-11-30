import React from 'react';

function StoryAside({ userList }) {
  const randomNums = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <>
      <div className="storyTitleLine">
        <div className="asideTitle">스토리</div>
        <a href=" " className="seeAllOfList">
          모두보기
        </a>
      </div>
      <div className="storyScrollBox">
        {userList.map(user => {
          return (
            <div className="cellOfAside" key={user.id}>
              <a href="#">
                <img
                  className="profileImageForm"
                  alt="first stroy logo"
                  src={user.srcProfileImage}
                />
              </a>
              <div>
                <a href="" className="profileNameForm">
                  {user.userID}
                </a>
                <div className="profileSubTextForm">
                  {randomNums(1, 59)}분 전
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default StoryAside;
