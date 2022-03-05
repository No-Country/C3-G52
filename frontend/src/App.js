import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {
  Footer,
  NavbarHome,
} from './components';
import  Navbar  from './components/Navbar/Navbar.js';

import { 
  Login,
  Services,
  Home,

} from './pages';

import './App.scss';
import Detail from './pages/serviceDetail/detail';
import CheckIn from './pages/checkIn/check.js';


function App() {

  const { pathname } = useLocation();

  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkin' element={<CheckIn />} />
        <Route path='/products' element={<Login />} />
        <Route path='/services' element={<Services />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;