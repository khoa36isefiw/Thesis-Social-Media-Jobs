import React, { useState, useEffect } from 'react';
import { Box, IconButton, Divider, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
// import 'animate.css';

function DeleteSomething({ handleClose, showDeleteConfirm }) {
    const [confirmOpen, setConfirmOpen] = useState(showDeleteConfirm);
    const [animationClass, setAnimationClass] = useState('animate__fadeIn'); // default to start an animation

    const handleConfirmClose = () => {
        // setConfirmOpen(false);
        // handleClose();
        setAnimationClass('animate__zoomOut'); // exist
        setTimeout(() => {
            setConfirmOpen(false);
            handleClose();
        }, 500); // Match the animation duration
    };

    const handleModalClose = () => {
        setConfirmOpen(true);
    };

    useEffect(() => {
        if (confirmOpen) {
            setAnimationClass('animate__fadeIn');
        }
    }, [confirmOpen]);

    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#fff',
                width: '350px',
                minHeight: '50px',
                margin: 'auto',
                mt: 20,
                borderRadius: '8px',
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
                    width: '100%',
                    height: '460px',
                },
            }}
            // use animation from animate.css
            // className="animate__animated animate__fadeIn"
            className={`animate__animated ${animationClass}`}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1,
                }}
            >
                <CustomizeTypography fs={'16px'} fw={true}>
                    Delete profile photo
                </CustomizeTypography>
                <IconButton
                    disableFocusRipple
                    sx={{
                        '&:hover': {
                            backgroundColor: '#d9d9d9',
                        },
                    }}
                    onClick={handleClose}
                >
                    <CloseIcon fontSize="large" />
                </IconButton>
            </Box>

            <Divider sx={{ mb: 2 }} />
            <CustomizeTypography sx={{ color: '#191919', p: 1 }}>
                Are you sure? Having a profile picture helps others recognize you.
            </CustomizeTypography>

            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    mx: 1,
                    mb: 2,
                }}
            >
                <DeleteButton variant={'outlined'} deleteText={'Cancel'} />
                <DeleteButton
                    variant={'contained'}
                    deleteText={'Delete'}
                    handleClickDelete={handleConfirmClose}
                />
            </Box>
        </Box>
    );
}

export default DeleteSomething;

const DeleteButton = ({ variant, deleteText, handleClickDelete }) => {
    return (
        <Button
            variant={variant}
            sx={{
                fontSize: '14px',
                padding: '4px 16px',
                textTransform: 'initial',
                fontWeight: 'bold',
                mx: 1,
                borderRadius: '24px',
            }}
            onClick={handleClickDelete}
        >
            {deleteText}
        </Button>
    );
};
