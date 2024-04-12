import React from 'react';
import { Box, Typography, Divider, Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UserAvatar from '../../assets/images/avatar.jpeg';
import { blue } from '@mui/material/colors';
import { scrollToTop } from '../ScrollToTop/ScrollToTop';
function UserInformation() {
    const navigate = useNavigate();
    const handleNavigateToProfile = () => {
        navigate('/user-profile');
        scrollToTop();
    };
    return (
        <Box sx={{ border: '1px solid #d9d9d9', backgroundColor: '#fff', borderRadius: '12px' }}>
            {/* <Box>
                <Avatar
                    src={UserAvatar}
                    alt="User Avatar"
                    sx={{ m: 'auto', mb: 2, height: '64px', width: '64px' }}
                /> */}

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar
                    // src={UserBackgroundImage}
                    src={
                        'https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM='
                    }
                    alt="User Backgorund Image"
                    sx={{
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        borderBottomLeftRadius: '0',
                        borderBottomRightRadius: '0',
                        width: '100%',
                        height: '80px',
                        objectFit: 'contain',
                        zIndex: 2,
                    }}
                />
                <Avatar
                    src={UserAvatar}
                    alt="User Avatar"
                    sx={{
                        height: '80px',
                        width: '80px',
                        mt: '-40px',
                        border: '4px solid #fff',
                        zIndex: 7,
                    }}
                />

                <Typography
                    onClick={handleNavigateToProfile}
                    sx={{
                        fontSize: '16px',
                        fontWeight: 'bold',

                        mt: '4px',
                        '&:hover': {
                            cursor: 'pointer',
                            color: blue[800],
                            textDecoration: 'underline',
                        },
                    }}
                >
                    Huynh Dang Khoa
                </Typography>
                <Typography sx={{ fontSize: '14px', mb: '8px' }}>Student at HCMUTE</Typography>
                <Box sx={{ width: '100%', height: '1px', bgcolor: '#d9d9d9' }}></Box>
            </Box>
            <Box sx={{ p: 2 }}>
                <Typography
                    sx={{ fontSize: '14px', fontWeight: 'bold', mt: '4px', textAlign: 'left' }}
                >
                    Connections
                </Typography>
                <Typography sx={{ fontSize: '14px', mb: 2, textAlign: 'left' }}>
                    Connect with alumina
                </Typography>
            </Box>
        </Box>
    );
}

export default UserInformation;
