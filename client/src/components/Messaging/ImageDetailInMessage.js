import React from 'react';
import { Avatar, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
function ImageDetailInMessage({ imgUrl, handleClose }) {
    const closeModal = () => {
        handleClose();
        console.log('Image URL is chose: ', imgUrl);
    };
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#fff',
                // width: '80%',
                // height: '80%',
                width: '1150px',
                height: '600px',
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
                <CloseIcon fontSize="large" sx={{ color: '#404040' }} />
            </IconButton>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {imgUrl && (
                    // <Box sx={{ mb: 2, mt: '20px' }}>
                    <Avatar
                        src={imgUrl}
                        alt="Posted Image"
                        sx={{
                            mt: '56px',
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            borderRadius: 0,
                        }}
                    />
                    // </Box>
                )}
            </Box>
        </Box>
    );
}

export default ImageDetailInMessage;
