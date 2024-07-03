import React, { useEffect, useState } from 'react';
import { Typography, Snackbar, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { blue } from '@mui/material/colors';

export default function SnackbarShowNotifications({ mainText, subText, isOpen, onClose }) {
    const [open, setOpen] = useState(isOpen);

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        onClose();
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
            <Typography sx={{ fontSize: '13.5px', color: 'black' }}>{mainText}</Typography>
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
            open={open}
            autoHideDuration={1500}
            onClose={handleClose}
            message={messageShow}
            action={action}
        />
    );
}
