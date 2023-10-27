import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainBoard from './components/MainBoard/MainBoard';
import Categories from './components/Categories/Categories';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <Navbar switchTheme={switchTheme} theme={theme} />
      <MainBoard theme={theme} />
      <Categories theme={theme} />
      <Routes>
        <Route path="/login" element={<Login theme={theme} />} />
        <Route path="/register" element={<Register theme={theme} />} />
      </Routes>
    </Router>
  );
};

export default App;