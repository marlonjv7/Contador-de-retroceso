import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer';
import Main from '../containers/Main';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />

                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;