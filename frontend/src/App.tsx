import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {
  Footer,
  Navbar
} from './components';

import { 
  Login,
  Services,
  Home,

} from './pages';

import './App.scss';


function App() {

  const { pathname } = useLocation();

  return (
    <div className="App">

      {
        pathname === '/login' || <Navbar />
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Login />} />
        <Route path='/services' element={<Services />} />
      </Routes>


      {
        pathname === '/login' || <Footer />
      }

    </div>
  )
}

export default App;