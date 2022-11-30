import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

function HakjinLogin() {
  const navigate = useNavigate();

  const [inputValues, setinputValues] = useState({ email: '', password: '' });
  const saveinputValues = event => {
    const { name, value } = event.target;
    setinputValues({ ...inputValues, [name]: value });
  };

  const buttonUse =
    inputValues.email.includes('@') && inputValues.password.length >= 5;
  const buttonAble = buttonUse ? false : true;
  const buttonColor = buttonUse ? 'able' : 'disable';
  return (
    <div className="login">
      <p id="logo">westagram</p>

      <div className="login_tool">
        <input
          className="login_text"
          id="email"
          name="email"
          type="text"
          onChange={saveinputValues}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          className="login_text"
          id="password"
          name="password"
          type="password"
          onChange={saveinputValues}
          placeholder="비밀번호"
        />
        <button
          id="button"
          disabled={buttonAble}
          className={buttonColor}
          onClick={() => {
            navigate('/main-hakjin');
          }}
        >
          로그인
        </button>
      </div>
      <a id="miss_pass_word" href="https://www.instagram.com/">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
}

export default HakjinLogin;
