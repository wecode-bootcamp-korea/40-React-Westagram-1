import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function HakjinLogin() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <p id="logo">westagram</p>

      <div className="login_tool">
        <input
          className="login_text"
          id="email"
          type="text"
          onkeyup="emaillog()"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          className="login_text"
          id="password"
          type="password"
          onkeyup="emaillog()"
          placeholder="비밀번호"
        />
        <button
          onClick={() => {
            navigate('/main-hakjin');
          }}
          id="button"
          /*disabled*/
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
