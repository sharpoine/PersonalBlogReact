import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

import PostDetail from './pages/PostDetail';

import './App.css'
import About from './pages/About';
import Layout from './layout/Layout';

const NotFound = () => (
  <h1 className='font-architechs'>Böyle bi sayfa yok hacıabi</h1>
);
function App() {


  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/post/:id' element={<PostDetail />} />
          <Route path='/hakkimda' element={<About />} />
        </Route>

        <Route path='*' element={<NotFound />} />

      </Routes>


    </BrowserRouter>
  )
}

export default App
