import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatGPTUI from './Views/ChatGPTUI/ChatGPTUI';
import Login from './Views/Login/Login';
import SignUp from './Views/SignUp/SignUp';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/chatbot' element={<ChatGPTUI />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
