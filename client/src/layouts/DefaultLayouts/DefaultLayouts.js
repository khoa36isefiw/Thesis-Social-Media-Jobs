import React from 'react';

import { Box, ThemeProvider } from '@mui/material';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { styled, Paper, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import UserInformation from '../../components/UserInformation/UserInformation';
import UserGroup from '../../components/UserGroup/UserGroup';
import Advertising from '../../components/Advertising/Advertising';
import { desktopScreen, mobileScreen, tabletScreen, theme } from '../../components/Theme/Theme';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function DefaultLayout({ children }) {
    return (
        // #f4f2ee?
        <Box sx={{ backgroundColor: '#f3f2f0' }}>
            <Header />
            <Container
                sx={{
                    mt: 12,
                    [mobileScreen]: {
                        px: 0,
                    },
                }}
            >
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} lg={3}>
                        <UserInformation />

                        <Box sx={{ mt: 2 }}>
                            <UserGroup />
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box
                            sx={{
                                minHeight: '10vh',
                                borderRadius: '24px',
                            }}
                        >
                            <Box>{children}</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Advertising />
                        <Footer />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default DefaultLayout;
