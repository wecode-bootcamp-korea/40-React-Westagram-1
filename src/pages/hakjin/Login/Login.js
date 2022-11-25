import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function HakjinLogin() {
  const navigate = useNavigate();

  const [id, setid] = useState('');
  const saveUserid = e => {
    setid(e.target.value);
    console.log(e.target.value);
  };

  const [pw, setpw] = useState('');
  const saveUserpw = e => {
    setpw(e.target.value);
    console.log(e.target.value);
  };
  const buttonUse = id.includes('@') && pw.length >= 5;
  const buttonAble = buttonUse ? false : true;
  const buttonColor = buttonUse ? 'able' : 'disable';
  return (
    <div className="login">
      <p id="logo">westagram</p>

      <div className="login_tool">
        <input
          className="login_text"
          id="email"
          type="text"
          onChange={saveUserid}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          className="login_text"
          id="password"
          type="password"
          onChange={saveUserpw}
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
