import React from 'react';
import { Box } from '@mui/material';
import HomePage from '../components/Guest/HomePageHeader';
import Login from '../components/Login/Login';
import HomeFooter from '../components/Guest/HomeFooter/HomeFooter';
import Connect from '../components/Guest/Connect/Connect';
function GuestHomePage() {
    return (
        <Box sx={{ backgroundColor: '#fff', minHeight: '200vh' }}>
            <Login />
            <Connect />
        </Box>
    );
}

export default GuestHomePage;
