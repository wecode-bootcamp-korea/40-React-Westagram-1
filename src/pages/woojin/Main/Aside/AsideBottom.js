import React from 'react';
import { ASIDE_BOTTOM_INFO_LIST } from './ASIDE_BOTTOM_INFO_LIST';

// const data

function AsideBottom() {
  // divide line
  let firstLineInfo = ASIDE_BOTTOM_INFO_LIST.slice([0], [5]);
  let secondLineInfo = ASIDE_BOTTOM_INFO_LIST.slice(
    [5],
    [ASIDE_BOTTOM_INFO_LIST.length]
  );
  return (
    <>
      {/* first line info */}
      <div className="infoLetters">
        {firstLineInfo.map(info => {
          return (
            <span className="infoWords" key={info.id}>
              {info.text}
            </span>
          );
        })}
      </div>
      {/* second line info */}
      <div className="infoLetters">
        {secondLineInfo.map(info => {
          return (
            <span className="infoWords" key={info.id}>
              {info.text}
            </span>
          );
        })}
      </div>
      <div className="copyright">2022 WESTAGRAM FROM WECODE</div>
    </>
  );
}

export default AsideBottom;
