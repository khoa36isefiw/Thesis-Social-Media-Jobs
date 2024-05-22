import React, { useState, useEffect } from 'react';
import { Avatar, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';

function ImageDetailInMessage({ imgUrl, handleClose }) {
    const [originalWidth, setOriginalWidth] = useState(null);
    const [originalHeight, setOriginalHeight] = useState(null);

    useEffect(() => {
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => {
            let newHeight = img.naturalHeight;
            let newWidth = img.naturalWidth;
            console.log('Original height and width for image: ', newHeight, newWidth);
            if (newHeight >= 600) {
                newHeight = 600;
            }
            if (newWidth >= 1125) {
                newWidth = 1100;
            }

            setOriginalWidth(newWidth);
            setOriginalHeight(newHeight);
        };

        // close modal when user press ESC
        const handleKeydown = (e) => {
            // ESC is 27
            if (e.keyCode === 27) {
                handleClose();
            }
        };
        // add event
        window.addEventListener('keydown', handleKeydown);

        // clear function
        return () => {
            //unmount
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [imgUrl]);

    const closeModal = () => {
        handleClose();
    };

    console.log('New height and width for image: ', originalHeight, originalWidth);
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#fff',
                //make center for box
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '1150px',
                height: '600px',
                [ipadProScreen]: {
                    width: '100%',
                    height: '85%',
                },
                [mobileScreen]: {
                    width: '100%',
                    height: '85%',
                },
                [tabletScreen]: {
                    width: '100%',
                    height: '85%',
                },
                margin: 'auto',
                mt: '80px',
                borderRadius: '12px',
                boxShadow: '0 4px 4px #333',
                //  close icon doesn't overflow
                overflow: 'hidden',
            }}
        >
            <IconButton
                disableFocusRipple
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    zIndex: 99,
                    '&:hover': {
                        backgroundColor: '#f2f2f2',
                    },
                }}
                onClick={closeModal}
            >
                <CloseIcon
                    sx={{
                        color: '#404040',
                        fontSize: '28px',
                        [ipadProScreen]: {
                            fontSize: '32px',
                        },
                        [mobileScreen]: {
                            fontSize: '32px',
                        },
                        [tabletScreen]: {
                            fontSize: '32px',
                        },
                    }}
                />
            </IconButton>

            <Box>
                {imgUrl && (
                    // <img
                    //     src={imgUrl}
                    //     alt="Posted Image"
                    //     style={{
                    //         width: originalWidth,
                    //         height: originalHeight,
                    //         objectFit: 'contain',
                    //         marginTop: '6px',
                    //     }}
                    // />
                    <Box
                        component="img"
                        src={imgUrl}
                        alt="Posted Image"
                        sx={{
                            width: originalWidth,
                            height: originalHeight,
                            objectFit: 'contain',
                            marginTop: '6px',
                            [ipadProScreen]: {
                                width: '100%',
                                height: 'auto',
                            },
                            [mobileScreen]: {
                                width: '100%',
                                height: 'auto',
                            },
                            [tabletScreen]: {
                                width: '100%',
                                height: 'auto',
                            },
                        }}
                    />
                )}
            </Box>
        </Box>
    );
}

export default ImageDetailInMessage;
