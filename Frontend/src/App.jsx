import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/NavBar'
import LearnMore from './Pages/LearnMore'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/learnmore' element={<LearnMore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
