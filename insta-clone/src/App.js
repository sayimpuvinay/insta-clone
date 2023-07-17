import './App.css';
import React from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import HomePage from './Components/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import MainContent from './Components/MainContent/MainContent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/main-content" element={<MainContent/>} />
    </Routes>
  );
}
export default App;
