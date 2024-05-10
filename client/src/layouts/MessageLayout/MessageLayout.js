import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from '../UserHomePageLayout/Header/Header';
import HiringCareer from '../../components/Advertising/HiringCareer';
import { mobileScreen } from '../../components/Theme/Theme';
function MessageLayout({ children }) {
    return (
        <Box
            sx={{
                backgroundColor: '#f3f2f0',
                minHeight: '100vh',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    [mobileScreen]: {
                        // display: 'none',
                    },
                }}
            >
                <Header />
            </Box>
            <Container
                sx={{
                    mt: 12,
                    [mobileScreen]: {
                        p: 0,
                        // mt: 0,
                    },
                }}
            >
                <Box>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={12} md={9} lg={9}>
                            <Box>
                                <Box>{children}</Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <HiringCareer />
                            <Typography
                                sx={{
                                    // position: 'absolute',
                                    fontSize: '14px',
                                    py: 1,
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
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default MessageLayout;

