import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { LoginForm } from './components/auth/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './components/auth/register/register';

function App() {

  const [myclass, setClass] = useState('');


  useEffect(() => {

    document.body.className = 'login-page';
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth'>
          <Route index   element={<LoginForm />} />
          <Route path='login' element={<LoginForm />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/' element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
