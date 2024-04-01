import React from 'react';

import { Box } from '@mui/material';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { styled, Paper, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import UserInformation from '../../components/UserInformation/UserInformation';
import UserGroup from '../../components/UserGroup/UserGroup';
import Advertising from '../../components/Advertising/Advertising';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function DefaultLayout({ children }) {
    return (
        <Box sx={{ backgroundColor: '#f3f2f0' }}>
            <Header />
            <Container sx={{ mt: 12 }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <UserInformation />

                        <Box sx={{ mt: 2 }}>
                            <UserGroup />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ minHeight: '10vh', borderRadius: '24px' }}>
                            <Box>{children}</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <Advertising />
                        </Box>
                        <Footer />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default DefaultLayout;
