import React from 'react';
import { Box, Avatar, Typography, IconButton, Button, TextField, Container } from '@mui/material';
import UserAvatar from '../../assets/images/avatar.jpeg';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import Media from '../../assets/images/picture.png';
import Events from '../../assets/images/calendar.png';

const CustomAvatarWithText = ({ src, alt, children }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
        <Avatar
            src={src}
            alt={alt}
            sx={{ mr: 2, height: '32px', width: '32px', borderRadius: '0px' }}
        />
        {children}
    </Box>
);

function MakePosts() {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Avatar
                    src={UserAvatar}
                    alt="User Avatar"
                    sx={{ mr: 2, height: '48px', width: '48px' }}
                />

                <Button
                    sx={{
                        border: '1px solid #333',
                        borderRadius: '24px',
                        padding: '12px',
                    }}
                    fullWidth
                >
                    <Typography
                        sx={{
                            fontSize: '13px',
                            textTransform: 'initial',
                            color: 'text.secondary',
                            fontWeight: 'bold',
                        }}
                    >
                        Start a Post
                    </Typography>
                </Button>
            </Box>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    mt: 2,
                    mb: 1,
                }}
            >
                <CustomAvatarWithText src={Media} alt="Upload Images">
                    <CustomizeTypography sx={{ fontWeight: 'bold' }}>Media</CustomizeTypography>
                </CustomAvatarWithText>
                <CustomAvatarWithText src={Events} alt="Upload Events">
                    <CustomizeTypography sx={{ fontWeight: 'bold' }}>Events</CustomizeTypography>
                </CustomAvatarWithText>
            </Container>
        </div>
    );
}

export default MakePosts;
