import React from 'react';
import Header from '../DefaultLayouts/Header/Header';
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { blue } from '@mui/material/colors';

function NotificationLayout({ children }) {
    return (
        <Box sx={{ backgroundColor: '#f3f2f0', minHeight: '100vh', position: 'relative' }}>
            <Header />
            <Container sx={{ mt: 12, paddingBottom: '50px' }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <Box
                            sx={{
                                border: '1px solid #d9d9d9',
                                bgcolor: '#fff',
                                width: '100%',
                                height: '300px',
                                borderRadius: '12px',
                                px: 3,
                                py: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    textTransform: 'capitalize',
                                }}
                            >
                                manage your notifications
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 1,
                                    fontSize: '15px',
                                    textTransform: 'capitalize',
                                    color: blue['A400'],
                                    '&:hover': {
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                view settings
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box sx={{ minHeight: '10vh', borderRadius: '24px' }}>
                            <Box>{children}</Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Typography
                sx={{
                    fontSize: '14px',
                    py: 2,
                    color: 'text.secondary',
                    textAlign: 'center',
                    position: 'absolute',
                    bottom: '0',
                    width: '100%',
                }}
            >
                Aikotoba Corporation &copy; 2023
            </Typography>
        </Box>
    );
}

export default NotificationLayout;
