import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Navibar from './components/Navibar';
import ServiceContextProvider from './contexts/serviceContext';
import UserContextProvider from './contexts/userContext';
import DoctorPage from './pages/DoctorPage';
import EditPage from './pages/EditPage';
import MainPage from './pages/MainPage';
import ServicePage from './pages/ServicePage';

const MyRoutes = () => {
    return (
        <UserContextProvider>
            <ServiceContextProvider >
                <BrowserRouter>
                    <Navibar />
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/doctor/:id' element={<DoctorPage />} />
                        <Route path='/service' element={<ServicePage />} />
                        <Route path="/edit/:id" element={<EditPage />} />
                    </Routes>

                </BrowserRouter>
            </ServiceContextProvider>
        </UserContextProvider>
    );
};

export default MyRoutes;