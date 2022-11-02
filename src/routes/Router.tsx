import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
import Home from "../pages/Home/Home";
import ErroPagina from "../Shared/components/erroPagina/ErroPagina";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<ErroPagina />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
