import "reflect-metadata";
import { Provider } from './ioc.react';
import { container } from './ioc';
import React, { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Test3 } from './components/test';

//css
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/adminlte.min.css';
import './assets/css/custom-style.css';
import './assets/css/bootstrap-rtl.min.css';


import { Backdrop, CircularProgress } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";

const Login = React.lazy(() => import('./components/auth/login/login'));

const Register = React.lazy(() => import('./components/auth/register/register'));

const Panel = React.lazy(() => import('./components/panel/panel'));


export default function App() {


  useEffect(() => {

  }, [])


  return (
    <>

      <Provider container={container}>
        <ToastContainer />
        <Suspense fallback={<Backdrop open={true}><CircularProgress color="inherit" /></Backdrop>}>
          <HelmetProvider>
            <Routes>
              <Route path='/' element={<Navigate to="/panel" />} />
              <Route path='/test' element={<Test3 />} />
              <Route path='/panel/*' element={<Panel />} />
              <Route path='/auth'>
                <Route index element={<Navigate to={"/auth/login"} />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
              </Route>
            </Routes>
          </HelmetProvider>
        </Suspense>
      </Provider>

    </>

  );
}
