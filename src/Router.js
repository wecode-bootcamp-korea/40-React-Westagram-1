import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Nav
import Nav from './components/Nav/Nav';

// 곽민경의 컴포넌트
import MinkyungLogin from './pages/minkyung/Login/Login';
import MinkyungMain from './pages/minkyung/Main/Main';

// 임우진의 컴포넌트
import WoojinLogin from './pages/woojin/Login/Login';
import WoojinMain from './pages/woojin/Main/Main';

// 김학진의 컴포넌트
import HakjinLogin from './pages/hakjin/Login/Login';
import HakjinMain from './pages/hakjin/Main/Main';

// 임지인의 컴포넌트
import JiinLogin from './pages/jiin/Login/Login';
import JiinMain from './pages/jiin/Main/Main';
// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login-minkyung" element={<MinkyungLogin />} />
        <Route path="/main-minkyung" element={<MinkyungMain />} />
        <Route path="/login-woojin" element={<WoojinLogin />} />
        <Route path="/main-woojin" element={<WoojinMain />} />
        <Route path="/login-hakjin" element={<HakjinLogin />} />
        <Route path="/main-hakjin" element={<HakjinMain />} />
        <Route path="/login-jiin" element={<JiinLogin />} />
        <Route path="/main-jiin" element={<JiinMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
