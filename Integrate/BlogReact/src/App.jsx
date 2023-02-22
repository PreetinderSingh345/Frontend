import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ERROR_ROUTE, HOME_ROUTE } from './constants/routes';
import Error from './Pages/Error';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
