import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar'
import LearnMore from './Pages/LearnMore'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/learnmore' element={<LearnMore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
