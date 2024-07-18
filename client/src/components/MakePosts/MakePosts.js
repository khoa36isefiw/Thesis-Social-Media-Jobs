import React, { useState, forwardRef } from 'react';
import { Box, Avatar, Typography, Button, Container, Modal } from '@mui/material';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import Media from '../../assets/images/picture.png';
import Events from '../../assets/images/calendar.png';
import PostModal from './PostModal';
import { useSelector } from 'react-redux';

const CustomAvatarWithText = ({ src, alt, text }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
        <Avatar
            src={src}
            alt={alt}
            sx={{ mr: 2, height: '32px', width: '32px', borderRadius: '0px' }}
        />
        <CustomizeTypography sx={{ fontWeight: 'bold' }}>{text}</CustomizeTypography>
    </Box>
);

function MakePosts() {
    const userLoggedInInformation = useSelector((state) => state.manageAccounts.loggedInUser);
    const [openModal, setOpenModal] = useState(false);

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const handleShowModal = () => {
        setOpenModal(true);
    };

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Avatar
                    src={
                        userLoggedInInformation.userPhoto &&
                        userLoggedInInformation.userPhoto.imgUrl
                    }
                    alt="User Avatar"
                    sx={{
                        mr: 2,
                        height: '48px',
                        width: '48px',
                        filter:
                            userLoggedInInformation.userPhoto &&
                            userLoggedInInformation.userPhoto.imageStyle,
                        transform: `rotate(${userLoggedInInformation.userPhoto.imageRotationAngle}deg)`,
                    }}
                />

                <Button
                    sx={{
                        border: '1px solid #333',
                        borderRadius: '24px',
                        padding: '12px',
                    }}
                    fullWidth
                    onClick={handleShowModal}
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
                <CustomAvatarWithText src={Media} alt="Upload Images" text="Media" />
                <CustomAvatarWithText src={Events} alt="Upload Events" text="Events" />

                {/* <CustomAvatarWithText src={Events} alt="Upload Events">
                    <CustomizeTypography sx={{ fontWeight: 'bold' }}>Events</CustomizeTypography>
                </CustomAvatarWithText> */}

                {/* Show Post Modal */}
            </Container>

            <Modal open={openModal} onClose={handleCloseModal}>
                {/* <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        borderRadius: '12px',
                        boxShadow: '10px 5px 10px #605e5e',
                        p: 2,
                    }}
                >
                    <PostModal closeModal={handleCloseModal} />
                </Box> */}

                <PostModal closeModal={handleCloseModal} />
            </Modal>
        </React.Fragment>
    );
}

export default MakePosts;
