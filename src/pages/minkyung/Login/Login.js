import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MinkyungLogin = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/minkyung-main');
  };
  const [state, setState] = useState();

  const saveUserId = event => {
    const userId = event.target.value;
    console.log(userId);
  };

  const saveUserPw = event => {
    const userPw = event.target.value;
    console.log(event.target.value);
  };

  return (
    <body className="wrap">
      <main>
        <div className="squareForm">
          <div id="westagramLogo">
            <h1>Westagram</h1>
          </div>
          <form id="loginForm">
            <input
              type="text"
              id="user-id"
              placeholder="&nbsp; 전화번호, 사용자 이름 또는 이메일"
              onChange={saveUserId}
            />
            <br />
            <input
              type="password"
              id="user-password"
              placeholder="&nbsp; 비밀번호"
              onChange={saveUserPw}
            />
            <div className="validLogin">
              <Link to="/main-minkyung">
                <button
                  type="button"
                  id="login_btn"
                  //disabled="disabled"
                  onClick={goToMain}
                >
                  로그인
                </button>
              </Link>
            </div>
            <script type="text/javascript" src="js/login.js"></script>
          </form>
          <div className="forgotPassword">
            <a href="../main/main.html">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </main>
    </body>
  );
};

export default MinkyungLogin;
