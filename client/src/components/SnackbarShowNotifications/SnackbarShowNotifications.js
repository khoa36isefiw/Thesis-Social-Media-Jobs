import * as React from 'react';
import { Typography, Button, Snackbar, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// export default function SnackbarShowNotifications() {
//     const [open, setOpen] = React.useState(false);

//     const handleClick = () => {
//         setOpen(true);
//     };

//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }

//         setOpen(false);
//     };

//     return (
//         <div>
//             <Button onClick={handleClick}>Open Snackbar</Button>
//             <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
//                 <Typography>This is a success Alert inside a Snackbar!</Typography>
//                 {/* <Alert
//                     onClose={handleClose}
//                     severity="success"
//                     variant="filled"
//                     sx={{ width: '100%' }}
//                 >
//                     This is a success Alert inside a Snackbar!
//                 </Alert> */}
//             </Snackbar>
//         </div>
//     );
// }

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
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const messageShow = (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CheckCircleIcon fontSize="small" />
            </IconButton>
            <Typography>This post is saved!</Typography>
        </Box>
    );

    return (
        <div>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                // message="Note archived"
                message={messageShow}
                action={action}
            />
        </div>
    );
}
