import React, { useState } from 'react';
import { Box, IconButton, Typography, Button, Divider, Avatar, Modal, Menu } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UserAvatar from '../../assets/images/avatar.jpeg';
import DefaultBackgroundImage from '../../assets/images/pn.jpeg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SatelliteIcon from '@mui/icons-material/Satellite';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ChangePhoto from '../ChangeUserPhoto/ChangeUserPhoto';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import UserPhotoAvatarPrivacy from '../UserPhotoAvatarPrivacy/UserPhotoAvatarPrivacy';
import MenuItem from '@mui/material/MenuItem';
import Close from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import DeleteSomething from '../DeleteSomething/DeleteSomething';
import EditPhoto from '../EditPhoto/EditPhoto';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import { ViewingRights } from './ViewingRights';

function EditUserProfilePhotoModal({
    userImageURL,
    handleClose,
    imageRotationAngle,
    imageFilterStyles,
}) {
    console.log('style image get from: ', imageFilterStyles);
    // console.log('userImageURL: ', userImageURL);
    const [activeModal, setActiveModal] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const handleOpenModal = (modalType) => {
        setActiveModal(modalType);
    };

    const handleCloseModal = () => {
        setActiveModal(null);
    };
    const handleShowDeleteConfirm = () => {
        setShowDeleteConfirm(true);
    };

    const modalAnimation = {
        '@keyframes fadeInScale': {
            '0%': { opacity: 0, transform: 'scale(0.9)' },
            '100%': { opacity: 1, transform: 'scale(1)' },
        },
        animation: 'fadeInScale 0.5s ease-in-out',
    };

    return (
        <Modal open onClose={handleClose}>
            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: '#1b1f23',
                    width: '50%',
                    minHeight: '300px',
                    margin: 'auto',
                    mt: '64px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 4px #333',
                    //  close icon doesn't overflow
                    overflow: 'hidden',
                    [ipadProScreen]: {
                        width: '70%',
                    },
                    [tabletScreen]: {
                        width: '90%',
                    },
                    [mobileScreen]: {
                        width: '100%',
                        height: '460px',
                    },
                    ...modalAnimation,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        py: 1,
                        px: 2,
                    }}
                >
                    <CustomizeTypography fs={'20px'} fw={true} sx={{ color: '#fff' }}>
                        Profile photo
                    </CustomizeTypography>
                    <IconButton
                        disableFocusRipple
                        sx={{
                            '&:hover': {
                                backgroundColor: '#525455',
                            },
                        }}
                        onClick={handleClose}
                    >
                        <CloseIcon fontSize="large" sx={{ color: '#fff' }} />
                    </IconButton>
                </Box>

                {/* <Divider sx={{ mb: 2, borderColor: '#fff' }} /> */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        [mobileScreen]: { p: 1 },
                    }}
                >
                    <Avatar
                        // src={DefaultBackgroundImage}
                        src={userImageURL ? userImageURL.imgUrl : UserAvatar}
                        // src={userImageURL.imgUrl}
                        alt="Default User Image"
                        sx={{
                            height: '300px',
                            width: '300px',
                            transform: `rotate(${imageRotationAngle}deg)`,
                            // filter: userImageURL.imageStyle,
                            filter: imageFilterStyles,
                            [mobileScreen]: {
                                height: '200px',
                                width: '200px',
                            },
                        }}
                    />
                </Box>

                {/* set permission? for whom can see it */}

                <ViewingRights />

                <Divider
                    sx={{
                        mt: 2,
                        borderColor: '#fff',
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 2,
                        [mobileScreen]: {
                            display: 'block',
                        },
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ProfileButton
                            icon={
                                <EditIcon
                                    sx={{
                                        color: '#fff',
                                        fontSize: '28px',
                                        [mobileScreen]: {
                                            fontSize: '24px',
                                        },
                                    }}
                                />
                            }
                            textAction={'Edit'}
                            handleClick={() => handleOpenModal('editPhoto')}
                        />
                        <ProfileButton
                            icon={
                                <CameraAltIcon
                                    sx={{
                                        color: '#fff',
                                        fontSize: '28px',
                                        [mobileScreen]: {
                                            fontSize: '24px',
                                        },
                                    }}
                                />
                            }
                            textAction={'Add photo'}
                            // changePhoto
                            handleClick={() => handleOpenModal('changePhoto')}
                        />
                        <ProfileButton
                            icon={
                                <SatelliteIcon
                                    sx={{
                                        color: '#fff',
                                        fontSize: '28px',
                                        [mobileScreen]: {
                                            fontSize: '24px',
                                        },
                                    }}
                                />
                            }
                            textAction={'Frames'}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <ProfileButton
                            icon={
                                <DeleteIcon
                                    sx={{
                                        color: '#fff',
                                        fontSize: '28px',
                                        [mobileScreen]: {
                                            fontSize: '24px',
                                        },
                                    }}
                                />
                            }
                            textAction={'Delete'}
                            handleClick={() => handleOpenModal('deletePhoto')}
                        />
                    </Box>
                </Box>

                <Modal open={activeModal === 'changePhoto'} onClose={handleCloseModal}>
                    <ChangePhoto
                        imgUrl={userImageURL}
                        handleCloseChange={handleCloseModal}
                        imageRotationAngle={imageRotationAngle}
                    />
                </Modal>

                <Modal open={activeModal === 'photoSettings'} onClose={handleCloseModal}>
                    <UserPhotoAvatarPrivacy handleClose={handleCloseModal} />
                </Modal>

                <Modal open={activeModal === 'deletePhoto'} onClose={handleCloseModal}>
                    <DeleteSomething handleClose={handleCloseModal} />
                </Modal>

                <Modal open={activeModal === 'editPhoto'} onClose={handleCloseModal}>
                    <EditPhoto
                        imageUrl={userImageURL.imgUrl}
                        handleCloseChange={handleCloseModal}
                    />
                </Modal>
            </Box>
        </Modal>
    );
}

export default EditUserProfilePhotoModal;
