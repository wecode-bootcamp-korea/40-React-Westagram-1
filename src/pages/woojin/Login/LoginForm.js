import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  // navigate to main from login page
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-woojin');
  };

  // set state email, password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // save state
  const saveUserId = event => {
    setEmail(event.target.value);
  };

  const saveUserPassword = event => {
    setPassword(event.target.value);
  };

  const clickEventHandler = () => {
    fetch('http://10.58.52.105:8000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          alert('환영합니다!');
          navigate('/main-woojin');
        }
      });
  };

  const disabled =
    email.indexOf('@') !== -1 && password.length >= 5 ? null : 'disabled';

  // JSX
  return (
    <>
      <input
        id="idInput"
        className="loginInput"
        type="text"
        placeholder="사용자 이메일"
        value={email}
        onChange={saveUserId}
      />
      <input
        id="pwInput"
        className="loginInput"
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={saveUserPassword}
      />
      <button
        id="loginBtn"
        type="button"
        disabled={disabled}
        onClick={clickEventHandler}
      >
        로그인
      </button>
    </>
  );
}

export default LoginForm;
