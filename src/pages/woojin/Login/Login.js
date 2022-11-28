import React from 'react';
import './Login.scss';
import LoginForm from './LoginForm';

function WoojinLogin() {
  console.log('new');
  return (
    <main id="mainOfLogin">
      <section id="loginPage">
        <h1>Westagram</h1>
        <form>
          <LoginForm />
          <div id="divisionSection">
            <div className="divisionLine"></div>
            <span id="divisionText">또는</span>
            <div className="divisionLine"></div>
          </div>
          <div>
            <a href=" " id="facebookLink">
              <img
                src="/images/woojin/Login/facebook.png"
                id="facebookLogo"
                alt="facebook logo"
              />
              Facebook으로 로그인
            </a>
          </div>
        </form>
        <div id="searchPw">
          <a href=" ">비밀번호를 잊으셨나요?</a>
        </div>
      </section>
    </main>
  );
}

export default WoojinLogin;
