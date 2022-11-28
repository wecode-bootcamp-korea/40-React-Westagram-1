import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

// function PracticeLogin() {
//   let [color, setColor] = useState('red');

//   return (
//     <>
//       <h1 style={{ backgroundColor: color }}>여기는 메인 페이지입니다.</h1>
//       <button onClick={() => setColor('blue')}>배경색 변경</button>
//     </>
//   );
// }

function Subject() {
  return <h1>Instagram</h1>;
}

function UserBtn() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({ userid: ' ', userpw: ' ' });
  console.log(inputValue);
  const onChangeT = e => {
    console.log(inputValue);
    console.log(e);
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onClickBtn = e => {
    if (inputValue.userid.indexOf('@') > -1) {
      if (inputValue.userpw.length >= 5) {
        return MoveMain();
      } else if (inputValue.userpw.length < 5) {
        alert('비밀번호를 다시 확인해주세요');
      }
    } else if (inputValue.userid.indexOf('@') === -1) {
      alert('아이디를 다시 확인해주세요');
      if (inputValue.userpw.length < 5) {
        alert('비밀번호를 다시 확인해주세요');
      }
    }
  };

  const MoveMain = e => {
    navigate('/main-jiin');
  };

  return (
    <div className="userButton">
      <input
        id="userIdValue"
        name="userid"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        value={inputValue.userid}
        onChange={onChangeT}
      />
      <input
        id="userPwValue"
        name="userpw"
        type="password"
        value={inputValue.userpw}
        onChange={onChangeT}
        placeholder="비밀번호"
      />
      {/* <button id="userBtn" type="submit">
        <Link to="/main-jiin">
          <p>로그인</p>
        </Link>
      </button> */}
      {/* <button
        id="userBtn"
        type="submit"
        onClick={() => {
          
        }}
      >
        <p>로그인</p>
      </button> */}
      <button id="userBtn" type="submit" onClick={onClickBtn}>
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
