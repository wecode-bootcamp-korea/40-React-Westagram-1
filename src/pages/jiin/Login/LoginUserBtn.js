import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginUserBtn() {
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

  const navigate = useNavigate();

  const moveMain = e => {
    navigate('/main-jiin');
  };

  return (
    <div className="LoginUserBtn">
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
      <button
        id="userJoinBtn"
        type="submit"
        onClick={() => {
          navigate('/join-jiin');
        }}
      >
        <p>회원가입</p>
      </button>
    </div>
  );
}

export default LoginUserBtn;
