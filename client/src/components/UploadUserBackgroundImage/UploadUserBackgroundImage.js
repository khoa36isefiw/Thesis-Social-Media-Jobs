import React, { useState, useRef } from 'react';
import { Box, IconButton, Button, Divider, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';

import Modal from '@mui/material/Modal';

import ChangeUserBackgroundPhoto from '../EditUserBackgroundPhoto/EditUserBackgroundPhoto';
import { useLoggedInUser } from '../CallDataInRedux/CallDataInRedux';

function UploadUserBackgroundImage({ bgImageURL, bgStyle, bgRotateAngle, handleClose }) {
    const fileInputRef = useRef(null);
    const [imageURL, setImageURL] = useState(null);
    const authenticatedInformation = useLoggedInUser();
    const [rotate, setRotate] = useState(
        authenticatedInformation.userBackgroundPhoto.bgRotationAngle,
    ); // get the current image rotate angle
    const [uploadBackgroundImageStyle, setUploadBackgroundImageStyle] = useState(
        authenticatedInformation.userBackgroundPhoto.bgStyle,
    ); // get the current image rotate angle
    console.log('Image style of image is: ', uploadBackgroundImageStyle);

    const [bgImageType, setBgImageType] = useState('');
    const handleOpenEditBgImageModal = () => {
        setBgImageType('editBgImage');
    };

    const handleCloseModal = () => {
        setBgImageType(null);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // Get the list of selected file
        const reader = new FileReader();
        reader.onload = () => {
            const imageDataURL = reader.result;
            // get the name of the uploaded image
            const imageName = file.name;
            // store both the name and URL
            setImageURL({ name: imageName, url: imageDataURL });
            setRotate(0); // rotate = 0 when new image is uploaded
            setUploadBackgroundImageStyle(null);

            setBgImageType('uploadBgImage');
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleUploadBackgroundImage = () => {
        fileInputRef.current.click();
    };

    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#fff',
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
                    borderRadius: 0,
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
                    p: 1,
                }}
            >
                <CustomizeTypography fs={'20px'} fw={true}>
                    Add background photo
                </CustomizeTypography>
                <IconButton
                    disableFocusRipple
                    sx={{
                        '&:hover': {
                            backgroundColor: '#d9d9d9',
                        },
                    }}
                    onClick={handleClose}
                >
                    <CloseIcon fontSize="large" />
                </IconButton>
            </Box>

            <Divider sx={{ mb: 2 }} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Avatar
                    src={bgImageURL}
                    alt="Default User Background Image"
                    sx={{
                        height: '256px',
                        width: '256px',
                        filter: bgStyle,
                        transform: `rotate(${bgRotateAngle}deg)`,
                        [mobileScreen]: {
                            height: '200px',
                            width: '200px',
                        },
                    }}
                />
                <Box
                    sx={{
                        width: '60%',
                        textAlign: 'center',
                        p: 1,
                        [mobileScreen]: { textAlign: 'left', width: '90%' },
                    }}
                >
                    <CustomizeTypography fs="18px" sx={{ color: '#191919' }}>
                        Showcase your personality, interests, team moments or notable milestones
                    </CustomizeTypography>
                    <CustomizeTypography fs="13px" sx={{ color: 'text.primary', mt: 2 }}>
                        A good background photo will help you stand out.
                    </CustomizeTypography>
                </Box>
            </Box>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Button
                    variant="outlined"
                    sx={{
                        fontSize: '14px',
                        textTransform: 'initial',
                        fontWeight: 'bold',
                        padding: '4px 24px',
                        borderRadius: '24px',
                        mb: 2,
                        mx: 1,
                        // mr: '20px',
                    }}
                    onClick={handleOpenEditBgImageModal}
                >
                    Edit Background
                </Button>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                />
                <Button
                    variant="contained"
                    sx={{
                        fontSize: '14px',
                        textTransform: 'initial',
                        fontWeight: 'bold',
                        width: '200px',
                        borderRadius: '24px',
                        mb: 2,
                        mx: 2,
                        // mr: '20px',
                    }}
                    onClick={handleUploadBackgroundImage}
                >
                    Upload Background
                </Button>
            </Box>

            <Modal open={bgImageType === 'editBgImage'} onClose={handleCloseModal}>
                <ChangeUserBackgroundPhoto
                    bgImgUrl={imageURL !== null ? imageURL.url : bgImageURL}
                    handleCloseChange={handleCloseModal}
                />
            </Modal>
            <Modal open={bgImageType === 'uploadBgImage'} onClose={handleCloseModal}>
                <ChangeUserBackgroundPhoto
                    bgImgUrl={imageURL !== null ? imageURL.url : bgImageURL}
                    handleCloseChange={handleCloseModal}
                    bgRotate={rotate}
                    bgImageUploadedStyle={uploadBackgroundImageStyle}
                />
            </Modal>
        </Box>
    );
}

export default UploadUserBackgroundImage;
