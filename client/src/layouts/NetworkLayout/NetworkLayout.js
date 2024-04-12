import React, { useState } from 'react';
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Advertising from '../../components/Advertising/Advertising';
import Header from '../DefaultLayouts/Header/Header';
import HiringCareer from '../../components/Advertising/HiringCareer';
import { CustomizeBox } from '../../components/CustomizeBox/CustomizeBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ManageMyNetwork from '../../components/ManageMyNetwork/ManageMyNetwork';

function NetworkLayout({ children }) {
    const [isExpended, setIsExpended] = useState(false);
    const handleExpendMore = () => {
        setIsExpended(!isExpended);
    };
    return (
        <Box sx={{ backgroundColor: '#f3f2f0', minHeight: '100vh' }}>
            <Header />
            <Container sx={{ mt: 12 }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={5} md={3}>
                        {/* Manage my network */}
                        <Box>
                            <ManageMyNetwork />
                        </Box>
                        <Box sx={{ position: 'relative', mt: 2 }}>
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
                                }}
                            >
                                Aikotoba Corporation &copy; 2023
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <Box sx={{ minHeight: '10vh', borderRadius: '24px' }}>
                            <Box>{children}</Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* </Container> */}
            </Container>
        </Box>
    );
}

export default NetworkLayout;
