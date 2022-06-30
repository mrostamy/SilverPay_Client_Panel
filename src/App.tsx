import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Test3 } from './components/test';

//css
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/adminlte.min.css';
import './assets/css/custom-style.css';
import './assets/css/bootstrap-rtl.min.css';

//js
import * as $ from 'jquery'
export function AddLibrary(urlOfTheLibrary: any) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.type = "text/script"
  document.body.appendChild(script);
}




const Login = React.lazy(() => import('./components/auth/login/login'));

const Register = React.lazy(() => import('./components/auth/register/register'));

const Panel = React.lazy(() => import('./components/panel/panel'));




function App() {

  const [myclass, setClass] = useState('');


  useEffect(() => {

    document.body.className = 'login-page';
  }, [])


  return (
    <>

      <BrowserRouter>
        <ToastContainer />
        <Suspense fallback={<div>loadin...</div>}>
          <Routes>
            <Route path='/' element={<Navigate to="/panel" />} />
            <Route path='/test' element={<Test3 />} />
            <Route path='panel/*' element={<Panel />} />
            <Route path='/auth'>
              <Route index element={<Navigate to={"/auth/login"} />} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>


    </>

  );
}

export default App;
