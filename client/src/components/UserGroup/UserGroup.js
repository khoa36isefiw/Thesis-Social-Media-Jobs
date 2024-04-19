import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { CustomizeBox } from '../CustomizeBox/CustomizeBox';
import { mobileScreen } from '../Theme/Theme';

function UserGroup() {
    return (
        <Box
            sx={{
                border: '1px solid #d9d9d9',
                bgcolor: '#fff',
                borderRadius: '12px',
                [mobileScreen]: { borderRadius: 0 },
            }}
        >
            <Box p={2}>
                <Typography
                    sx={{
                        fontSize: '14px',
                        color: 'text.secondary',
                        fontWeight: 'bold',
                        mt: 1,
                        textAlign: 'left',
                    }}
                >
                    Recent
                </Typography>
                <Link to="#">
                    <Typography
                        sx={{
                            fontSize: '14px',
                            color: '#0A66C2',
                            fontWeight: 'bold',
                            mt: 1,
                            mb: 1,
                            textAlign: 'left',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        }}
                    >
                        Groups
                    </Typography>
                </Link>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'center', p: 1, justifyContent: 'center' }}>
                <Link to="#">
                    <Typography
                        sx={{ fontSize: '14px', color: 'text.secondary', fontWeight: '600', mt: 1 }}
                    >
                        Discover more
                    </Typography>
                </Link>
            </Box>
        </Box>
    );
}

export default UserGroup;
