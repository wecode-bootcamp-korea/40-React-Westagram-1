import React, { useState } from 'react';
import './Main.scss';
import Comment from './Comment';

const MinkyungMain = () => {
  const [comment, setComment] = useState('');
  console.log(comment);
  //input에서 댓글 값 받기
  const onChange = e => setComment(e.target.value);
  //input에서 받은 댓글 값 배열에 넣기
  const [commentBox, setCommentBox] = useState([]);
  const onSubmit = e => {
    e.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentBox(commentValueList => [...commentValueList, comment]);
    setComment('');
  };
  //Enter key 등록
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <>
      <div>
        <nav className="navigation">
          <div className="logo">
            <img src="images/minkyung/instagram.png" />
            <span>westagram</span>
          </div>
          <div className="searchBar">
            <input className="searchText" type="text" placeholder="검색" />
          </div>
          <div className="rightSideIcons">
            <img src="images/minkyung/explore.png" alt="Explore" />
            <img src="images/minkyung/heart.png" alt="Heart" />
            <span>
              <img src="images/minkyung/profile.png" alt="Profile" />
            </span>
          </div>
        </nav>
        <div className="line"></div>
      </div>
      <main>
        <div className="feeds">
          <div className="article">
            <div id="userIcon">
              <img src="images/minkyung/dog.jpg" alt="User Image" />
              <div className="userName">cute_gyuri</div>
              <div className="moreInfo">...</div>
            </div>
            <div id="articleImage">
              <img src="images/minkyung/article.jpeg" alt="Article Image" />
            </div>
            <div className="feedReactions">
              <div className="feedRightIcons">
                <img src="images/minkyung/red_heart.png" alt="heart-icon" />
                <img src="images/minkyung/bubble-chat.png" alt="comment-icon" />
                <img
                  src="images/minkyung/direct-instagram.png"
                  alt="direct-message"
                />
              </div>
              <span className="saveIcon">
                <img src="images/minkyung/save-instagram.png" alt="저장" />
              </span>
            </div>
            <div className="feedReactExp">
              <div className="ReactUserId"></div>
            </div>
            <p className="feedArticle">
              <strong>cute_gyuri</strong> 8000원이나 주고 산 밀크티. 곰돌이는
              맛있어
            </p>
          </div>
          <section className="user-comment">
            <div className="commentLine">
              <ul className="commentList">
                <li>
                  <span className="commentId1">old_n_newyork</span>
                  <span>곰돌이를 먹다니 잔인해!</span>
                </li>
                {commentBox.map((value, index) => (
                  <li key={index} style={{ listStyleType: 'none' }}>
                    <span className="commentId">cute_gyuri</span> {value}
                  </li>
                ))}
                <form onSubmit={onSubmit}>
                  <input
                    type="text"
                    className="commentSpace"
                    placeholder="댓글 달기..."
                    value={comment}
                    onChange={onChange}
                    onKeypress={handleOnKeyPress}
                  />
                  <button
                    type="button"
                    className="commentBtn"
                    onClick={onSubmit}
                  >
                    게시
                  </button>
                </form>
              </ul>
            </div>
          </section>
        </div>
        <div className="main-right">
          <div className="personalProfile">
            <div className="dropdown">
              <span className="dropBtn">
                <img src="images/minkyung/dog.jpg" alt="profileImage" />
              </span>
              <ul class="dropdown-content">
                <li href="#">
                  <img src="images/minkyung/user.png" alt="그림1" />
                </li>
                <li href="#">
                  <img src="images/minkyung/save-instagram.png" alt="그림2" />
                </li>
                <li href="#">
                  <img src="images/settings.png" />
                </li>
                <li href="#">로그아웃</li>
              </ul>
            </div>
            <div className="personalId">
              cute_gyuri
              <div id="personalName">maltipoo | 규리</div>
            </div>
          </div>
          <div className="story">
            <div className="storyBar">
              스토리 <span>모두 보기</span>
            </div>
            <ul className="storyPeople">
              <li className="storyContents">
                <img alt="1st-profile" src="images/minkyung/profile1.jpeg" />
                <div className="ProfilesInfo">
                  <strong>r_u_running</strong>
                  <br />
                  16분 전
                </div>
              </li>
              <li className="storyContents">
                <img alt="2nd-profile" src="images/minkyung/profile2.jpeg" />
                <div className="ProfilesInfo">
                  <strong>cantdo_kendo</strong>
                  <br />
                  30분 전
                </div>
              </li>
              <li className="storyContents">
                <img alt="3rd-profile" src="images/minkyung/profile3.jpeg" />
                <div className="ProfilesInfo">
                  <strong>cat_ssg_win</strong>
                  <br />
                  49분 전
                </div>
              </li>
              <li className="storyContents">
                <img alt="4th-profile" src="images/minkyung/profile4.jpeg" />
                <div className="ProfilesInfo">
                  <strong>chocooooooo</strong>
                  <br />
                  1시간 전
                </div>
              </li>
              <li className="storyContents">
                <img alt="5th-profile" src="images/minkyung/profile5.jpeg" />
                <div className="ProfilesInfo">
                  <strong>madoo_love</strong>
                  <br />
                  3시간 전
                </div>
              </li>
              <li className="storyContents">
                <img alt="6th-profile" src="images/minkyung/profile6.jpeg" />
                <div className="ProfilesInfo">
                  <strong>old_n_newyork</strong>
                  <br />
                  20시간 전
                </div>
              </li>
            </ul>
            <div className="recommendation">
              <div className="recommendationBar">
                회원님을 위한 추천<span className="everyone">모두 보기</span>
              </div>
              <ul className="recommendationPeople">
                <li className="storyContents">
                  <img alt="7th-profile" src="images/minkyung/profile7.jpeg" />
                  <strong>tuna_sushi</strong>
                  <br />
                  <p className="recoExp1">r_u_running님 외...</p>
                  {/* <span className="blueFollow">팔로우</span> */}
                </li>
                <li className="storyContents">
                  <img alt="8th-profile" src="images/minkyung/profile8.jpeg" />
                  <strong>ducklingduckduck</strong>
                  <br />
                  <p className="recoExp2">old_n_newyork님...</p>
                  {/* <span className="blueFollow">팔로우</span> */}
                </li>
                <li className="storyContents">
                  <img alt="9th-profile" src="images/minkyung/profile9.jpeg" />
                  <strong>5am_cafe</strong>
                  <br />
                  <p className="recoExp3">chocooooooo님 외 ...</p>
                  {/* <span className="blueFollow">팔로우</span> */}
                </li>
              </ul>
            </div>
            <div className="contract">
              westagram 정보 지원 홍보 센터 API <br />
              채용 정보 개인정보처리방침 약관 <br />
              디렉터리 프로필 해시태그 언어 <br />
              <br />© 2022 WESTAGRAM FROM WECODE
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default MinkyungMain;
