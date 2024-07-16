import React, { useEffect, useState, userId } from 'react';
import { Box, IconButton, Typography, Button, Divider, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';
import { ViewingRights } from '../EditUserProfilePhotoModal/EditUserProfilePhotoModal';
import { useDispatch, useSelector } from 'react-redux';
import {
    setLoggedInUser,
    setSelectedFilterIndex,
    setSelectedImageRotationAngle,
} from '../../redux/ManageAccount/manageAccountAction';
import SnackbarShowNotifications from '../SnackbarShowNotifications/SnackbarShowNotifications';
import WarningIcon from '@mui/icons-material/Warning';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { RotateButton } from '../RotateButton/RotateButton';

const filterList = [
    { filterName: 'Original', filterStyle: null },
    { filterName: 'Brightness', filterStyle: 'brightness(1.75)' },
    { filterName: 'Contrast', filterStyle: 'contrast(2)' },
    { filterName: 'Sepia', filterStyle: 'sepia(60%)' },
    { filterName: 'Saturate', filterStyle: 'saturate(200%)' },
];
function EditPhoto({ imageUrl, handleCloseChange, rotate }) {
    console.log('rotate: ', rotate);
    const dispatch = useDispatch();
    const indexFilterImage = useSelector((state) => state.manageAccounts.selectedFilterIndex);
    const rotationAngleImage = useSelector((state) => state.manageAccounts.selectedImageAngle);
    const userLoggedInInformation = useSelector((state) => state.manageAccounts.loggedInUser);
    // console.log('rotationAngleImage: ', rotationAngleImage);

    const [animationClass, setAnimationClass] = useState('animate__zoomIn'); // default to start an animation
    const [showNotifications, setShowNotifications] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(indexFilterImage);
    // const [rotationAngle, setRotationAngle] = useState(0);
    const [notificationMessage, setNotificationMessage] = useState('');
    // show the current rotation of user image in edit modal

    // if rotate is undefine uses userLoggedInInformation.userPhoto.imageRotationAngle
    // else (new image uploaded) --> set rotationangle = 0
    const [rotationAngle, setRotationAngle] = useState(
        rotate !== undefined ? rotate : userLoggedInInformation.userPhoto.imageRotationAngle,
    );

    const handleSavePhotoEdited = () => {
        // update for userPhoto field
        const userId = userLoggedInInformation.userId;
        dispatch(
            setLoggedInUser({
                ...userLoggedInInformation,
                userPhoto: {
                    imgUrl: imageUrl,
                    imageStyle: filterList[selectedFilter].filterStyle,
                    imageRotationAngle: rotationAngle,
                },
            }),
        );
        setAnimationClass('animate__zoomOut');
        dispatch(setSelectedFilterIndex(selectedFilter)); // save index of image selected filter
        dispatch(setSelectedImageRotationAngle({ angle: rotationAngle, userId }));
        // setShowNotifications(true);
        // setNotificationMessage('Change your photo successfully');

        setTimeout(() => {
            handleCloseChange();
        }, 500);
    };

    const handleCloseSnackbar = () => {
        setShowNotifications(false);
    };

    const handleSelectedFilters = (index) => {
        setSelectedFilter(index);
    };

    const handleRotateLeft = () => {
        // update the state based on its previous value
        setRotationAngle((prevAngle) => prevAngle - 90);
    };
    const handleRotateRight = () => {
        setRotationAngle((prevAngle) => prevAngle + 90);
    };

    // const handleCloseEditPhotoModal = () => {
    //     setRotationAngle(userLoggedInInformation.userPhoto.imageRotationAngle);
    //     handleCloseChange();
    // };

    // console.log('rotationAngle: ', rotationAngle);
    // console.log('rotationAngleImage: ', rotationAngleImage);
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#fff',
                width: '40%',
                minHeight: '350px',
                margin: 'auto',
                mt: '32px',
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
                    height: '550px',
                    borderRadius: 0,
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
                    // onClick={handleCloseEditPhotoModal}
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
                    // src={imageUrl}
                    src={imageUrl}
                    alt="Default User Image"
                    sx={{
                        height: '350px',
                        width: '350px',
                        // borderRadius: 0,
                        // transform: `rotate(${rotationAngle}deg)`,
                        transform: `rotate(${rotationAngle}deg)`,
                        transition: 'transform 0.5s ease-in-out',
                        [mobileScreen]: {
                            height: '200px',
                            width: '200px',
                        },
                        // show filter image is selected
                        filter: filterList[selectedFilter].filterStyle,
                    }}
                />
            </Box>
            <CustomizeTypography sx={{ textAlign: 'center', py: 2 }}>
                Show your styles to Anyone
            </CustomizeTypography>

            {/* List images are filtered */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    [mobileScreen]: { display: 'block' },
                }}
            >
                <Box sx={{ display: 'flex' }}>
                    {filterList.map((filter, index) => (
                        <Box
                            key={index}
                            sx={{
                                ml: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                '&:hover': {
                                    cursor: 'pointer',
                                },
                            }}
                            onClick={() => handleSelectedFilters(index)}
                        >
                            <Box
                                sx={{
                                    height: '56px',
                                    width: '56px',
                                    border:
                                        selectedFilter === index
                                            ? '1px solid #333'
                                            : '1px solid transparent',
                                    // Smooth transition for border and box-shadow
                                    transition: 'border 0.3s, box-shadow 0.3s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow:
                                        selectedFilter === index
                                            ? '0 0 0 3px #fff'
                                            : '0 0 0 0 transparent',
                                }}
                            >
                                <Avatar
                                    src={imageUrl}
                                    alt="Default User Image"
                                    sx={{
                                        height: '55px',
                                        width: '55px',

                                        boxShadow:
                                            selectedFilter === index
                                                ? '0 0 0 3px #fff'
                                                : '0 0 0 0 transparent',
                                        transition: 'box-shadow 0.3s',
                                        filter: filter.filterStyle,
                                    }}
                                />
                            </Box>
                            <Typography sx={{ fontSize: '14px', mt: '4px' }}>
                                {filter.filterName}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                <Box
                    sx={{
                        [mobileScreen]: {
                            display: 'flex',

                            justifyContent: 'flex-end',
                            mt: 2,
                        },
                    }}
                >
                    <RotateButton
                        icon={<RotateRightIcon sx={{ color: 'black', fontSize: '20px' }} />}
                        handleClick={handleRotateRight}
                    />
                    <RotateButton
                        icon={<RotateLeftIcon sx={{ color: 'black', fontSize: '20px' }} />}
                        handleClick={handleRotateLeft}
                    />
                </Box>
            </Box>

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
