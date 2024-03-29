import React from 'react';
import { Box, Typography, Divider, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import UserAvatar from '../../assets/images/avatar.jpeg';
function UserInformation() {
    return (
        <Box>
            <Box>
                <Avatar
                    src={UserAvatar}
                    alt="User Avatar"
                    sx={{ m: 'auto', mb: 2, height: '64px', width: '64px' }}
                />
                <Link to="/user-profile">
                    <Typography
                        sx={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            mt: '4px',
                            '&:hover': {
                                cursor: 'pointer',
                                textDecoration: 'underline',
                            },
                        }}
                    >
                        Huynh Dang Khoa
                    </Typography>
                </Link>
                <Typography sx={{ fontSize: '14px', mb: '8px' }}>Student at HCMUTE</Typography>
                <Divider />
            </Box>
            <Box sx={{ mt: 2, mb: 2 }}>
                <Typography
                    sx={{ fontSize: '14px', fontWeight: 'bold', mt: '4px', textAlign: 'left' }}
                >
                    Connections
                </Typography>
                <Typography sx={{ fontSize: '14px', mb: 2, textAlign: 'left' }}>
                    Connect with alumina
                </Typography>
                <Divider />
            </Box>
        </Box>
    );
}

export default UserInformation;
