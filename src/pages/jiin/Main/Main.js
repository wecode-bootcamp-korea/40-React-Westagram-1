import React, { useState } from 'react';
import Child from './Child';
import './Main.scss';

function InstaGnb() {
  return (
    <nav className="insta_gnb">
      <div className="insta_logo">
        <div className="nav_leftSide">
          <img src="./images/jiin/instagram.png" alt="instagram" />
        </div>
        <h1>Instagram</h1>
      </div>
      <input className="inputValue" type="text" placeholder="검색" />
      <ul className="userProfile">
        <li>
          <img src="./images/jiin/explore.png" alt="explore" />
        </li>
        <li>
          <img src="./images/jiin/heart.png" alt="heart" />
        </li>
        <li className="clickProfile">
          <img src="./images/jiin/profile.png" alt="profile" />
          <ul className="clickProfileInfo">
            <li>
              <a href=" ">프로필</a>
            </li>
            <li>
              <a href=" ">저장됨</a>
            </li>
            <li>
              <a href=" ">설정</a>
            </li>
            <li>
              <a href=" ">로그아웃</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

function FeedTop() {
  return (
    <div className="feedTop">
      <div className="feedTopLeft">
        <div className="feedTopImg">
          <img src="./images/jiin/insta_profile.png" alt="userImg" />
        </div>
        <div className="feedTopUser">
          <p>wecode_bootcamp</p>
        </div>
      </div>
      <div className="feedTopRight">
        <div className="feedMore">
          <img src="./images/jiin/more.png" alt="더보기" />
        </div>
      </div>
    </div>
  );
}

function FeedMain() {
  return (
    <div className="feedMain">
      <img src="./images/jiin/insta_profile.png" alt="main profile" />
    </div>
  );
}

function FeedBottom() {
  let nextId = 0;

  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <div className="feedBottom">
      <div className="userClickSection">
        <div>
          <div className="userLike BottomImg">
            <img src="./images/jiin/heart.png" alt="heart" />
          </div>
          <div className="chat BottomImg">
            <img src="./images/jiin/chat.png" alt="chat" />
          </div>
          <div className="userShare BottomImg">
            <img src="./images/jiin/upload.png" alt="share" />
          </div>
        </div>
        <div className="userBookmarkSection">
          <div className="userBookmark BottomImg">
            <img src="./images/jiin/bookmark.png" alt="bookmark" />
          </div>
        </div>
      </div>
      <div className="userWrite">
        <div className="userProfileLike">
          <div className="insta_profileImg">
            <img src="./images/jiin/insta_profile.png" alt="insta_profile" />
          </div>
          <div className="likeCountNum">
            aineworld님 외 <div className="name"> 0 </div> 명이 좋아합니다
          </div>
        </div>
        <ul className="userWriting">
          <li>
            <span className="boldName">canon_mj</span>
            <span>
              위워크에서 진행한 베이킹 클래스...
              <a href=" " className="grey">
                더보기
              </a>
            </span>
          </li>
        </ul>
        <ul className="followersWrite">
          <li>
            <span className="boldName">neceosecius</span>
            <span>ok🤟👉🥰⚡✍️</span>
            <span className="heartAdd">❤️</span>
            <span className="delete">❌</span>
          </li>
          <Child pet={artists} />
        </ul>
      </div>
      <div className="userComment">
        <input
          className="commentPush grey"
          type="text"
          placeholder="댓글 달기..."
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button
          className="submitPush"
          type="submit"
          onClick={() => {
            setName('');
            artists.push({
              id: nextId++,
              name: name,
            });
          }}
        >
          게시
        </button>
      </div>
    </div>
  );
}

function Feed() {
  return (
    <div className="feeds">
      <article>
        <FeedTop />
        <FeedMain />
        <FeedBottom />
      </article>
    </div>
  );
}

function MainRight() {
  return (
    <div className="main-right">
      <div className="sideUserSection">
        <div className="sideUserImg customImg">
          <img src="./images/jiin/insta_profile.png" alt="profile" />
        </div>
        <div className="sideUserName">
          <p>wecode_bootcamp</p>
          <span className="grey">wocode 위코드</span>
        </div>
      </div>
      <div className="sideStory">
        <div className="storySectionTitle">
          <div className="storyTitle">
            <p>스토리</p>
          </div>
          <div className="stroyAll">
            <p>
              <a href=" " className="grey">
                모두 보기
              </a>
            </p>
          </div>
        </div>
        <ul className="storySection">
          <li>
            <div className="storyImg customImg">
              <img src="./images/jiin/insta_profile.png" alt="profile1" />
            </div>
            <div className="sideUserName">
              <p>wecode_bootcamp</p>
              <span className="grey">wocode 위코드</span>
            </div>
          </li>
          <li>
            <div className="storyImg customImg">
              <img src="./images/jiin/insta_profile.png" alt="profile2" />
            </div>
            <div className="sideUserName">
              <p>wecode_bootcamp</p>
              <span className="grey">wocode 위코드</span>
            </div>
          </li>
          <li>
            <div className="storyImg customImg">
              <img src="./images/jiin/insta_profile.png" alt="profile3" />
            </div>
            <div className="sideUserName">
              <p>wecode_bootcamp</p>
              <span className="grey">wocode 위코드</span>
            </div>
          </li>
          <li>
            <div className="storyImg customImg">
              <img src="./images/jiin/insta_profile.png" alt="profile4" />
            </div>
            <div className="sideUserName">
              <p>wecode_bootcamp</p>
              <span className="grey">wocode 위코드</span>
            </div>
          </li>
          <li>
            <div className="storyImg customImg">
              <img src="./images/jiin/insta_profile.png" alt="profile4" />
            </div>
            <div className="sideUserName">
              <p>wecode_bootcamp</p>
              <span className="grey">wocode 위코드</span>
            </div>
          </li>
        </ul>
      </div>
      <ul className="suggestionSection">
        <li>
          <div className="suggestionTitle">
            <p>회원님을 위한 추천</p>
          </div>
          <div className="suggestionAll">
            <p>
              <a href=" " className="grey">
                모두 보기
              </a>
            </p>
          </div>
        </li>
        <li>
          <div className="suggestionImg customImg">
            <img src="./images/jiin/insta_profile.png" alt="profile1" />
          </div>
          <div className="sideUserName">
            <p>wecode_bootcamp</p>
            <span className="grey">회원님을 팔로우합니다</span>
          </div>
          <div className="suggestionFollow">
            <p>
              <a href=" ">팔로우</a>
            </p>
          </div>
        </li>
        <li>
          <div className="suggestionImg customImg">
            <img src="./images/jiin/insta_profile.png" alt="profile2" />
          </div>
          <div className="sideUserName">
            <p>wecode_bootcamp</p>
            <span className="grey">회원님을 팔로우합니다</span>
          </div>
          <div className="suggestionFollow">
            <p>
              <a href=" ">팔로우</a>
            </p>
          </div>
        </li>
        <li>
          <div className="suggestionImg customImg">
            <img src="./images/jiin/insta_profile.png" alt="profile3" />
          </div>
          <div className="sideUserName">
            <p>wecode_bootcamp</p>
            <span className="grey">회원님을 팔로우합니다</span>
          </div>
          <div className="suggestionFollow">
            <p>
              <a href=" ">팔로우</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

function MainJoin() {
  return (
    <main>
      <Feed />
      <MainRight />
    </main>
  );
}

function JiinMain() {
  return (
    <>
      <InstaGnb />
      <MainJoin />
    </>
  );
}

export default JiinMain;
