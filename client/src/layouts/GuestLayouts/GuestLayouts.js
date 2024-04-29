// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Box } from '@mui/material';
// import { styled, Paper, Container } from '@mui/material';
// import HomePage from '../../components/Guest/HomePage';
// import HomeFooter from '../../components/Guest/HomeFooter/HomeFooter';

// function GuestLayouts({ children }) {
//     const location = useLocation();

//     const is404Page = location.pathname === '/404';

//     return (
//         <Box sx={{ backgroundColor: '#fff' }}>
//             <HomePage />
//             <Box>{children}</Box>
//             <HomeFooter />
//         </Box>
//     );
// }

// export default GuestLayouts;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { styled, Paper, Container } from '@mui/material';
import HomePageHeader from '../../components/Guest/HomePageHeader';
import HomeFooter from '../../components/Guest/HomeFooter/HomeFooter';

function GuestLayouts({ children }) {
    const location = useLocation();
    const backgroundColor = location.pathname !== '/' ? '#f3f2f0' : '#fff';
    // const backgroundColor = '#fff';
    return (
        <Box sx={{ backgroundColor }}>
            <HomePageHeader />
            <Box>{children}</Box>
            <HomeFooter />
        </Box>
    );
}

export default GuestLayouts;
