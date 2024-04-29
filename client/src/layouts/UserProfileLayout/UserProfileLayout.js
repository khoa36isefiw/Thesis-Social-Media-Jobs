import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, Paper, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Advertising from '../../components/Advertising/Advertising';
import Header from '../UserHomePageLayout/Header/Header';
import SimilarFollowers from './SimilarFollowers/SimilarFollowers';
import HiringCareer from '../../components/Advertising/HiringCareer';
import { mobileScreen } from '../../components/Theme/Theme';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function UserProfileLayout({ children }) {
    return (
        <Box sx={{ backgroundColor: '#f3f2f0', minHeight: '100vh', position: 'relative' }}>
            <Header />
            <Container
                sx={{
                    mt: 12,
                    [mobileScreen]: {
                        p: 0,
                    },
                }}
            >
                <Box>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={8} lg={9}>
                            <Box sx={{ minHeight: '10vh', borderRadius: '24px' }}>
                                <Box>{children}</Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={3}>
                            <HiringCareer />
                            <SimilarFollowers />
                            <Advertising />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Typography
                sx={{
                    // position: 'absolute',
                    fontSize: '14px',
                    py: 2,
                    color: 'text.secondary',
                    [mobileScreen]: {
                        textAlign: 'center',
                    },

                    bottom: 0,
                    textAlign: 'center',

                    left: '25%',
                }}
            >
                Aikotoba Corporation &copy; 2023
            </Typography>
        </Box>
    );
}

export default UserProfileLayout;
