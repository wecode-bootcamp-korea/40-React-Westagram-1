import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MinkyungLogin = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/Main');
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
            />
            <br />
            <input
              type="password"
              id="user-password"
              placeholder="&nbsp; 비밀번호"
            />
            <div className="validLogin">
              <Link to="/Main">
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
