import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { 
  Header, 
  Footer 
} from './components';

import { 
  Login,
  Services

} from './pages';

import './App.scss';


function App() {

  const { pathname } = useLocation();

  return (
    <div className="App">

      {
        pathname === '/login' || <Header />
      }

      <Routes>
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
