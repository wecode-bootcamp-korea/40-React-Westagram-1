import React, { useState } from 'react'; // react의 내장 hook인 {useState}
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Subject() {
  return <h1>Instagram</h1>;
}

function UserBtn() {
  const navigate = useNavigate();

  const [userIdValue, setUserIdValue] = useState('');
  const [userPwValue, setUserPwValue] = useState('');

  const getUserIdValue = e => {
    setUserIdValue(e.target.value);
  };

  const getUserPwValue = e => {
    setUserPwValue(e.target.value);
  };

  const changeColor = userIdValue.includes('@') && userPwValue.length >= 5;

  const buttonColor = changeColor ? 'active' : 'un_active';
  const disabledOn = changeColor ? false : true;

  //main으로 이동
  const moveMain = e => {
    navigate('/main-jiin');
  };

  return (
    <div className="userButton">
      <input
        id="userIdValue"
        type="text"
        // value={userIdValue.userId}
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={getUserIdValue}
      />
      <input
        id="userPwValue"
        type="password"
        // value={userPwValue.userPw}
        placeholder="비밀번호"
        onChange={getUserPwValue}
      />
      {/* <button id="userBtn" type="submit">
        <Link to="/Main">
          <p>로그인</p>
        </Link>
      </button> */}
      <button
        id="userBtn"
        type="submit"
        disabled={disabledOn}
        onChange={changeColor}
        className={buttonColor}
        onClick={moveMain}
      >
        <p>로그인</p>
      </button>
    </div>
  );
}

function LostPassword() {
  return <div className="lostPwText">비밀번호를 잊으셨나요?</div>;
}

function JiinLogin() {
  return (
    <form id="instaWrap">
      <Subject />
      <UserBtn />
      <LostPassword />
    </form>
  );
}

// function Login() {
//   // const userId = document.getElementById("userIdValue");
//   // const userPw = document.getElementById("userPwValue");
//   // const submitBtn = document.getElementById("userBtn");

//   // userId.addEventListener("keyup", () => {
//   //   if (userId.value.length >= 1) {
//   //     userPw.addEventListener("keyup", userBtnOn);
//   //   } else if (userId.value.length >= "") {
//   //     submitBtn.style.opacity = 0.5;
//   //   }
//   // });

//   // function userBtnOn() {
//   //   if (userPw.value.length >= 1) {
//   //     submitBtn.style.opacity = 1;
//   //   } else if (userPw.value.length >= "") {
//   //     submitBtn.style.opacity = 0.5;
//   //   }
//   // }

//   // // 유효성이 맞는 함수 따로 모음, 맞지않는 함수 따로 모음 을 따로 만들어야한다
//   // submitBtn.addEventListener("click", function () {
//   //   if (userId.value.indexOf("@") > -1) {
//   //     if (userPw.value.length >= 5) {
//   //       return true;
//   //     } else if (userPw.value.length < 5) {
//   //       alert("비밀번호를 다시 확인해주세요");
//   //     }
//   //   } else if (userId.value.indexOf("@") === -1) {
//   //     alert("아이디를 다시 확인해주세요");
//   //     if (userPw.value.length < 5) {
//   //       alert("비밀번호를 다시 확인해주세요");
//   //     }
//   //   }
//   // });

//   // // 엔터키를 쳤을때 인스타그램 화면으로 넘어가게 하는 동작

//   // // "input" -> input창 안에 value 변화가 있을때 동작한다
//   // // key로 하는 동작은 붙여 넣기했을때는 변화를 못느낀다

//   return (
//     <form id="instaWrap">
//       <h1>Instagram</h1>
//       <div className="userButton">
//         <input
//           id="userIdValue"
//           type="text"
//           placeholder="전화번호, 사용자 이름 또는 이메일"
//         />
//         <input id="userPwValue" type="password" placeholder="비밀번호" />
//         <button id="userBtn" type="submit">
//           <p>로그인</p>
//         </button>
//       </div>
//       <div className="lostPwText">
//         <a href="www.naver.com">비밀번호를 잊으셨나요?</a>
//       </div>
//     </form>
//   );
// }

export default JiinLogin;
