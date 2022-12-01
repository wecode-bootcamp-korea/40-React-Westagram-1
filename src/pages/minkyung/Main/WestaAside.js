import React from 'react';

const ASIDE = [
  { id: 1, name: '소개' },
  { id: 2, name: '도움말' },
  { id: 3, name: '홍보 센터' },
  { id: 4, name: 'API' },
  { id: 5, name: '채용 정보' },
  { id: 6, name: '개인정보처리방침' },
  { id: 7, name: '약관' },
  { id: 8, name: '위치' },
  { id: 9, name: '인기 계정' },
  { id: 10, name: '해시태그' },
  { id: 11, name: '언어' },
];

const WestaAside = () => {
  return (
    <div>
      <ul>
        {ASIDE.map(asideList => {
          return <li key={asideList.id}> {asideList.name} </li>;
        })}
      </ul>
    </div>
  );
};

export default WestaAside;
