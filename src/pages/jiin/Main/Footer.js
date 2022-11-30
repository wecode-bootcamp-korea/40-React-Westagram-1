import React from 'react';

const FOOTER_INFO_LIST = [
  { id: 1, name: '소개' },
  { id: 2, name: '도움말' },
  { id: 3, name: '홍보 센터' },
  { id: 4, name: 'API' },
  { id: 5, name: '채용 정보' },
  { id: 6, name: '개인정보처리방침' },
  { id: 7, name: '약관' },
  { id: 8, name: '위치' },
  { id: 9, name: '언어' },
];

const Footer = () => {
  return (
    <footer>
      <ul>
        {FOOTER_INFO_LIST.map(info => {
          return <li key={info.id}>{info.name}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
