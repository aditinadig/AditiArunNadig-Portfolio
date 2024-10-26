// src/layouts/MainLayout.jsx
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import theme from '../theme';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Navbar />
                <main>{children}</main>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default MainLayout;