import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Subject() {
  return <h1>Instagram</h1>;
}

function UserBtn() {
  const navigate = useNavigate();

  const [userIdValue, setUserIdValue] = useState('');
  const [userPwValue, setUserPwValue] = useState('');

  const getUserIdValue = e => {
    setUserIdValue(e.target.value);
  };

  const getUserPwValue = e => {
    setUserPwValue(e.target.value);
  };

  const changeColor = userIdValue.includes('@') && userPwValue.length >= 5;

  const buttonColor = changeColor ? 'active' : 'un_active';
  const disabledOn = changeColor ? false : true;

  const moveMain = e => {
    navigate('/main-jiin');
  };

  return (
    <div className="userButton">
      <input
        id="userIdValue"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={getUserIdValue}
      />
      <input
        id="userPwValue"
        type="password"
        placeholder="비밀번호"
        onChange={getUserPwValue}
      />
      <button
        id="userBtn"
        type="submit"
        disabled={disabledOn}
        onChange={changeColor}
        className={buttonColor}
        onClick={moveMain}
      >
        <p>로그인</p>
      </button>
    </div>
  );
}

function LostPassword() {
  return <div className="lostPwText">비밀번호를 잊으셨나요?</div>;
}

function JiinLogin() {
  return (
    <form id="instaWrap">
      <Subject />
      <UserBtn />
      <LostPassword />
    </form>
  );
}

export default JiinLogin;
