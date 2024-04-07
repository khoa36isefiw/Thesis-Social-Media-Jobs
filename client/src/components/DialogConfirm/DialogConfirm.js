import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    Box,
    IconButton,
    Divider,
    Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function ConfirmDialog({
    open,
    handleClose,
    handleConfirm,
    title,
    content,
    textActionButton1,
    textActionButton2,
}) {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            sx={{
                '.MuiPaper-root': {
                    borderRadius: '12px',
                    boxShadow: '0 8px 4px #404040',
                },
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                }}
            >
                <IconButton
                    disableFocusRipple
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                        borderRadius: '24px',
                    }}
                    onClick={handleClose}
                >
                    <CloseIcon fontSize="large" />
                </IconButton>
                <DialogTitle
                    sx={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                    }}
                >
                    {/* Discard changes */}
                    {title}
                </DialogTitle>
            </Box>
            <Divider />
            <DialogContent sx={{ width: '340px' }}>
                <DialogContentText sx={{ fontSize: '14px' }}>
                    {/* Are you sure you want to discard the changes you made? */}
                    {content}
                </DialogContentText>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: '24px',
                        fontWeight: 'bold',
                        px: 2,
                        fontSize: '14px',
                        textTransform: 'capitalize',
                    }}
                    onClick={handleClose}
                >
                    {/* No Thanks */}
                    {textActionButton1}
                </Button>
                <Button
                    onClick={handleConfirm}
                    autoFocus
                    variant="contained"
                    sx={{
                        borderRadius: '24px',
                        fontWeight: 'bold',
                        px: 2,
                        fontSize: '14px',
                        textTransform: 'capitalize',
                    }}
                >
                    {/* Discard */}
                    {textActionButton2}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDialog;
