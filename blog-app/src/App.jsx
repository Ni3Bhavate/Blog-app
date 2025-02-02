import React from 'react'
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
// import { Route }  from 'react-router-dom';
import {Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <div className='container'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:id" element={<Blog/>}/>
      </Routes>

    </div>
  );
};

export default App



