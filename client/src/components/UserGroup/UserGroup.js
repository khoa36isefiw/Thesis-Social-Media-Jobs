import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';


function UserGroup() {
    return (
        <Box>
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
            <Divider />
            <Link to="#">
                <Typography
                    sx={{ fontSize: '14px', color: 'text.secondary', fontWeight: '600', mt: 1 }}
                >
                    Discover more
                </Typography>
            </Link>
        </Box>
    );
}

export default UserGroup;
