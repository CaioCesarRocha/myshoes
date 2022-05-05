import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home'
import MyListProducts from '../pages/myListProducts';
import ShowProduct from '../pages/ShowProduct';
import NotFound from '../pages/NotFound';
import { RequireAuth } from './RequireAuth'; //EXEMPLO DE COMO CRIAR UMA ROTA PRIVADA


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/" /> 
                <Route element={<ShowProduct/> } path="/showProduct/:id"/>
                <Route element={<RequireAuth><MyListProducts/></RequireAuth> } path="/myListProducts" />
                <Route element={<NotFound/>} path="*" />               
            </Routes>         
        </BrowserRouter>
    )
}

export default AppRoutes;