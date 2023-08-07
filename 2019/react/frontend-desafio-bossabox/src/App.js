import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';

import GlobalStyles from './styles/global';

import Routes from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={4000} />
      </BrowserRouter>
    </>
  );
}

export default App;
