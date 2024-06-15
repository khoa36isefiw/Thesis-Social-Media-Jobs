import * as React from 'react';
import { Typography, Button, Snackbar, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { blue, green } from '@mui/material/colors';

export default function SnackbarShowNotifications({ mainText, subText, isOpen, setIsOpen }) {
    console.log('get isOpen in Snack : ', isOpen);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsOpen(!isOpen);
        // console.log('');
    };

    const action = (
        <React.Fragment>
            <IconButton size="large" aria-label="close" color="black" onClick={handleClose}>
                <CloseIcon fontSize="large" />
            </IconButton>
        </React.Fragment>
    );

    const messageShow = (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton>
                <CheckCircleIcon sx={{ fontSize: '24px', color: 'green' }} />
            </IconButton>
            <Typography sx={{ fontSize: '13.5px', color: 'black' }}>
                {/* This post is saved! */}
                {mainText}
            </Typography>
            {subText && (
                <Typography
                    sx={{
                        fontSize: '13.5px',
                        color: blue[800],
                        fontWeight: 'bold',
                        '&:hover': {
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        },
                        ml: '4px',
                    }}
                >
                    {/* See saved posts */}
                    {subText}
                </Typography>
            )}
        </Box>
    );

    return (
        <Snackbar
            sx={{
                '.MuiPaper-root': {
                    bgcolor: '#fff',
                    borderRadius: '8px',
                    px: 1,
                    py: 0,
                    width: '350px',
                },
            }}
            open={isOpen}
            autoHideDuration={4000}
            onClose={handleClose}
            message={messageShow}
            action={action}
        />
    );
}
