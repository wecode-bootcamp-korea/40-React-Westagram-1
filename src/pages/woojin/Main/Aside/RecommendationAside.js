import React from 'react';

function RecommendationAside({ userList }) {
  const randomNums = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const viewRecommendationList = userList.splice([0], [5]);
  return (
    <>
      <div className="recommendationTitleLine">
        <div className="asideTitle">회원님을 위한 추천</div>
        <a href="" className="seeAllOfList">
          모두보기
        </a>
      </div>
      <div className="nonScrollBox">
        {viewRecommendationList.map(user => {
          return (
            <div className="cellOfAside" key={user.id}>
              <div className="flexRaw">
                <a href="">
                  <img
                    className="profileImageForm"
                    alt="first recommendation friend"
                    src={user.srcProfileImage}
                  />
                </a>
                <div>
                  <a href="" className="profileNameForm">
                    {user.userID}
                  </a>
                  <div className="profileSubTextForm">
                    wecode_님 외 {randomNums(1, 10)}명이 팔로우합니다
                  </div>
                </div>
              </div>
              <button className="asideButtons">팔로우</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RecommendationAside;
