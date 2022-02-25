import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {
  Footer,
  Navbar
} from './components';

import { 
  Login,
  Home
} from './pages';

import './App.scss';
// import { AiFillPropertySafety } from 'react-icons/ai';

/* function Layout({children}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>    
  )
} */

function App() {

  const { pathname } = useLocation();

  return (
    <div className="App">

      {(pathname !== '/login' && pathname !== '/') ? <Navbar /> : ""}
        
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path="/" element={<Navbar />}>
          <Route path='products' element={<Products />} />
          <Route path='services' element={<Services />} />
          <Route path='login' element={<Login />} />
        </Route> */}

        {/* <Route element={<Layout />}>
          <Route path='/products' element={<Products />} />
          <Route path='services' element={<Services />} />
          <Route path='/login' element={<Login />} />
        </Route> */}
      </Routes>

      {
        pathname === '/login' || <Footer />
      }

    </div>
  )
}

export default App;