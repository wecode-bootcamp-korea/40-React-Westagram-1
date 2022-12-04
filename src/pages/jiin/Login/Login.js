import React from 'react';
import LoginUserBtn from './LoginUserBtn';
import './Login.scss';

function Subject() {
  return <h1>Instagram</h1>;
}

function LostPassword() {
  return <div className="lostPwText">비밀번호를 잊으셨나요?</div>;
}

function JiinLogin() {
  return (
    <form className="instaWrap">
      <Subject />
      <LoginUserBtn />
      <LostPassword />
    </form>
  );
}

export default JiinLogin;
