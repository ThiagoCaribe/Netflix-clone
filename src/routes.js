import React from "react";
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';

import Login from './pages/login'
import Homer from './pages/home'
const Rotas = () => {

    const logado = localStorage.getItem('@user');

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={logado ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          element={logado ? <Homer /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;