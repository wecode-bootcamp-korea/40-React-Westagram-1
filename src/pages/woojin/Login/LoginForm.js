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

  // button validation
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
      <button id="loginBtn" disabled={disabled} onClick={goToMain}>
        로그인
      </button>
    </>
  );
}

export default LoginForm;
