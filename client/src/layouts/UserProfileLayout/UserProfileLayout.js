import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, Paper, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Advertising from '../../components/Advertising/Advertising';
import Header from '../DefaultLayouts/Header/Header';
import SimilarFollowers from './SimilarFollowers/SimilarFollowers';
import HiringCareer from '../../components/Advertising/HiringCareer';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function UserProfileLayout({ children }) {
    return (
        <Box sx={{ backgroundColor: '#f3f2f0' }}>
            <Header />
            <Container sx={{ mt: 12 }}>
                <Box>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={9}>
                            <Box sx={{ minHeight: '10vh', borderRadius: '24px' }}>
                                <Box>{children}</Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <HiringCareer />
                            <SimilarFollowers />
                            <Advertising />
                        </Grid>
                    </Grid>
                    <Typography sx={{ fontSize: '14px', py: 2, color: 'text.secondary' }}>
                        Aikotoba Corporation &copy; 2023
                    </Typography>
                    {/* </Container> */}
                </Box>
            </Container>
        </Box>
    );
}

export default UserProfileLayout;
