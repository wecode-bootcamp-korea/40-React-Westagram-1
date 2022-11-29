import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MinkyungLogin = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/minkyung-main');
  };
  const [id, setId] = useState('');
  const saveUserId = event => {
    setId(event.target.value);
    console.log(id);
  };
  const [pw, setPw] = useState('');
  const saveUserPw = event => {
    setPw(event.target.value);
    console.log(pw);
  };

  const isValid = id.includes('@') && pw.length > 4; //로그인 활성화 조건
  const btnColor = isValid ? 'login_btn_blue' : 'login_btn';
  const btnAble = isValid ? false : true;
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
              required
            />
            <br />
            <input
              type="password"
              id="user-password"
              placeholder="&nbsp; 비밀번호"
              onChange={saveUserPw}
              required
            />
            <div className="validLogin">
              <Link to="/main-minkyung">
                <button
                  type="button"
                  className={btnColor} //조건을 만족하면 파란색 버튼
                  disabled={btnAble} //조건을 만족하지 못하면 버튼 자체를 비활성화
                  onClick={goToMain}
                >
                  로그인
                </button>
              </Link>
            </div>
            {/* <script type="text/javascript" src="js/login.js"></script> */}
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
