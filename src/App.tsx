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
import { Console } from "console";
import { Backdrop, CircularProgress } from "@mui/material";

const Login = React.lazy(() => import('./components/auth/login/login'));

const Register = React.lazy(() => import('./components/auth/register/register'));

const Panel = React.lazy(() => import('./components/panel/panel'));




function App() {

  const loadScript = (src: string) => {

    const script = document.createElement("script");
    script.src = src;
    script.type = "text/script";
    script.async = true;
    script.onload = () => { console.log('ssksks') }
    document.body.appendChild(script);
  }

  useEffect(() => {


    console.log("use effect in app component")

    loadScript("./src/assets/js/alert.js")



  }, [])


  return (
    <>

      <Provider container={container}>
        <ToastContainer />
        <Suspense fallback={<Backdrop open={true}><CircularProgress color="inherit" /></Backdrop>}>
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
        </Suspense>
      </Provider>

    </>

  );
}

export default App;
