import React, { useState } from 'react';
import { Box, IconButton, Typography, Button, Divider, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';
import { ViewingRights } from '../EditUserProfilePhotoModal/EditUserProfilePhotoModal';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedInUser } from '../../redux/ManageAccount/manageAccountAction';
import SnackbarShowNotifications from '../SnackbarShowNotifications/SnackbarShowNotifications';
import WarningIcon from '@mui/icons-material/Warning';
function EditPhoto({ imgUrl, handleCloseChange }) {
    const dispatch = useDispatch();
    const [animationClass, setAnimationClass] = useState('animate__zoomIn'); // default to start an animation
    const [showNotifications, setShowNotifications] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const userLoggedInInformation = useSelector((state) => state.manageAccounts.loggedInUser);

    console.log('user logged in before changing image: ', userLoggedInInformation);
    const handleSavePhotoEdited = () => {
        // update for userPhoto field
        dispatch(setLoggedInUser({ ...userLoggedInInformation, userPhoto: imgUrl }));
        setAnimationClass('animate__zoomOut');
        setShowNotifications(true);
        setNotificationMessage('Change your photo successfully');

        setTimeout(() => {
            handleCloseChange();
        }, 500);
    };

    const handleCloseSnackbar = () => {
        setShowNotifications(false);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#fff',
                width: '40%',
                minHeight: '350px',
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
                // ...modalAnimation,
            }}
            className={`animate__animated ${animationClass}`}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1,
                }}
            >
                <CustomizeTypography fs={'20px'} fw={true}>
                    Edit Photo
                </CustomizeTypography>
                <IconButton
                    disableFocusRipple
                    sx={{
                        '&:hover': {
                            backgroundColor: '#d9d9d9',
                        },
                    }}
                    onClick={handleCloseChange}
                >
                    <CloseIcon fontSize="large" />
                </IconButton>
            </Box>

            <Divider />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // bgcolor: '#333',
                    backgroundColor: '#1b1f23',
                    p: 1,
                }}
            >
                <Avatar
                    // src={DefaultBackgroundImage}
                    src={imgUrl}
                    alt="Default User Image"
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
            <CustomizeTypography sx={{ textAlign: 'center', py: 2 }}>
                Show your styles to Anyone
            </CustomizeTypography>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2,
                }}
            >
                <ViewingRights changeColor={true} />
                <Button
                    variant="contained"
                    sx={{
                        fontSize: '14px',
                        textTransform: 'initial',
                        fontWeight: 'bold',
                        padding: '4px 24px',
                        borderRadius: '24px',
                        // mb: 2,
                        mx: 2,
                        mr: '20px',
                    }}
                    onClick={handleSavePhotoEdited}
                >
                    Save
                </Button>
            </Box>
            {/* {showNotifications && (
                <SnackbarShowNotifications
                    mainText={notificationMessage}
                    isOpen={showNotifications}
                    onClose={handleCloseSnackbar}
                />
            )} */}
            {showNotifications && (
                <SnackbarShowNotifications
                    // mainText="Create account successfully!"
                    // isOpen={showNotifications}
                    // onClose={handleCloseSnackbar}
                    // // warning
                    // // icon={<WarningIcon sx={{ fontSize: '24px', color: 'orange' }} />}
                    mainText={notificationMessage}
                    isOpen={showNotifications}
                    onClose={handleCloseSnackbar}
                    warning={notificationMessage !== 'Create account successfully!'}
                    icon={
                        notificationMessage !== 'Create account successfully!' && (
                            <WarningIcon
                                sx={{
                                    fontSize: '24px',
                                    color: 'orange',
                                }}
                            />
                        )
                    }
                />
            )}
        </Box>
    );
}

export default EditPhoto;
