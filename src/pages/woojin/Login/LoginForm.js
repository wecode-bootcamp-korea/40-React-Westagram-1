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
  const conditionOfInput = email.indexOf('@') && password.length >= 5;
  let classOfButton = conditionOfInput ? 'active' : null;

  // set alert when values wrong
  const contentsOfAlert = {
    noId: '이메일을 입력해주세요',
    reId: '올바른 이메일 주소가 아닙니다.',
    noPw: '비밀번호를 입력해주세요.',
    rePw: '올바른 비밀번호가 아닙니다.',
    login: 'Welcome!',
  };

  const eventAlert = () => {
    if (email.length == 0) {
      alert(contentsOfAlert.noId);
    } else if (email.indexOf('@') == -1) {
      alert(contentsOfAlert.reId);
    } else if (password.length == 0) {
      alert(contentsOfAlert.noPw);
    } else if (password.length < 5) {
      alert(contentsOfAlert.rePw);
    } else {
      alert(contentsOfAlert.login);
      goToMain();
    }
  };

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
      <button id="loginBtn" className={classOfButton} onClick={eventAlert}>
        로그인
      </button>
    </>
  );
}

export default LoginForm;
