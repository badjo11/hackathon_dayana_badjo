import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navibar from './components/Navibar';
import UserContextProvider from './contexts/userContext';
import MainPage from './pages/MainPage';

const MyRoutes = () => {
    return (
        <UserContextProvider>
            <BrowserRouter>
                <Navibar />
                <Routes>
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
    );
};

export default MyRoutes;