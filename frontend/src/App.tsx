import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/products' element={<Login />} />
        <Route path='/services' element={<Services />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App;
