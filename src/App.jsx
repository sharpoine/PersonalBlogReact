import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

import PostDetail from './pages/PostDetail';

import './App.css'
import About from './pages/About';
import Layout from './layout/Layout';
import LayoutAdmin from './layout/LayoutAdmin'
import Login from './pages/Login';
import CreatePost from './pages/Admin/CreatePost'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext';
import CreateCategory from './pages/Admin/CreateCategory';
import AdminRoute from './context/AdminRoute';
import CategoryPosts from './pages/CategoryPosts';



const NotFound = () => (
  <h1 className='font-architechs'>Böyle bi sayfa yok hacıabi</h1>
);
function App() {


  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/post/:slug' element={<PostDetail />} />
            <Route path='/hakkimda' element={<About />} />
            <Route path='/:categorySlug' element={<CategoryPosts />} />
          </Route>
          <Route path='/login' element={<Login />} />

          <Route path='/admin' element={<AdminRoute><LayoutAdmin /></AdminRoute>} >

            <Route path='create-post' element={<CreatePost />} />
            <Route path='create-category' element={<CreateCategory />} />

          </Route>
          <Route path='*' element={<NotFound />} />

        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
