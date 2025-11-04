import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, StaticRouter,Navigate } from 'react-router-dom';
import './App.css'
import Chat from './components/Chat';
import Register from './components/Register';
import Login from './components/Login';
import Users from './components/Users';


function App() {

  return (

    <>
      <BrowserRouter>
      {/* Routes */}
      <Routes>
        {/* Default route — redirect to /register */}
          <Route path="/" element={<Navigate to="/register" />} />
       
        <Route path="/register" element={<Register />} />
        <Route path="/chat/:uid" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mambers" element={<Users />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
