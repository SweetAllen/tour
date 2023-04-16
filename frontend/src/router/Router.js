import React from 'react';
import { Route } from 'react-router-dom';
import { Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Tour from '../pages/Tour';
import TourDetail from '../pages/TourDetail';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultslist from '../pages/SearchResultslist';
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>} />
            <Route path='/tours' element={<Tour/>} />
            <Route path='/tours/:id' element={<TourDetail/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/tours/search' element={<SearchResultslist/>} />



        </Routes>
    )
}
export default Router;