import React, { useState } from 'react';
import { Box, IconButton, Typography, Button, Divider, Avatar, Modal, Menu } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DefaultBackgroundImage from '../../assets/images/pn.jpeg';

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SatelliteIcon from '@mui/icons-material/Satellite';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import styled from '@emotion/styled';
import ChangePhoto from '../ChangeUserPhoto/ChangeUserPhoto';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import UserPhotoAvatarPrivacy from '../UserPhotoAvatarPrivacy/UserPhotoAvatarPrivacy';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import Close from '@mui/icons-material/Close';

function EditUserImageModal({ handleClose }) {
    const [activeModal, setActiveModal] = useState(null);
    const [showSettings, setShowSettings] = useState(false);
    const handleOpenModal = (modalType) => {
        setActiveModal(modalType);
    };

    const handleCloseModal = () => {
        setActiveModal(null);
    };

    const handleShowSettings = () => {
        setShowSettings(true);
    };

    const handleCloseSettings = () => {
        setShowSettings(false);
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
                    }}
                >
                    <Avatar
                        src={DefaultBackgroundImage}
                        alt="Default User Background Image"
                        sx={{
                            height: '300px',
                            width: '300px',
                            [mobileScreen]: {
                                height: '200px',
                                width: '200px',
                            },
                        }}
                    />
                </Box>

                {/* set permission? for whom can see it */}

                {/* <IconButton>
                        <VisibilityIcon sx={{ color: '#fff', fontSize: '16px' }} />
                    </IconButton>
                    <CustomizeTypography sx={{ color: '#fff' }}>Anyone</CustomizeTypography> */}
                {/* <Button
                    startIcon={<VisibilityIcon sx={{ color: '#fff', fontSize: '14px' }} />}
                    sx={{
                        px: 2,
                        padding: '2px 12px',
                        fontSize: '16px',
                        color: '#fff',
                        borderRadius: '24px',
                        border: '1px solid #fff',
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                        '&:hover': {
                            bgcolor: '#525455',
                            boxShadow: '2px 1px 0px #fff',
                        },
                        ml: 2,
                    }}
                    onClick={() => handleOpenModal('photoSettings')}
                >
                    Anyone
                </Button> */}

                <PositionedMenu />

                <Divider sx={{ mt: 2, borderColor: '#fff' }} />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 2,
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ProfileButton
                            icon={<EditIcon sx={{ color: '#fff', fontSize: '28px' }} />}
                            textAction={'Edit'}
                        />
                        <ProfileButton
                            icon={<CameraAltIcon sx={{ color: '#fff', fontSize: '28px' }} />}
                            textAction={'Add photo'}
                            handleClick={() => handleOpenModal('changePhoto')}
                        />
                        <ProfileButton
                            icon={<SatelliteIcon sx={{ color: '#fff', fontSize: '28px' }} />}
                            textAction={'Frames'}
                        />
                    </Box>
                    <ProfileButton
                        icon={<DeleteIcon sx={{ color: '#fff', fontSize: '28px' }} />}
                        textAction={'Delete'}
                    />
                </Box>
                <Modal open={activeModal === 'changePhoto'} onClose={handleCloseModal}>
                    <ChangePhoto handleCloseChange={handleCloseModal} />
                </Modal>
                <Modal open={activeModal === 'photoSettings'} onClose={handleCloseModal}>
                    <UserPhotoAvatarPrivacy handleClose={handleCloseModal} />
                </Modal>
            </Box>
        </Modal>
    );
}

export default EditUserImageModal;

const ProfileButton = ({ icon, textAction, handleClick }) => {
    return (
        <Box
            onClick={handleClick}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mr: 2,
                // mb: 1,
                borderRadius: 1,
                p: 1,
                '&:hover': {
                    bgcolor: '#525455',
                    cursor: 'pointer',
                },
            }}
        >
            <IconButton>{icon}</IconButton>
            <CustomizeTypography sx={{ color: '#fff' }}>{textAction}</CustomizeTypography>
        </Box>
    );
};

function PositionedMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                onClick={handleClick}
                startIcon={<VisibilityIcon sx={{ color: '#fff', fontSize: '14px' }} />}
                sx={{
                    px: 2,
                    padding: '2px 12px',
                    fontSize: '16px',
                    color: '#fff',
                    borderRadius: '24px',
                    border: '1px solid #fff',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    //make animation smoother
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        // increase border color for button
                        boxShadow: '0 0 0 2px #fff',
                    },
                    ml: 2,
                }}
            >
                Anyone
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{
                    mt: 5,
                    '.MuiPaper-root': {
                        width: '300px',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 1,
                    }}
                >
                    <CustomizeTypography fw={true}>Visibility</CustomizeTypography>
                    <IconButton
                        disableTouchRipple
                        sx={{
                            padding: 0,
                            '&:hover': {
                                bgcolor: 'transparent',
                            },
                        }}
                    >
                        <Close sx={{ fontSize: '24px' }} />
                    </IconButton>
                </Box>

                <CustomizeTypography fs="14px" sx={{ p: 1 }}>
                    Choose who can see your profile photo
                </CustomizeTypography>

                <Divider />
                <MenuItem
                    onClick={handleClose}
                    sx={{
                        '&:hover': {
                            bgcolor: 'transparent',
                        },
                        px: 1,
                    }}
                >
                    <PrivacyButtonPhoto
                        textAction={'All Aikotoba members'}
                        subTextAction={
                            'Members signed into Aikotoba, including everyone in your network.'
                        }
                    />
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} sx={{ px: 1 }}>
                    <PrivacyButtonPhoto
                        textAction={'Your network'}
                        subTextAction={'Only people follow you in Aikotoba'}
                    />
                </MenuItem>
                <Box
                    sx={{
                        px: 2,
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            padding: '2px 12px',
                            fontSize: '14px',
                            borderRadius: '24px',
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                        }}
                    >
                        Save
                    </Button>
                </Box>
            </Menu>
        </div>
    );
}

const PrivacyButtonPhoto = ({ icon, handleOnClick, textAction, subTextAction, selected }) => {
    return (
        <Box>
            <Box
                sx={{
                    // '&:hover': { bgcolor: theme.palette.bgButtonHover, cursor: 'pointer' },

                    display: 'flex',
                    alignItems: 'center',
                }}
                onClick={handleOnClick}
            >
                <Box
                    sx={{
                        width: '15px',
                        height: '15px',
                        // color: theme.palette.bgButtonHover,
                        bgcolor: selected ? 'green' : '#fff',
                        borderRadius: '50%',
                        marginRight: 1,
                        border: `1px solid ${selected ? 'green' : '#333'}`,
                        position: 'relative',
                    }}
                >
                    {selected && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '12px',
                                height: '12px',
                                bgcolor: 'white',
                                color: theme.palette.bgButtonHover,
                                borderRadius: '50%',
                                border: '1px solid green',
                            }}
                        />
                    )}
                </Box>
                <CustomizeTypography fw={true} fs={'14.5px'} sx={{ flexGrow: 1 }}>
                    {/* Connections Only */}
                    {textAction}
                </CustomizeTypography>
            </Box>
            <Typography sx={{ whiteSpace: 'pre-wrap', fontSize: '12.5px' }}>
                {subTextAction}
            </Typography>
        </Box>
    );
};
