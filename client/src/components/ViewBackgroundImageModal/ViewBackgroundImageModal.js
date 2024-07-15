import React from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';
import { useSelector } from 'react-redux';
function ViewBackgroundImageModal({ bgImgURL, bgStyle, handleClose }) {
    const rotationAngleBackground = useSelector(
        (state) => state.manageAccounts.selectedBackgroundAngle,
    );
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: 'black',
                width: '1100px',
                height: '400px',
                margin: 'auto',
                mt: '64px',
                borderRadius: '12px',
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
                    height: 'auto',
                },
            }}
        >
            <Box
                sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', mx: 1 }}
            >
                <IconButton
                    disableFocusRipple
                    sx={{
                        // position: 'absolute',

                        // top: '16px',
                        // right: '16px',
                        zIndex: 99,
                        '&:hover': {
                            backgroundColor: '#464646',
                        },
                    }}
                    onClick={handleClose}
                >
                    <CloseIcon fontSize="large" sx={{ color: '#fff', fontSize: '28px' }} />
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {bgImgURL && (
                    <Box
                        component={'img'}
                        src={bgImgURL}
                        sx={{
                            padding: 4,
                            // mb: 2,
                            // mt: '20px',
                            width: '900px',
                            height: '350px',
                            objectFit: 'fill',
                            transform: `rotate(${rotationAngleBackground}deg)`,
                            filter: bgStyle,
                            [mobileScreen]: {
                                width: '100%',
                                height: '100%',
                                padding: '3.2rem 4.8rem 4.8rem',
                            },
                        }}
                    />
                )}
            </Box>
        </Box>
    );
}

export default ViewBackgroundImageModal;
