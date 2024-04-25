import React from 'react';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Advertising from '../../components/Advertising/Advertising';
import Header from '../DefaultLayouts/Header/Header';
import { mobileScreen } from '../../components/Theme/Theme';

function ManageMyNetworkLayout({ children }) {
    return (
        <Box sx={{ backgroundColor: '#f3f2f0', minHeight: '100vh' }}>
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
                    <Grid item xs={12} sm={7} md={8}>
                        <Box sx={{ minHeight: '10vh', borderRadius: '24px' }}>
                            <Box>{children}</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={5} md={4}>
                        {/* Manage my network */}
                        <Box sx={{ position: 'relative' }}>
                            <Advertising />
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    py: 2,
                                    color: 'text.secondary',
                                    textAlign: 'center',
                                    position: 'absolute',
                                    // top: '50%',
                                    width: '100%',
                                    [mobileScreen]: {
                                        mt: -2,
                                    },
                                }}
                            >
                                Aikotoba Corporation &copy; 2023
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* </Container> */}
            </Container>
        </Box>
    );
}

export default ManageMyNetworkLayout;
