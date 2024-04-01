import React from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
function BackgroundImageModal({ imgUrl, handleClose }) {
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: 'black',
                width: '1100px',
                maxHeight: '600px',
                margin: 'auto',
                mt: '64px',
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
                    top: '16px',
                    right: '16px',
                    zIndex: 99,
                    '&:hover': {
                        backgroundColor: '#464646',
                    },
                }}
                onClick={handleClose}
            >
                <CloseIcon fontSize="large" sx={{ color: '#fff' }} />
            </IconButton>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {imgUrl && (
                    <Box sx={{ mb: 2, mt: '20px' }}>
                        <img
                            src={imgUrl}
                            alt="Posted Image"
                            style={{
                                width: '900px',
                                height: '200px',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default BackgroundImageModal;
