import React from 'react';
import JoinUserBtn from './JoinUserBtn';
import './Join.scss';

function Subject() {
  return <h1>sign up</h1>;
}

function LoginJoin() {
  return (
    <form className="instaWrap">
      <Subject />
      <JoinUserBtn />
    </form>
  );
}

export default LoginJoin;
