import React, { useState, useRef } from 'react';
import { Box, IconButton, Typography, Button, Divider, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';

import { useDispatch, useSelector } from 'react-redux';
import {
    setLoggedInUser,
    setSelectedBackgroundFilterIndex,
    setSelectedBackgroundRotationAngle,
} from '../../redux/ManageAccount/manageAccountAction';

import RotateRightIcon from '@mui/icons-material/RotateRight';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { RotateButton } from '../RotateButton/RotateButton';
import { useLoggedInUser } from '../CallDataInRedux/CallDataInRedux';

const filterList = [
    { filterName: 'Original', filterStyle: null },
    { filterName: 'Brightness', filterStyle: 'brightness(1.75)' },
    { filterName: 'Contrast', filterStyle: 'contrast(2)' },
    { filterName: 'Sepia', filterStyle: 'sepia(60%)' },
    { filterName: 'Saturate', filterStyle: 'saturate(200%)' },
];
function EditUserBackgroundPhoto({ bgImgUrl, handleCloseChange, bgRotate, bgImageUploadedStyle }) {
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);
    const [imageURL, setImageURL] = useState(null);

    const indexFilterBackground = useSelector(
        (state) => state.manageAccounts.selectedBackgroundFilterIndex,
    );

    const userLoggedInInformation = useLoggedInUser();

    console.log('indexFilterBackground: ', indexFilterBackground);
    const rotationAngleBackground = useSelector(
        (state) => state.manageAccounts.selectedBackgroundAngle,
    );
    const [animationClass, setAnimationClass] = useState('animate__zoomIn'); // default to start an animation

    // initial state
    // const [selectedFilter, setSelectedFilter] = useState(indexFilterBackground);
    // const [rotationAngle, setRotationAngle] = useState(rotationAngleBackground);
    const [selectedFilter, setSelectedFilter] = useState(
        bgImageUploadedStyle !== undefined
            ? bgImageUploadedStyle
            : userLoggedInInformation.userBackgroundPhoto.bgStyle,
    );
    const [rotationAngle, setRotationAngle] = useState(
        bgRotate !== undefined ? bgRotate : rotationAngleBackground,
    );

    const handleSaveBgPhotoEdited = () => {
        // update for userPhoto field
        // dispatch(setLoggedInUser({ ...userLoggedInInformation, userPhoto: bgImgUrl }));

        dispatch(
            setLoggedInUser({
                ...userLoggedInInformation,
                userBackgroundPhoto: {
                    bgUrl: imageURL ? imageURL.bgUrl : bgImgUrl,
                    bgStyle: selectedFilter,
                    bgRotationAngle: rotationAngle,
                },
            }),
        );
        setAnimationClass('animate__zoomOut');
        dispatch(
            setSelectedBackgroundFilterIndex({
                bgFilter: selectedFilter,
                userId: userLoggedInInformation.userId,
            }),
        ); // save index of image selected filter
        dispatch(setSelectedBackgroundRotationAngle(rotationAngle));

        setTimeout(() => {
            handleCloseChange();
        }, 500);
    };

    const handleSelectedFilters = (index) => {
        setSelectedFilter(filterList[index].filterStyle);
    };

    const handleRotateLeft = () => {
        // update the state based on its previous value
        setRotationAngle((prevAngle) => prevAngle - 180);
    };
    const handleRotateRight = () => {
        setRotationAngle((prevAngle) => prevAngle + 180);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // Get the list of selected file
        const reader = new FileReader();
        reader.onload = () => {
            const imageDataURL = reader.result;
            // get the name of the uploaded image
            const imageName = file.name;
            // store both the name and URL
            setImageURL({ name: imageName, bgUrl: imageDataURL });
            // Reset the filter and rotation for the new image
            setSelectedFilter(null);
            setRotationAngle(0);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#fff',
                width: '60%',
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
                    Edit Background Photo
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
                }}
            >
                <Box
                    component={'img'}
                    // src={DefaultBackgroundImage}
                    src={imageURL ? imageURL.bgUrl : bgImgUrl}
                    alt="Default User Image"
                    sx={{
                        height: '350px',
                        width: '100%',
                        objectFit: 'fill',
                        // bgcolor: '#fff',
                        transform: `rotate(${rotationAngle}deg)`,
                        transition: 'transform 0.5s ease-in-out',
                        [mobileScreen]: {
                            height: '200px',
                            width: '200px',
                        },
                        // show filter image is selected
                        filter: selectedFilter && selectedFilter,
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
                                    // border: '1px solid #d0d0d0',
                                    border:
                                        selectedFilter === filterList[index].filterStyle
                                            ? '4px solid green'
                                            : '1px solid transparent',
                                    // Smooth transition for border and box-shadow
                                    transition: 'border 0.3s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Avatar
                                    src={imageURL ? imageURL.bgUrl : bgImgUrl}
                                    alt="Default User Image"
                                    sx={{
                                        height: '55px',
                                        width: '55px',
                                        borderRadius: 0,

                                        filter: filter.filterStyle,
                                    }}
                                />
                            </Box>
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    mt: '4px',
                                    fontWeight:
                                        selectedFilter === filterList[index].filterStyle
                                            ? 'bold'
                                            : 'normal',
                                    textDecoration:
                                        selectedFilter === filterList[index].filterStyle
                                            ? 'underline'
                                            : 'normal',
                                }}
                            >
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
                    justifyContent: 'flex-end',
                    mb: 2,
                }}
            >
                <Box>
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleImageUpload}
                    />

                    <Button
                        variant="outlined"
                        sx={{
                            fontSize: '14px',
                            textTransform: 'initial',
                            fontWeight: 'bold',
                            padding: '4px 24px',
                            borderRadius: '24px',
                            // mb: 2,
                            mx: 1,
                            // mr: '20px',
                        }}
                        onClick={handleUploadClick}
                    >
                        Change background
                    </Button>
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        fontSize: '14px',
                        textTransform: 'initial',
                        fontWeight: 'bold',
                        padding: '4px 24px',
                        borderRadius: '24px',
                        // mb: 2,
                        mx: 1,
                        // mr: '20px',
                    }}
                    onClick={handleSaveBgPhotoEdited}
                >
                    Apply
                </Button>
            </Box>
        </Box>
    );
}

export default EditUserBackgroundPhoto;
