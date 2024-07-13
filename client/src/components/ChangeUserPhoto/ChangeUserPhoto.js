import React, { useState, useRef } from 'react';
import { Box, IconButton, Divider, Button, Avatar, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DefaultBackgroundImage from '../../assets/images/pn.jpeg';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';
import { modalAnimation } from '../AnimationEffects/AnimationEffects';
import EditPhoto from '../EditPhoto/EditPhoto';

function ChangePhoto({ imgUrl, handleCloseChange, imageRotationAngle }) {
    const fileInputRef = useRef(null);
    const [imageURL, setImageURL] = useState(null);
    const [openEditPhotoModal, setOpenEditPhotoModal] = useState(false);
    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // Get the list of selected file
        const reader = new FileReader();
        reader.onload = () => {
            const imageDataURL = reader.result;
            // get the name of the uploaded image
            const imageName = file.name;
            // store both the name and URL
            setImageURL({ name: imageName, url: imageDataURL });
            setOpenEditPhotoModal(true);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleCloseEditPhotoModal = () => {
        setOpenEditPhotoModal(false);
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
                overflow: 'hidden',
                [ipadProScreen]: {
                    width: '70%',
                },
                [tabletScreen]: {
                    width: '80%',
                },
                [mobileScreen]: {
                    width: '100%',
                    height: '460px',
                    mt: '32px',
                    borderRadius: 0,
                },
                ...modalAnimation,
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
                    Change photo
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

            <Divider
                sx={{
                    mb: 2,
                    [mobileScreen]: {
                        mb: 1,
                    },
                }}
            />
            <CustomizeTypography
                fs="18px"
                sx={{
                    color: '#191919',
                    textAlign: 'center',
                    py: 2,
                    [mobileScreen]: {
                        fontSize: '16px',
                        py: 1,
                    },
                }}
            >
                Huynh, help others recognize you!
            </CustomizeTypography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Avatar
                    src={imgUrl.imgUrl || DefaultBackgroundImage}
                    alt="Default User Image"
                    sx={{
                        height: '248px',
                        width: '248px',
                        filter: imgUrl.imageStyle,
                        transform: `rotate(${imageRotationAngle}deg)`,
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
                    <CustomizeTypography
                        fs="18px"
                        sx={{
                            color: '#191919',
                            textAlign: 'center',
                            [mobileScreen]: {
                                fontSize: '14px',
                            },
                        }}
                    >
                        Showcase your personality, interests, team moments or notable milestones
                    </CustomizeTypography>
                    <CustomizeTypography
                        fs="13px"
                        sx={{
                            color: 'text.primary',
                            mt: 2,
                            textAlign: 'center',
                            [mobileScreen]: {
                                fontSize: '14px',
                                mt: 0,
                            },
                        }}
                    >
                        A good photo will help you stand out.
                    </CustomizeTypography>
                </Box>
            </Box>
            <Divider
                sx={{
                    mt: 2,
                    mb: 2,
                    [mobileScreen]: {
                        my: '14px',
                    },
                }}
            />

            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
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
                        mr: '20px',
                    }}
                    onClick={handleUploadClick}
                >
                    Upload photo
                </Button>
            </Box>
            <Modal open={openEditPhotoModal} onClose={handleCloseEditPhotoModal}>
                <EditPhoto
                    imgUrl={imageURL !== null && imageURL.url}
                    handleCloseChange={handleCloseEditPhotoModal}
                />
            </Modal>
        </Box>
    );
}

export default ChangePhoto;
