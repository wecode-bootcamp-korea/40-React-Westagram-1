import React from 'react';

function MyProfileAside() {
  return (
    <div id="myProfileInfo">
      <div className="profileImgAndName">
        <a href="#">
          <img
            id="myProfile"
            alt="my profile logo"
            src="/images/woojin/UserProfileimages/flower.jpg"
          />
        </a>
        <a className="profileNameForm" href=" ">
          woojin
        </a>
      </div>
      <button className="asideButtons">전환</button>
    </div>
  );
}

export default MyProfileAside;
