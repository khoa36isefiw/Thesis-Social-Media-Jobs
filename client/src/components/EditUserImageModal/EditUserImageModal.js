import React from 'react';
import { Box, IconButton, Typography, Button, Divider, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DefaultBackgroundImage from '../../assets/images/pn.jpeg';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SatelliteIcon from '@mui/icons-material/Satellite';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import styled from '@emotion/styled';
function EditUserImageModal({ handleClose }) {
    return (
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
            <Button
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
                    },
                    ml: 2,
                }}
            >
                Anyone
            </Button>

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
        </Box>
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
