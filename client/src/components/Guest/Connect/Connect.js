import React from 'react';
import { Box, Typography, Button, Fab } from '@mui/material';
import Interview from '../../../assets/images/interview2.jpeg';

function Connect() {
    return (
        <Box>
            <Box sx={{ position: 'relative', overflowX: 'hidden' }}>
                <img src={Interview} style={{ objectFit: 'contain', width: '100%' }} />
                <Box
                    sx={{
                        position: 'absolute',
                        top: '0%',
                        left: '15%',
                    }}
                >
                    <Typography
                        sx={{
                            color: 'yellowgreen',
                            fontWeight: '700',
                            fontSize: '36px',
                        }}
                    >
                        Join your colleagues, classmates, and friends.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            fontSize: '16px',
                            borderRadius: '24px',
                            boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.4)',
                            textTransform: 'capitalize',
                            '&:hover': {
                                boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.8)',
                            },
                        }}
                    >
                        Get Started
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Connect;
