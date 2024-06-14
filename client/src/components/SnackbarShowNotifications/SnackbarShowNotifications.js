import * as React from 'react';
import { Typography, Button, Snackbar, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { blue, green } from '@mui/material/colors';

export default function SnackbarShowNotifications() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
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
            <IconButton onClick={handleClose}>
                <CheckCircleIcon sx={{ fontSize: '24px', color: 'green' }} />
            </IconButton>
            <Typography sx={{ fontSize: '13.5px', color: 'black' }}>This post is saved!</Typography>
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
                See saved posts
            </Typography>
        </Box>
    );

    return (
        <div>
            {/* MuiPaper-root MuiPaper-elevation MuiPaper-elevation6 MuiSnackbarContent-root */}
            <Button onClick={handleClick}>Open Snackbar</Button>
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
                autoHideDuration={8000}
                onClose={handleClose}
                // message="Note archived"
                message={messageShow}
                action={action}
            />
        </div>
    );
}
