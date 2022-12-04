import React, { useState } from 'react';
import './Join.scss';

function JoinUserBtn() {
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

  const joinUp = () => {
    if (changeColor) {
      fetch('http://10.58.52.102:3000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email: userIdValue,
          password: userPwValue,
        }),
      })
        .then(response => response.json())
        .then(data => console.log(data));
    } else {
      alert('올바른 값을 입력하세요');
    }
  };

  return (
    <div className="JoinUserBtn">
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
        type="button"
        disabled={disabledOn}
        className={buttonColor}
        onClick={joinUp}
      >
        <p>회원가입</p>
      </button>
    </div>
  );
}

export default JoinUserBtn;
