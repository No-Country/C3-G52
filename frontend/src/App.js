import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {
  Footer,
  Navbar,
  NavbarHome,
} from './components';

import { 
  Login,
  Services,
  Home,

} from './pages';

import './App.scss';
import Detail from './pages/serviceDetail/detail';


function App() {

  const { pathname } = useLocation();

  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Login />} />
        <Route path='/services' element={<Services />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;